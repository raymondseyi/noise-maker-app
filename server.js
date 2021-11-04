const express = require('express');
const app = express();
app.use(express.urlencoded({bodyParser:true}));
app.use(express.static( "public" ));
let noiseMakers = [];
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{noiseMakers})
})
app.get('/add-noise-makers',(req,res)=>{
    res.render('add-noise-makers')
})
app.post('/add-noise-makers',(req,res)=>{
    noiseMakers.push({...req.body,num:0});
    res.redirect('/')
})
app.post('/increase/:i',(req,res)=>{
    let {i} = req.params
    noiseMakers[i].num = (noiseMakers[i].num)+1;
    res.redirect('/')
})
app.post('/decrease/:i',(req,res)=>{
    let {i} = req.params
    noiseMakers[i].num = (noiseMakers[i].num)-1;
    res.redirect('/')
})
app.post('/delete/:i',(req,res)=>{
    let {i} = req.params
    noiseMakers=noiseMakers.filter((_,ind)=>ind!=i)
    res.redirect('/')
})
app.listen(5000,()=>{
    console.log(`connected successfully`);
});