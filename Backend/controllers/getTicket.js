import { getTicketData } from "../models/ticket.js";
import { base58ToHex } from "../models/hashConversion.js";
import contract from "../models/contract.js";
const getTicket = async (hash) => {
    const value=await contract.getTicketValue(base58ToHex(hash))
    const ticket= await getTicketData(hash)
    const [ticketResult, valueResult] = await Promise.all([ticket, value]);
    return [ticketResult, valueResult]
}
export default getTicket