import BusinessService from "../services/dao/business.dao.js";
import config from "../config/config.js";
import twilio from 'twilio';

const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken);
const twilioSMSOptions = {
    body: "Esto es un mensaje SMS de prueba usando Twilio desde Coderhouse.",
    from: config.twilioSmsNumber,
    to: "+XXXXXXXXX"
}

export const sendSMS = async (req, res) => {
    // Logica
}