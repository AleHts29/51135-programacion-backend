import nodemailer from 'nodemailer';
import config from '../config/config.js';
import __dirname from '../utils.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmailAccount,
        pass: config.gmailAppPassword
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const mailOptions = {
    // Cuerpo del mensaje
}

const mailOptionsWithAttachments = {
    // Cuerpo del mensaje
}

export const sendEmail = (req, res) => {
    // Logica
};

export const sendEmailWithAttachments = (req, res) => {
    // Logica
}