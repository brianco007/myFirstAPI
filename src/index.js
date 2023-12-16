import  express  from "express"; 
import 'dotenv/config'; 
import './config.js';
import myRouter from '../routers/myRouter.js';


const server = express();
const PORT = process.env.PORT;


server.get('/', (req , res)=>{
  res.json({message: "Hi from the root!"})
})

// creating different urls for the routers
server.use(express.json());
server.use('/api/', myRouter);


server.listen(PORT, ()=>{
  console.log(`Server listening from port: ${PORT}`);
})
