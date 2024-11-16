import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI}/spyne`, // Use process.env.MONGODB_URL
        );
        console.log(`MONGODB CONNECTED`);
      } catch (error) {
        console.error(error);
      }

}

export default connectDB