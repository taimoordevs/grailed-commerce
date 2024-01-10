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
  likeProduct,
  dislikeProduct,
  updateProfile,
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
router
  .route("/getSingleCategory/:categoryID")
  .post(getSingleCategoryWithSubcategories);
router.route("/createProduct").post(createProduct);
router.route("/getAllProducts").post(getAllProducts);
router.route("/products/:productID/like/:userID").post(likeProduct);
router.route("/products/:productID/dislike/:userID").post(dislikeProduct);
router.route("/getSingleProduct/:productID").post(getSingleProduct);
router
  .route("/getSingleSubCategories/:subcategoryID")
  .post(getSingleSubcategoryWithProducts);

export default router;
