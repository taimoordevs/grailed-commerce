import { catchAsyncError } from "../middleware/catchAsyncError.js";
import Department from "../model/Department.js";
import { Category } from "../model/Product_Category.js";
import { User } from "../model/User.js";
import cloudinary from "cloudinary";
import multer from "multer";
import Subcategory from "../model/Sub_Category.js";
import Product from "../model/Product.js";
import Store from "../model/Store.js";
import Brand from "../model/Brand.js";
const upload = multer({ dest: "uploads/" });

export const uploadVideos = upload.single("video");

cloudinary.v2.config({
  cloud_name: "ddu4sybue",
  api_key: "658491673268817",
  api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
});

export const register = catchAsyncError(async (req, res) => {
  const { email, password, type } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });

  if (!type) {
    return res.status(401).json({ success: true, message: "Please Add Type" });
  }

  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Create a new user
  const newUser = new User({ email, password, type });
  await newUser.save();

  res
    .status(201)
    .json({ success: true, message: "User registered successfully" });
});

export const login = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ success: true, message: "Invalid credentials" });
  }

  // Check if the password is correct (without hashing)
  if (password !== user.password) {
    return res
      .status(401)
      .json({ success: true, message: "Invalid credentials" });
  }

  res
    .status(200)
    .json({ success: true, data: user, message: "Login successful" });
});

export const getAllCategories = catchAsyncError(async (req, res) => {
  const categories = await Category.find().populate("departmentID").lean();
  res.status(200).json(categories);
});

export const createCategory = catchAsyncError(async (req, res) => {
  const { name, image, departmentID } = req.body;
  // Check if the department exists
  const existingDepartment = await Department.findById(departmentID);
  if (!existingDepartment) {
    return res.status(400).json({ message: "Department not found" });
  }

  // Check if the category already exists
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({ message: "Category already exists" });
  }

  // Create a new category with the actual department ID
  const newCategory = new Category({
    name,
    image,
    departmentID,
  });
  await newCategory.save();

  res.status(201).json({ message: "Category created successfully" });
});

export const getAllSubcategories = catchAsyncError(async (req, res) => {
  const subcategories = await Subcategory.find()
    .populate("categoryID")
    .populate("departmentID")
    .lean();
  res.status(200).json(subcategories);
});

export const createSubcategory = catchAsyncError(async (req, res) => {
  const { name, image, departmentID, categoryID } = req.body;

  // Check if the parent category exists
  const existingCategory = await Category.findById(categoryID);
  if (!existingCategory) {
    return res.status(400).json({ message: "Parent category not found" });
  }

  // Create a new subcategory
  const newSubcategory = new Subcategory({
    name,
    image,
    departmentID,
    categoryID,
  });
  await newSubcategory.save();

  res.status(201).json({ message: "Subcategory created successfully" });
});

