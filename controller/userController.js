import { catchAsyncError } from "../middleware/catchAsyncError.js";
import Department from "../model/Department.js";
import { Category } from "../model/Product_Category.js";
import { User } from "../model/User.js";
import cloudinary from "cloudinary";
import multer from "multer";
import Subcategory from "../model/Sub_Category.js";
import Product from "../model/Product.js";
const upload = multer({ dest: "uploads/" });

export const uploadVideos = upload.single("video");

cloudinary.v2.config({
  cloud_name: "ddu4sybue",
  api_key: "658491673268817",
  api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
});

export const register = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Create a new user
  const newUser = new User({ email, password });
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
  const categories = await Category.find();
  res.status(200).json(categories);
});

export const createCategory = catchAsyncError(async (req, res) => {
  const { name, image, departmentID } = req.body;

  // Check if the department exists
  const existingDepartment = await Department.findOne({ departmentID });
  if (!existingDepartment) {
    return res.status(400).json({ message: "Department not found" });
  }

  // Check if the category already exists
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({ message: "Category already exists" });
  }

  // Create a new category
  const newCategory = new Category({ name, image, departmentID });
  await newCategory.save();

  res.status(201).json({ message: "Category created successfully" });
});

export const getAllSubcategories = catchAsyncError(async (req, res) => {
  const subcategories = await Subcategory.find().populate("categoryID").lean();
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
    const { categoryID } = req.params;

    // Find the category by categoryID
    const category = await Category.findById(categoryID).lean();

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Fetch subcategories for the category
    const subcategories = await Subcategory.find({ categoryID }).lean();

    // Add subcategories to the category object
    const categoryWithSubcategories = { ...category, subcategories };

    res.status(200).json(categoryWithSubcategories);
  }
);

export const getAllDepartments = catchAsyncError(async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

export const getSingleDepartment = catchAsyncError(async (req, res) => {
  const { departmentID } = req.params;

  // Find the department by departmentID
  const department = await Department.findOne({ departmentID }).lean();
  console.log(department);
  if (!department) {
    return res.status(404).json({ message: "Department not found" });
  }

  // Fetch categories for the department
  const categories = await Category.find({ departmentID }).lean();

  // Add categories to the department object
  const departmentWithCategories = { ...department, categories };

  res.status(200).json(departmentWithCategories);
});

export const createDepartment = catchAsyncError(async (req, res) => {
  const { name, image, departmentID } = req.body;

  // Check if the department already exists
  const existingDepartment = await Department.findOne({
    $or: [{ name }, { departmentID }],
  });
  if (existingDepartment) {
    return res.status(400).json({ message: "Department already exists" });
  }

  // Create a new department
  const newDepartment = new Department({ name, image, departmentID });
  await newDepartment.save();

  res.status(201).json({ message: "Department created successfully" });
});

export const getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find().lean();
  res.status(200).json(products);
});

export const getSingleProduct = catchAsyncError(async (req, res) => {
  const { productID } = req.params;

  // Find the product by productID
  const product = await Product.findById(productID).lean();

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

export const createProduct = catchAsyncError(async (req, res) => {
  const {
    departmentID,
    categoryID,
    subcategoryID,
    name,
    images,
    price,
    size,
    color,
    condition,
    description,
    tags,
    // Add other product-related fields as needed
  } = req.body;

  // Create a new product
  const newProduct = new Product({
    departmentID,
    categoryID,
    subcategoryID,
    name,
    images,
    price,
    size,
    color,
    condition,
    description,
    tags,
    // Add other product-related fields as needed
  });

  await newProduct.save();

  res.status(201).json({ message: "Product created successfully" });
});

export const getSingleSubcategoryWithProducts = catchAsyncError(
  async (req, res) => {
    const { subcategoryID } = req.params;

    // Find the subcategory by subcategoryID
    const subcategory = await Subcategory.findById(subcategoryID).lean();

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

export const likeProduct = catchAsyncError(async (req, res) => {
  const { productID, userID } = req.params;

  // Find the product by productID
  const product = await Product.findById(productID);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Check if the user has already liked the product
  if (!product.likes.includes(userID)) {
    // Add the user to the likes array
    product.likes.push(userID);
    await product.save();
    res.status(200).json({ message: "Product liked successfully" });
  } else {
    res.status(400).json({ message: "User already liked the product" });
  }
});

export const dislikeProduct = catchAsyncError(async (req, res) => {
  const { productID, userID } = req.params;

  // Find the product by productID
  const product = await Product.findById(productID);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Check if the user has already liked the product
  if (!product.likes.includes(userID)) {
    return res
      .status(400)
      .json({ message: "Cannot dislike a product that has not been liked" });
  }

  // Check if the user has already disliked the product
  if (!product.dislikes.includes(userID)) {
    // Add the user to the dislikes array
    product.dislikes.push(userID);
    await product.save();
    return res.status(200).json({ message: "Product disliked successfully" });
  } else {
    return res
      .status(400)
      .json({ message: "User already disliked the product" });
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
  user.profileImage = req.body.profileImage || user.profileImage;
  user.zipCode = req.body.zipCode || user.zipCode;

  // Save the updated user profile
  await user.save();

  res.status(200).json({ message: "User profile updated successfully" });
});
