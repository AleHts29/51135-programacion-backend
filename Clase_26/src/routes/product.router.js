const express = require("express");
const {
    getDatosControllers,
    postDatosControllers,
    deleteDatosControllers
} = require('../controllers/produts.Controller.js')

const router = express.Router();



// get
router.get('/', getDatosControllers);

// post
router.post('/', postDatosControllers);

// delete
router.delete('/', deleteDatosControllers);


module.exports = router;