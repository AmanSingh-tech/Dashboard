import mongoose from "mongoose";

let isConnected = false; // Persistent across function calls
//by making this we change the scope of isConnected object and by this it will store true if the db connnected and will not re-esatablish connection again and again on mutliple calls 
export const connectToDb = async () => {
  try {
    if (isConnected) {
      console.log("Already connected to the database.");
      return;
    }
    const db = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1; // Check if the connection is established
    console.log("Connected to the database:", isConnected);
  } catch (err) {
    console.error("Database connection error:", err);
    throw new Error(err);
  }
};
//readyState===1 connected ===0 disconnected ===2 connecting ===3 disconnecting