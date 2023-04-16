import api from "./api";

const getTicketData=async(hash)=>{
    return await api.get("/"+hash)
}
export default getTicketData