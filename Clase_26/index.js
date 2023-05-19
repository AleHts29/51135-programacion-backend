const express = require("express");
const routerProduct = require("./src/routes/product.router.js")

app.use(express.json());
const app = express();
const PORT = 8080;


// Router
app.use("/api", routerProduct)



app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})