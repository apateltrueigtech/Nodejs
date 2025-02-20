import express from 'express';
import { getAllEmp } from '../controller/userController.js';
import { addEmp } from '../controller/userController.js';
const router = express.Router()

router.get("/getAll",getAllEmp);
router.post("/addEmp",addEmp);
router.put("/emp/:empId",updateEmp)




export default router;
