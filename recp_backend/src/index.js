import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipeRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipeRouter);

mongoose.connect("mongodb+srv://sdp:ltQpAQBZ1EqnJiCc@recp.xgv4sri.mongodb.net/ReCP?retryWrites=true&w=majority");

app.listen(3001, () => console.log('server listening on!'));
