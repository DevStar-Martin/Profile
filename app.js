
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

var profileRouter = require('./routes/profile');

const app = express();
const port = process.env.PORT || 5000;

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    next();  
 });
console.log('sdfsdf');
app.use('/', profileRouter);
app.use('/static', express.static('public'));
app.listen(port, ()=>console.log(`Listen on port ${port}`));


//====================WEB BOT=======================
// const puppeteer = require('puppeteer');
// const fullPageScreenshot = require('puppeteer-full-page-screenshot');

// let browser = null;
// let page = null;
// browser = puppeteer.launch({headless: false, args: ['--start-maximized'] })
//     .then( async (browser) => {
        
//         const page = await browser.newPage();
//         page.setViewport({
//             width: 0,
//             height: 0,
//             isMobile: false
//         });
//         await page.goto('http://localhost:1203/MyProfile/ ');
        
//     })
//     .catch((error) => {
//         console.log(error);
//     })