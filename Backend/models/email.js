import Notify  from 'app-notify';
import dotenv from 'dotenv'
dotenv.config()
const sendEmail=(receiver,link)=>{
    const cfg = {};

    //setup smtp server
    cfg.smtp = {
        host: 'smtp.gmail.com',
        user: process.env.USER,
        pass: process.env.PASS,
        port: 587
    };

    //setup email headers
    cfg.email = {
        to: receiver,
        from: process.env.USER
    };

    const notify = new Notify(cfg);
    const message = `You have committed a speed violation please pay your fine through this link: `
    //send an email
    notify.email.send({
        subject: 'Speed limit fine',
        message: message + link
    }).then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.error(err);
    });
    
}
export default sendEmail

