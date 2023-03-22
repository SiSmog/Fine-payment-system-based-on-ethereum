import db from "../models/database.js"

const test=()=>{
    const profile = db.get("zdpuAkkvZcpftNCBcGsQj99MYXsxnn42FEogVin5kSunrbxB9")
    console.log(profile.payload.value)
    return profile.payload.value
}
export default test
