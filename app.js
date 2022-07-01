const express = require("express");
// const hbs = require("hbs");
// const mysql = require("mysql");
// const dotenv = require("dotenv");


const app = express();



app.use(express.static('public'));
app.set('view engine','hbs');


app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/cart",(req,res)=>{
    res.render('cart');
});

app.get("/checkout",(req,res)=>{
    res.render('checkout');
});

app.get("/contact",(req,res)=>{
    res.render('contact');
});

app.get("/login",(req,res)=>{
    res.render('login');
});

app.get("/product-detail",(req,res)=>{
    res.render('product-detail');
});

app.get("/my-account",(req,res)=>{
    res.render('my-account');
});

app.get("/product",(req,res)=>{
    res.render('product-list');
});




app.listen(5088,()=>{
    console.log("Server started on port 5088")
})