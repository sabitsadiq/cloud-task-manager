import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connection established");
  } catch (error) {
    console.log("DB error:" + error);
  }
};
export default dbConnection;
