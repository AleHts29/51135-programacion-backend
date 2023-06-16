const users = [];

export const getUsers = (req, res) => {
    try {
        res.send({message: "Success!", payload: users});
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los usuarios."});
    }
    
}

export const saveUser = (req, res) => {
    //try {
        console.log(req.body);
        const {first_name, last_name, age, email} = req.body;
        if (!first_name || !email) {
            return res.status(400).send({status: "error", error: "Parametros requeridos para crear el usuario!"});
        }

        const userDto = {
            first_name,
            last_name, 
            age,
            email
        }
        if (users.length === 0) {
            userDto.id = 1;
        } else {
            userDto.id = users[users.length-1].id + 1;
        }
        users.push(userDto);
        return res.status(201).send({status: "success", payload: userDto});
    /*} catch (error) {
        console.error(error);
        res.status(500).send({error:  error.code, message: error.message});
    }*/
}