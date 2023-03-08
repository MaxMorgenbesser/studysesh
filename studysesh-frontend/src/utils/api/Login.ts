import axios from 'axios'
import { LoginModel } from '../../Models/User.Model'



export const Login = async (LoginData:LoginModel) => {
const response = axios.post(import.meta.env.VITE_API_URL + 'user/login/', {'user':LoginData} )
return response
}