import api from "./api";

const register=async(ticket)=>{
    return await api.post("/",ticket)
}
export default register