export const getSingleCategoryWithSubcategories = catchAsyncError(
  async (req, res) => {
    try {
      const { categoryID } = req.params;

      // Find the category by categoryID and populate the 'department' field
      const category = await Category.findById(categoryID)
        .populate("departmentID")
        .lean();

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Fetch subcategories for the category and populate the 'department' field
      const subcategories = await Subcategory.find({ categoryID })
        .populate({
          path: "departmentID",
          model: "Department",
        })
        .lean();

      // Populate products for each subcategory and populate createdBy field
      for (const subcategory of subcategories) {
        subcategory.products = await Product.find({
          subcategoryID: subcategory._id,
        })
          .populate({
            path: "createdBy",
            model: "User", // Adjust the model name based on your user model
            // select: "username email", // Specify the fields you want to retrieve
          })
          .lean();
      }
      // Add subcategories to the category object
      const categoryWithSubcategories = { ...category, subcategories };

      res.status(200).json(categoryWithSubcategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const getAllDepartments = catchAsyncError(async (req, res) => {
  try {
    const departments = await Department.find().lean();

    const departmentsWithCategories = await Promise.all(
      departments.map(async (department) => {
        const categories = await Category.find({
          departmentID: department._id,
        }).lean();

        const categoriesWithSubcategories = await Promise.all(
          categories.map(async (category) => {
            const subcategories = await Subcategory.find({
              categoryID: category._id,
            }).lean();
            return { ...category, subcategories };
          })
        );

        return { ...department, categories: categoriesWithSubcategories };
      })
    );

    res.status(200).json(departmentsWithCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getSingleDepartment = catchAsyncError(async (req, res) => {
  const { departmentID } = req.params;

  // Find the department by _id
  const department = await Department.findById(departmentID).lean();

  if (!department) {
    return res.status(404).json({ message: "Department not found" });
  }

  // Convert department._id to a string
  const departmentIdString = department._id.toString();
  console.log(departmentIdString);
  // Fetch categories for the department using populate
  const categories = await Category.find({ departmentID: departmentIdString })
    .populate("departmentID")
    .lean();

  // Add categories to the department object
  const departmentWithCategories = { ...department, categories };

  res.status(200).json(departmentWithCategories);
});

export const createDepartment = catchAsyncError(async (req, res) => {
  const { name, image } = req.body;

  // Check if the department already exists
  const existingDepartment = await Department.findOne({
    $or: [{ name }],
  });
  if (existingDepartment) {
    return res.status(400).json({ message: "Department already exists" });
  }

  // Create a new department
  const newDepartment = new Department({ name, image });
  await newDepartment.save();

  res.status(201).json({ message: "Department created successfully" });
});

export const getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find()
    .populate("departmentID categoryID subcategoryID createdBy brandID")
    .lean();
  res.status(200).json(products);
});

export const getSingleProduct = catchAsyncError(async (req, res) => {
  const { productID } = req.params;

  try {
    // Find the product by productID and populate the 'createdBy' field
    const product = await Product.findById(productID)
      .populate("departmentID categoryID subcategoryID createdBy brandID")
      .lean();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const createProduct = catchAsyncError(async (req, res) => {
  const {
    departmentID,
    categoryID,
    subcategoryID,
    name,
    images,
    regularPrice,
    salePrice, // Add sale price to the request body
    discount, // Add discount to the request body
    size,
    color,
    condition,
    description,
    brandID,
    tags,
    userID, // Change to userID for consistency
    // Add other product-related fields as needed
  } = req.body;

  try {
    // Fetch the user who created the product
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch the user who created the product
    const departmentC = await Department.findById(departmentID);

    if (!departmentC) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Fetch the user who created the product
    const categoryC = await Category.findById(categoryID);

    if (!categoryC) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Fetch the user who created the product
    const subcategoriesC = await Subcategory.findById(subcategoryID);

    if (!subcategoriesC) {
      return res.status(404).json({ message: "Sub Categories not found" });
    }

    // Fetch the user who created the product
    const brandC = await Brand.findById(brandID);

    if (!brandC) {
      return res.status(404).json({ message: "Brand not found" });
    }

    // Create a new product
    const newProduct = new Product({
      departmentID,
      categoryID,
      subcategoryID,
      name,
      images,
      regularPrice,
      salePrice,
      discount,
      size,
      color,
      condition,
      description,
      tags,
      brandID,
      createdBy: {
        _id: user._id,
        name: user.name,
        // Add other user details as needed
      },
      // Add other product-related fields as needed
    });

    // Update the brand document with the new product
    brandC.products.push(newProduct._id);
    await brandC.save();

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product created successfully", newProduct });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getSingleSubcategoryWithProducts = catchAsyncError(
  async (req, res) => {
    const { subcategoryID } = req.params;

    // Find the subcategory by subcategoryID and populate 'departmentID' and 'categoryID'
    const subcategory = await Subcategory.findById(subcategoryID)
      .populate("departmentID")
      .populate("categoryID")
      .lean();

    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    // Fetch products for the subcategory
    const products = await Product.find({ subcategoryID }).lean();

    // Add products to the subcategory object
    const subcategoryWithProducts = { ...subcategory, products };

    res.status(200).json(subcategoryWithProducts);
  }
);

export const toggleLikeDislike = catchAsyncError(async (req, res) => {
  const { productID, userID } = req.params;
  // console.log(productID);
  // console.log(userID);
  try {
    // Find the product by productID
    const product = await Product.findById(productID);
    // console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the user has already liked the product
    const likedIndex = product.likes.indexOf(userID);

    // Toggle between liking and disliking based on the current state
    if (likedIndex === -1) {
      // If the user hasn't liked the product, add their ID to the likes array
      product.likes.push(userID);
    } else {
      // If the user has liked the product, remove their ID from the likes array
      product.likes.splice(likedIndex, 1);
    }

    await product.save();
    res.status(200).json({
      message: "Like status toggled successfully",
      liked: likedIndex === -1,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const updateProfile = catchAsyncError(async (req, res) => {
  const { userID } = req.params;

  // Find the user by userID
  const user = await User.findById(userID);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update user profile fields
  user.name = req.body.name || user.name;
  user.streetAddress = req.body.streetAddress || user.streetAddress;
  user.aptSuite = req.body.aptSuite || user.aptSuite;
  user.city = req.body.city || user.city;
  user.state = req.body.state || user.state;
  user.country = req.body.country || user.country;
  user.profile_image = req.body.profile_image || user.profile_image;
  user.zipCode = req.body.zipCode || user.zipCode;
  user.bio = req.body.bio || user.bio;

  // Save the updated user profile
  await user.save();

  res.status(200).json({ message: "User profile updated successfully" });
});

export const uploadImage = catchAsyncError(async (req, res) => {
  let images = [];
  if (req.files && req.files.avatars) {
    if (!Array.isArray(req.files.avatars)) {
      images.push(req.files.avatars);
    } else {
      images = req.files.avatars;
    }
  }
  let responce = [];
  for (const image of images) {
    try {
      const result = await cloudinary.v2.uploader.upload(image.tempFilePath);
      const publidId = result.public_id;
      const url = result.url;
      let data = {
        publidId,
        url,
      };
      //  console.log(data);
      responce.push(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error uploading images" });
    }
  }
  res.send(responce);
});

export const addAddress = catchAsyncError(async (req, res) => {
  const { userId, newAddress } = req.body;
  // console.log(userId, newAddress);
  try {
    const user = await User.findById(userId);
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.addresses.push(newAddress);
    await user.save();

    res.status(200).json({ message: "Address added successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getAddress = catchAsyncError(async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const createNewStore = async (
  userId,
  storeName,
  storeDescription,
  storeImage
) => {
  const newStore = new Store({
    name: storeName,
    description: storeDescription,
    owner: userId,
    storeImage: storeImage,
  });

  await newStore.save();

  // Update the user's store field
  await User.findByIdAndUpdate(userId, { store: newStore._id });

  return newStore;
};

export const createStore = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  const { storeName, storeDescription, storeImage } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user already has a store
    if (user.store) {
      return res.status(400).json({ message: "User already has a store" });
    }

    // Create a new store for the user
    const newStore = await createNewStore(
      userId,
      storeName,
      storeDescription,
      storeImage
    );

    res.status(201).json({
      message: "Store created successfully",
      store: newStore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const addProductToStore = catchAsyncError(async (req, res) => {
  const {
    departmentID,
    categoryID,
    subcategoryID,
    name,
    images,
    regularPrice,
    salePrice,
    discount,
    size,
    color,
    condition,
    description,
    tags,
    brandID, // Include brandID in the request body
  } = req.body;

  const createdBy = req.params.userId;
  const storeId = req.params.storeId; // Assuming you have the store ID

  try {
    // Check if the user exists
    const user = await User.findById(createdBy);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has a store
    if (!user.store) {
      return res.status(400).json({ message: "User does not have a store" });
    }

    // Create a new product
    const newProduct = new Product({
      departmentID,
      categoryID,
      subcategoryID,
      name,
      images,
      regularPrice,
      salePrice,
      discount,
      createdBy,
      size,
      color,
      condition,
      description,
      tags,
      brandID, // Include brandID in the product creation
    });

    await newProduct.save();

    // Add product to the store
    const store = await Store.findById(storeId);

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    store.products.push(newProduct._id);
    await store.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// export const addProductToStore = catchAsyncError(async (req, res) => {
//   const {
//     departmentID,
//     categoryID,
//     subcategoryID,
//     name,
//     images,
//     regularPrice,
//     salePrice,
//     discount,
//     size,
//     color,
//     condition,
//     description,
//     tags,
//   } = req.body;

//   const createdBy = req.params.userId;
//   const storeId = req.params.storeId; // Assuming you have the store ID

//   try {
//     // Check if the user exists
//     const user = await User.findById(createdBy);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the user has a store
//     if (!user.store) {
//       return res.status(400).json({ message: "User does not have a store" });
//     }

//     // Create a new product
//     const newProduct = new Product({
//       departmentID,
//       categoryID,
//       subcategoryID,
//       name,
//       images,
//       regularPrice,
//       salePrice,
//       discount,
//       createdBy,
//       size,
//       color,
//       condition,
//       description,
//       tags,
//     });

//     await newProduct.save();

//     // Add product to the store
//     const store = await Store.findById(storeId);

//     if (!store) {
//       return res.status(404).json({ message: "Store not found" });
//     }

//     store.products.push(newProduct._id);
//     await store.save();

//     res
//       .status(201)
//       .json({ message: "Product added successfully", product: newProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

export const getAllProductsInStore = catchAsyncError(async (req, res) => {
  const userId = req.params.userId;
  const storeId = req.params.storeId;

  try {
    // Check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has a store
    if (!user.store) {
      return res.status(400).json({ message: "User does not have a store" });
    }

    // Check if the store exists
    const store = await Store.findById(storeId);

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Get all products in the store
    const products = await Product.find({ _id: { $in: store.products } });

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const createBrand = catchAsyncError(async (req, res) => {
  const { name, logo, image, description } = req.body;

  // Check if a brand with the same name already exists
  const existingBrand = await Brand.findOne({ name });

  if (existingBrand) {
    return res.status(400).json({ message: "Brand name is already taken" });
  }

  // Create a new brand
  const newBrand = new Brand({
    name,
    logo,
    image,
    description,
  });

  await newBrand.save();

  res
    .status(201)
    .json({ message: "Brand created successfully", brand: newBrand });
});

export const getSingleBrand = catchAsyncError(async (req, res) => {
  const { brandId } = req.params;

  try {
    // Find the brand by ID and populate the 'products' field
    const brand = await Brand.findById(brandId).populate("products").lean();

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getAllBrands = catchAsyncError(async (req, res) => {
  const brands = await Brand.find();

  res.status(200).json({ success: true, brands });
});

export const getSingleUser = catchAsyncError(async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch the user with their store details
    const userWithStore = await User.findById(userId).populate({
      path: "store",
      populate: {
        path: "products", // Assuming you want to populate the products within the store
      },
    });

    if (!userWithStore) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: userWithStore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getSingleStoreWithDetails = catchAsyncError(async (req, res) => {
  const storeId = req.params.storeId;

  try {
    // Fetch the store with its details, including products and owner details
    const storeWithDetails = await Store.findById(storeId)
      .populate("owner", "-password") // Exclude password from owner details
      .populate("products"); // Assuming you want to populate the products within the store

    if (!storeWithDetails) {
      return res.status(404).json({ message: "Store not found" });
    }

    res.status(200).json({ store: storeWithDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
