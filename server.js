/********************************************************************************
*  WEB422 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Luckshihaa Krishnan  Student ID: 186418216   Date: 01/19/2024
*
*  Published URL: https://web422-assignment1-htoc.onrender.com

********************************************************************************/


require('dotenv').config(); 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
const ListingsDB = require("./modules/listingsDB.js");
const db = new ListingsDB();
const HTTP_PORT = process.env.PORT || 8080;

app.use(bodyParser.json());                   
app.use(express.json());

//ROOT
app.get('/', (req, res) => {
    res.json({ message: 'API Listening' });
});

//GET /api/listings
app.get("/api/listings", async (req,res) => {
    try {
        const lists = await db.getAllListings(2,10);
        res.json(lists);
    }catch{
        res.json({message: 'Error'})
    }
});


//GET /api/listings/(_id value)
app.get("/api/listings/:id", async (req,res) => {
    const id = parseInt(req.params.id);
    try{
        const value = await db.getListingById(id);
        res.json(value);
    }
    catch{
        res.json({message:'ID not found'});
    }
});


//POST /api/listings        
app.post("/api/listings", async (req,res)=>{
    try{
    const addListing = await db.addNewListing(req.body);
    res.json(addListing);
    }
    catch{
        res.json({message:'Resource contains no content'});
    }
})

//PUT /api/listings/(_id value)
app.put("/api/listings/:id", async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const updateListing = await db.updateListingById(req.body,id);
        res.json(updateListing);
    }
    catch{
        res.json({message:'Resource contains no content'});
    }
})


//DELETE /api/listings/(_id value)
app.delete("/api/listings/:id", async(req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const delList = await db.deleteListingById(id);
        res.json(delList);
    }
    catch{
        res.json({message:'Resource contains no content'});
    }
});


db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});

