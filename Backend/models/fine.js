import db from "./database.js"

export const getFineData=(hash)=>{
    const data = db.get(hash)
    return data.payload.value
}

