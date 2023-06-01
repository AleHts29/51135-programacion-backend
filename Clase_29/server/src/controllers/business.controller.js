// Importar DAOs
import BusinessService from "../services/dao/business.dao.js";

const businessService = new BusinessService()

export const getBusiness = async (req, res) => {
    // res.send({ message: "Success!", payload: "getBusiness: Por implementar" });
    try {
        const businesses = await businessService.getAll();
        res.send({ message: "Success!", payload: businesses });
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de business.");
        res.status(500).send({ error: error });
    }
}


export const getBusinessById = async (req, res) => {
    res.send({ message: "Success!", payload: "getBusinessById: Por implementar" });
}


export const saveBusiness = async (req, res) => {
    // res.send({ message: "Success!", payload: "saveBusiness: Por implementar" });
    try {
        const business = req.body;
        const result = await businessService.save(business);
        res.status(201).send({ message: "Success!", payload: result });
    } catch (error) {
        console.error("Hubo un problema creando el business.");
        res.status(500).send({ error: error });
    }
}


export const getBusinessesByCategory = async (req, res) => {
    // res.send({ message: "Success!", payload: "getBusinessesByCategory: Por implementar" });
    try {
        const category = req.param.category;
        const result = await businessService.getBusinessesByCategory(category);
        res.status(200).send({ message: "Success!", payload: result });
    } catch (error) {
        console.error("Hubo un problema creando el business.");
        res.status(500).send({ error: error });
    }
}
