import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        maxlength: 20,
    },
    email :{
        type:String,
        required: [true, 'Email is required'],
        //match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        unique:true,
    },
    password : {
        type:String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        /*validate: {
            validator: function(v) {
                return /(?=.*[A-Z])(?=.*\d)/.test(v);
            },
            message: 'Password must contain at least one uppercase letter and one number',
        }*/
    },
    img : {
        type: String,
    },
    Phone : {
        type: Number,
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    isActive: {
        type:Boolean,
        default: true,
    },
    Address : {
        type: String,
    }
},
{timestamps:true});

const productSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, 'Product name is required'],
        unique: true,
        maxlength: 20,
    },
    desc : {
        type : String,
    },
    price : {
        type: Number,
        required : true,
        min: 0,
    },
    stock : {
        type : Number,
        required : true,
        min : 0,
    },
    img : {
        type:String,
    },
    color: { 
        type: String,
    },
    size : {
        type : String,
    },
},
{timestamps:true});

export const Users= mongoose.models.Users || mongoose.model("Users", userSchema);
export const Products= mongoose.models.Products || mongoose.model("Products", productSchema);