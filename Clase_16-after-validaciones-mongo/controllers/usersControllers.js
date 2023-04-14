import * as UserServices from "../services/usersServices.js";

export async function createUser(req, res) {
  try {
    const { body } = req;
    const response = await UserServices.createUser(body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
