import { getTicketDataById } from "../models/ticket.js";

export const getTicketById = async (Id) => {
    const ticket= await getTicketDataById(Id)
    return ticket
}
