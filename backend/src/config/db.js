import mongoose from "mongoose"


export const connectDB=async() => {
  try{

await mongoose.connect(process.env.MONGO_URI)
console.log("Mongo Db Connected ")
  }catch(error){
    console.error("error connecting",error)
    process.exit(1)
  }
}
