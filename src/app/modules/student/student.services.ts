import { StudentModel } from "../student.models";
import { Student } from "./student.interface";

const createStudentDB = async(student : Student) => {
    const result =await StudentModel.create(student);
    return result;
}

export const studentServices = {
    createStudentDB,
}