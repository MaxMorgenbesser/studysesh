import axios from 'axios'
import { SignupFormData } from '../../Models/User.Model'



export const Signup = async (SignupData:SignupFormData) => {
const response = axios.post('http://localhost:3000/login', {'user':{...SignupData}} )
return (await response).data

}