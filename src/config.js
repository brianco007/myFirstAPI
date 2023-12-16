import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGOOSEURL)
.then((data)=> console.log('Conection with Mongoose has been established.'))
.catch((error)=> console.log('Conection with Mongoose has failed.'))
