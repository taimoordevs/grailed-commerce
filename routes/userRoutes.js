import express from "express";
import {
  register,
  login,
  getAllCategories,
  createCategory,
  getAllDepartments,
  createDepartment,
  getSingleDepartment,
  createSubcategory,
  getAllSubcategories,
  getSingleCategoryWithSubcategories,
  createProduct,
  getAllProducts,
  getSingleProduct,
  getSingleSubcategoryWithProducts,
  updateProfile,
  uploadImage,
  toggleLikeDislike,
  addAddress,
  getAddress,
} from "../controller/userController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/users/:userID/profile").post(updateProfile);
router.route("/getAllCategories").post(getAllCategories);
router.route("/getSingleDepartment/:departmentID").post(getSingleDepartment);
router.route("/createCategory").post(createCategory);
router.route("/getAllDepartments").post(getAllDepartments);
router.route("/createDepartment").post(createDepartment);
router.route("/createSubcategory").post(createSubcategory);
router.route("/getAllSubcategories").post(getAllSubcategories);
router.route("/uploadImage", upload.array("avatars")).post(uploadImage);
router
  .route("/getSingleCategory/:categoryID")
  .post(getSingleCategoryWithSubcategories);
router.route("/createProduct").post(createProduct);
router.route("/getAllProducts").post(getAllProducts);
router.route("/toggleLikeDislike/:productID/:userID").post(toggleLikeDislike);
// router.route("/products/:productID/dislike/:userID").post(dislikeProduct);
router.route("/getSingleProduct/:productID").post(getSingleProduct);
router
  .route("/getSingleSubCategories/:subcategoryID")
  .post(getSingleSubcategoryWithProducts);
router.route("/addAddress").post(addAddress);
router.route("/getAddress/:userId").post(getAddress);



export default router;
