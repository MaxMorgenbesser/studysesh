 export interface UserModel {
    userName:string;
    id:string;
    email:string;
    phoneNumber:string;
}

export interface SignupFormData {
    userName:string,
    email:string,
    phoneNumber:string
}

export interface userPayload {
    payload:UserModel
}

export interface userSelector {
    user:UserModel
}

