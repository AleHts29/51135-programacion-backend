import { UserModel } from "../models/usersModels.js";

export async function createUser(data) {
  try {
    const response = await UserModel.create(data);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
