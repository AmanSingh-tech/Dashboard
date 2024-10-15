"use server";
import { redirect } from 'next/navigation';
import { Users, Products } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";
import { revalidatePath } from 'next/cache';

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectToDb();

    // Validation: Ensure required fields are present
    if (!username || !email || !password || !phone) {
      throw new Error("All fields are required.");
    }

    // Hash the password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new Users({
      username,
      email,
      password: hashedPassword, // Store hashed password
      phone,
      address,
      isAdmin: isAdmin === "true",
      isActive: isActive === "true", 
    });

    await newUser.save();
    return { success: true, redirect: '/dashboard/users' }; // Return success and redirect path
  } catch (err) {
    console.error(err); // Logs the original error for debugging
    throw new Error(`Failed to create User: ${err.message}`);
  }
};

export const addProducts = async (formData) => {
  const { title, desc, price, stock, color, size, category } = Object.fromEntries(formData);
  
  try {
    await connectToDb();

    // Validation: Ensure required fields are present
    if (!title || !price || !stock || !category) {
      throw new Error("Title, price, stock, and category are required.");
    }

    // Create a new product instance
    const newProduct = new Products({
      title,
      desc,
      price,
      stock,
      color,
      size,
      category,
    });

    await newProduct.save();
    return { success: true, redirect: '/dashboard/products' }; // Return success and redirect path
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to create product: ${e.message}`);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const deletedUser = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new Error("User not found.");
    }
    revalidatePath("/dashboard/users");
  } catch (e) {
    console.error("Failed to delete user:", e);
    throw new Error(`Failed to delete user: ${e.message}`);
  }
};

export const deleteProducts = async (formData) => {
  const { id } = Object.fromEntries(formData);
  
  try {
    await connectToDb();
    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found.");
    }
    revalidatePath("/dashboard/products");
  } catch (e) {
    console.error("Failed to delete product:", e);
    throw new Error(`Failed to delete product: ${e.message}`);
  }
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectToDb();

    const updateFields = {
      username,
      email,
      phone,
      address,
      isAdmin: isAdmin === "true",
      isActive: isActive === "true",
    };

    // Only update fields that are provided
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt); // Hash the new password
    }

    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
    );

    await Users.findByIdAndUpdate(id, updateFields);
    revalidatePath("/dashboard/users");
    return { success: true, redirect: "/dashboard/users" }; // Return success and redirect path
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update user!");
  }
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const response = await signIn("credentials", { username, password });
    if (response.error) {
      throw new Error(response.error);
    }
    return { success: true, redirect: '/dashboard' }; // Redirect on success
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Wrong Credentials" };
    }
    throw err;
  }
};
