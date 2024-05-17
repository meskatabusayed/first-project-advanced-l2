import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName : string;
    fatherOccupation : string;
    fatherContact : string;
    motherName : string;
    motherOccupation : string;
    motherContact : string;
}

export type UserName = {
    firstName : string;
    middleName : string;
    lastName : string;
    
}
export type LocalGuardian = {
    name : string;
    contactNo : string;
}

export type Student = {
    id : string;
    name: UserName;
    gender : "male" | "female";
    dateOfBirth : string;
    email: string;
    contactNo : string;
    emergencyContactNo : string;
    bloodGroup? : "A+" | "B+"| "B-"| "AB+"| "AB-"| "O+"| "O-";
    presentAddress : string;
    parmanentAddress : string;
    guardian : Guardian;
    localGuirdian : LocalGuardian;
    profileimage?: string;
    isActive : "active" | "unActive";
    

   
  }