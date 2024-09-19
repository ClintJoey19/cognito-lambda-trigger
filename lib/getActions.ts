import connectToDB from "./db";
import User from "./models/user.model";
import { parseJSON } from "./utils";

export const getUsers = async () => {
  try {
    await connectToDB();

    const res = await User.find();

    if (!res) throw new Error("Users not found");

    return parseJSON(res);
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectToDB();

    const res = await User.findById(id);

    if (!res) throw new Error("User not found");

    return parseJSON(res);
  } catch (error) {
    console.error(error);
  }
};

export const getUserByEmail = async (email?: string) => {
  try {
    await connectToDB();

    const res = await User.findOne({
      email,
    });

    if (!res) throw new Error("User not found");

    return parseJSON(res);
  } catch (error) {
    console.error(error);
  }
};
