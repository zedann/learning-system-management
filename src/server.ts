import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import mongoose from 'mongoose';

mongoose.connect();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
