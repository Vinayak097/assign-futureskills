import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./db/connect.Mongodb.js";
import { createCard, getAllCards, getbyNameCard } from "./Controller/cardController.js";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());
app.use(cors());

app.post('/cards',createCard);
app.get('/cards',getAllCards);
app.get('/cards/:title',getbyNameCard)
app.get('/ping', (req, res) => {
    res.send("hello from server");
});


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});