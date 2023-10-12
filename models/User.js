import mongoose  from "mongoose";

const { Schema, model, models } = mongoose;

const userschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    image:{
        type:String,
    }
})

const User = models.User || model("User", userschema);

export default User;