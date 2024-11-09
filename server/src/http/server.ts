import express  from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("server is running");    
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up");    
});


app.listen(3000, () => {
    console.log("server is running on port 3000");
})
