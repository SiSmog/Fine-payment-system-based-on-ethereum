import api from "./api";

const getTicketData=async(ticket)=>{
    return await api.post("/",ticket)
}
export default getTicketData