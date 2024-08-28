import mongoose from "mongoose";

const cardSchema= new mongoose.Schema({
    id:{type:String,require:true,unique:true},
    title:{type:String,require:true,unique:true},
    description:{type:String,require:true}
});

const Card=new mongoose.model('Card',cardSchema);

export default Card;



