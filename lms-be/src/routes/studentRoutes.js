import express from "express"
import {verifyToken} from "../middlewares/verifyToken.js"
import { deleteStudent, getStudents, getStudentsById, postStudents, updateStudents } from "../controllers/studentController.js"
import multer from "multer"
import { fileFilter, fileStorage } from "../utils/multer.js"

const studentRoutes = express.Router()

const upload = multer({
    storage: fileStorage('students'),
    fileFilter
})

studentRoutes.get('/students', verifyToken, getStudents)
studentRoutes.get('/students/:id', verifyToken, getStudentsById)
studentRoutes.post('/students', verifyToken, upload.single('avatar'), postStudents)
studentRoutes.put('/students/:id', verifyToken, upload.single('avatar'), updateStudents)
studentRoutes.delete('/students/:id', verifyToken, deleteStudent)

export default studentRoutes