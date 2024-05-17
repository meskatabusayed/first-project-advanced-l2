import { Schema, model, connect } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface'

const UserNameSchema  = new Schema<UserName>({
    
        firstName : {type : String , required : true},
        middleName : {type : String},
        lastName : {type : String , required : true}
    

});

const GuardianSchema = new Schema<Guardian>({
    fatherName : {type : String , required : true},
    fatherOccupation : {type : String},
    fatherContact : {type : String , required : true},
    motherName : {type : String},
    motherOccupation : {type : String},
    motherContact : {type : String}
});

const LocalGuardianSchema = new Schema<LocalGuardian>(
    {
        name : {type : String , required : true},
        contactNo : {type : String , required : true}
    }
)

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
    id : {type : String , required : true},
    name : UserNameSchema,
    gender : ["male" , "female"],
    dateOfBirth : {type : String , required : true },
    email : {type : String , required : true },
    contactNo : {type : String , required : true},
    emergencyContactNo : {type : String , required : true},
    bloodGroup :  [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
      ],
    presentAddress : {type : String , required : true},
    parmanentAddress : {type : String , required : true},
    guardian: GuardianSchema,
    localGuirdian : LocalGuardianSchema,
    profileimage : {type : String},
    isActive : ["active" , "unActive"]



})


//// 3. Create a Model.
const Student = model<Student>('Student' , studentSchema);