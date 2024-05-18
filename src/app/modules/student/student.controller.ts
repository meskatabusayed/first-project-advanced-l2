import { Request, Response } from "express";
import { studentServices } from "./student.services";


const createStudent = async(req : Request , res : Response) => {

    try{
        const student = req.body.student;

    //will call service function to send this data
    const result =await studentServices.createStudentDB(student)



    //send data
    res.status(200).json({
        success : true,
        message : "Getting successfully",
        data : result
    })

    }catch(error){
        console.log(error)
    }
}

export const studentControllers = {
    createStudent,
}