import { getUserByEmail } from '../Authentication/repo'

const nodemailer = require('nodemailer')
//TOOD take creds from env
var transport = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
        user: 'admantiumboy@gmail.com',
        pass: 'QAVZd3hgDmITLrsp',
    },
})
function getEmailBody(email, url) {
    return {
        from: 'no-reply@test.com',
        to: email,
        subject: 'Email Verification',
        html: `<p>Click here to <a href=${url}>Verify</a><p/>`,
    }
}
function sendVerifyMail(email, token) {
    const url = 'http://localhost:8080/verify?token=' + token
    const message = getEmailBody(email, url)
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}
export { sendVerifyMail }
