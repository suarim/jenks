require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 11000;

// Route for the main page with the cool HTML and button
app.use((req,res,next)=>{
    console.log(`${req.method} and ${req.originalUrl}`)
   
    next()
})
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cool Mini</title>
            <style>
                /* Basic button styling for consistency */
                .redirect-button {
                    background-color: #4CAF50; /* Green */
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1em;
                    margin-top: 20px;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }
                .redirect-button:hover {
                    background-color: #45a049;
                    transform: translateY(-2px);
                }
                .redirect-button:active {
                    transform: translateY(0);
                }
            </style>
        </head>
        <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#1a1a2e;font-family:'Arial',sans-serif;color:#e0e0e0;overflow:hidden;">

            <div style="
                background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                padding: 25px 40px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                text-align: center;
                position: relative;
                overflow: hidden;
                transform: scale(1);
                transition: transform 0.3s ease-in-out;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">

                <h1 style="margin-top:0;margin-bottom:15px;font-size:2.5em;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,0.3);">
                    Hello!
                </h1>
                <p style="margin-bottom:0;font-size:1.1em;line-height:1.5;">
                    Welcome to my tiny, cool corner.
                </p>

                <button class="redirect-button" onclick="window.location.href='/new'">
                    Go to New Page
                </button>

            </div>

        </body>
        </html>
    `);
});

// Route for the new page ('/new')
app.get('/new', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Page</title>
        </head>
        <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#282c34;font-family:'Arial',sans-serif;color:#61dafb;">
            <div style="text-align: center;">
                <h1 style="font-size: 3em;">Welcome to the New Page!</h1>
                <p style="font-size: 1.2em;">You've successfully navigated here.</p>
                <button style="
                    background-color: #61dafb;
                    color: #282c34;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1em;
                    margin-top: 20px;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                " onmouseover="this.style.backgroundColor='#4caf50'" onmouseout="this.style.backgroundColor='#61dafb'" onclick="window.location.href='/'">
                    Go Back Home
                </button>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});