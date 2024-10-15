import { Users, Products } from './models';
import { connectToDb } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDb(); // Await the connection to ensure it's established
    const users = await Users.find(); // Fetch users from the database
    return users;
  } catch (err) {
    console.error("Error fetching users:", err); // Log the original error
    throw new Error(`Failed to fetch users: ${err.message}`); // Include original error message for more detail
  }
};
/*export const fetchUser = async () => {
    try {
      await connectToDb(); // Await the connection to ensure it's established
      const user = await User.findbyId(id); // Fetch users from the database
      return user;
    } catch (err) {
      console.error("Error fetching users:", err); // Log the original error
      throw new Error(`Failed to fetch users: ${err.message}`); // Include original error message for more detail
    }
  };*/
export const fetchProducts = async() => {
    try{
        await connectToDb();
        const products= await Products.find();
        return products;
    }
    catch(err){
        console.error("ERROR from fetching products",err);
        throw new Error(`Failed to fetch products : ${err.message}`);
    }
}

