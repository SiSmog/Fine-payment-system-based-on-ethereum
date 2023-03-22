import Notify  from 'app-notify';

const cfg = {};

//setup smtp server
cfg.smtp = {
    host: 'smtp.office365.com',
    user: 'majdirekik60@outlook.com',
    pass: 'majdi2013',
    port: 587
};

//setup email headers
cfg.email = {
    to: 'majdirekik60@gmail.com',
    from: 'majdirekik60@outlook.com'
};

const notify = new Notify(cfg);

//send an email
notify.email.send({
    subject: 'This is a test',
    message: 'Hello world!'
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.error(err);
});

