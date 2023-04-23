import api from "./api";

export const getTicketById=async(id)=>{
    return await api.get("/ticket/id/"+id)
}
export const getTicketByLicensePlate=async(licensePlate)=>{
    const params = new URLSearchParams({licensePlate:licensePlate}).toString();
    return await api.get("/ticket/licenseplate/"+params)

}
export const getTicketByDriverLicense=async(driverLicense)=>{
    const params = new URLSearchParams({driverLicense:driverLicense}).toString();
    return await api.get("/ticket/driverlicense/"+params)
}
