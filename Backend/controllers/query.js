import db from "../models/database.js"

const query=()=>{
    var result=""
    const iterator = db.iterator({ limit: -1 })
    for (const entry of iterator) {
        if (entry.payload.value.name == 'majdi') {
            result=entry.payload.value
            }
    }
    return result

}
export default query
