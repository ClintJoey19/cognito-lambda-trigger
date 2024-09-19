"use server";
import connectToDB from "../db";
import User from "../models/user.model";
import { parseJSON } from "../utils";

export type Role = "user" | "hr" | "tl" | "admin";

export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
};

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

export const updateUser = async (id: string, user: User) => {
  try {
    await connectToDB();

    const res = await User.findByIdAndUpdate(id, user);

    if (!res) throw new Error("Unable to update user credentials");

    return parseJSON(res);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
  }
};
