const express = require("express")
const app = express()
const Joi = require('joi');
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
let users =[]
app.get("/api/get",(req,res) =>{
    res.json(users)
})
const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});
app.post('/send_data', (req, res) => {
    const {error,value: user} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }  
    else{
        users.push(user);
        res.send('Data received successfully!');
    }
  });
app.listen(500,()=>{console.log("the server running ...")})