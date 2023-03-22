import CryptoJS from 'crypto-js';
const hash=(input)=>{
    return CryptoJS.SHA256(input).toString()
}
export default hash