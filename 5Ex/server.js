const router = require('express')()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}));
  
router.listen(3000,()=>console.log('Server Fired Up at 3000'))

router.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

router.post('/countWords', (req, res) => {
    console.log(((req.body.ip_box).split(' ')).length)
})
