const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())

app.post("/recvReq", (req, res) => {
    console.log('hi');
    console.log("Data Received:", req.body.data);
    res.send("Successfully Received");
})

app.listen(5000, () => {
    console.log("Server fired up on 5000");
})