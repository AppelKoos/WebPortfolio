const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "*************",
        pass: "*************"
    }
});

exports.sendEmail = functions.database.ref('/messages/{name}').onCreate((snap, context) => {
    const vals = snap.val();
    var name = vals.name;
    var email = vals.email;
    var message = vals.message;

    var mailOptions = {
        from: "*************",
        to: "*************",
        subject: 'New Form Submitted',
        html: `<h1>New message sent from website:</h2><p>From: ${name}, ${email}</p> <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return null;

});
const functionsVeri = require('firebase-functions')
const rp = require('request-promise')

exports.checkRecaptcha = functionsVeri.https.onRequest((req, res) => {
    const response = req.query.response
    console.log("recaptcha response", response)
    rp({
        uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        method: 'POST',
        formData: {
            secret: "Secret_Key",
            response: response
        },
        json: true
    }).then(result => {
        console.log("recaptcha result", result)
        if (result.success) {
            console.log("You're good to go, human.");
            res.status(500).end();
        }
        else {
            console.log("Recaptcha verification failed. Are you a robot?");
            disableBtn();
            res.send("Recaptcha verification failed. Are you a robot?")
            res.status(500).end();
        }
    }).catch(reason => {
        console.log("Recaptcha request failure", reason)

    })
})

