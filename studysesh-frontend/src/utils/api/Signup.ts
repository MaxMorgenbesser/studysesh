import axios from 'axios'
import { SignupFormData } from '../../Models/User.Model'



export const Signup = async (SignupData:SignupFormData) => {
const response = axios.post(import.meta.env.VITE_API_URL + 'user/signup', {'user':{...SignupData}} )
return (response)

}