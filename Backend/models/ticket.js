import db from "./database.js"

export const getTicketData=async(hash)=>{
    return await db.get(hash)
}
export const getTicketDataById=async(id)=>{
    var result=[]
    const iterator = db.iterator({ limit: -1 })
    for (const entry of iterator) {
        if (entry.payload.value.id == id) {
            result.push({hash:entry.hash,data:entry.payload.value})
        }
    }
    return result
}
export const getTicketDataByDriverLicense=async(driverLicense)=>{
    var result=[]
    const iterator = db.iterator({ limit: -1 })
    for (const entry of iterator) {
        if (entry.payload.value.driverLicense == driverLicense) {
            result.push({hash:entry.hash,data:entry.payload.value})
        }
    }
    return result
}
export const getTicketDataByLicensePlate=async(licensePlate)=>{
    var result=[]
    const iterator = db.iterator({ limit: -1 })
    for (const entry of iterator) {
        if (entry.payload.value.licensePlate == licensePlate) {
            result.push({hash:entry.hash,data:entry.payload.value})
        }
    }
    return result
}

