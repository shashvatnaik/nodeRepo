/**
 * Created by lcom57 on 29/12/17.
 */
const express =require('express');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const hbs = require('hbs');
const port = process.env.PORT || 1212;

let app = express();
app.use(express.static('/home/lcom57/shashvat/'));
hbs.registerPartials(__dirname+'/views/partials/');
app.set('view engine','hbs');
app.use((req,res,next)=>{
    fs.appendFileAsync('server2_logfile',`${req.url} ${req.method} ${new Date()} \n `).then((res)=>{console.log('res');});
    next();
});
app.get('/',(req,res)=>{
    res.render('gg.hbs',{name:'shashvat'});
}).listen(port);
app.get('/bad',(req,res)=>{
    res.render('bad-req.hbs');
});
