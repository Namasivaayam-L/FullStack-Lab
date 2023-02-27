const router = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/FullStack-Lab');

const Feedback = mongoose.model('Feedback-6Ex', new mongoose.Schema({
    name: String,
    rollno: String,
    phno: Number,
    survey: Object
}));

router.use(bodyParser.urlencoded({
    extended: true
}));
  
router.listen(3000,()=>console.log('Server Fired Up at 3000'))

router.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

router.post('/sendFeedback', async(req, res) => {
    let { name, rollno, phno, ...survey } = req.body
    // console.log(name,rollno,phno,survey);
    await new Feedback({name,rollno,phno,survey}).save()
    // console.log(await Feedback.find());
})
