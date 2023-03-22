import db from "../models/database.js"

const getFineData=(hash)=>{
    const profile = db.get(hash)
    return profile.payload.value
}
export default getFineData