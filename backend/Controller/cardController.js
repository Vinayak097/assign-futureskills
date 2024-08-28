import Card from "../model/cardModel.js";

import {v4 as uuidv4} from 'uuid'
export const createCard=async(req,res)=>{
    const {title,description}    =req.body;
    
    if(!title,!description){
        return res.status(411).json({error:'Title and description are required'})
    }
    try{
        const existingCard = await Card.findOne({ title });
        if (existingCard) {
          return res.status(400).json({ error: 'A card with this title already exists' });
        }
        const newCard = new Card({
            id: uuidv4(),
            title,
            description,
          });
        await newCard.save()
        return res.status(201).json({message:"Card created successfully",card:newCard})
    }catch(error){
        console.log(error.message)
        return res.status(500).json({ error: 'An error occurred while creating the card' });
    }
}


export const getbyNameCard=async(req,res)=>{
    const {title}=req.params;
    try{
        const card=await Card.findOne({title})
        if(!card){
            return res.status(404).json({message:"Card not found"});
        }
        return res.status(200).json(card)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({ error: 'An error occurred while fetching the card' });
    }
}

export const getAllCards=async(req,res)=>{
    try{
        const cards=await Card.find({})
        res.status(200).json(cards)
    }catch(error){
        res.status(500).json({ error: 'An error occurred while fetching the cards' });
    }
}