const router = require('express')();

router.listen(5000,()=>{console.log('server fired up at 5000');})

router.get('/',(req,res)=>res.sendFile(__dirname+'/index.html'))

router.post('/setCookie', (req, res) => {
    res.setHeader('Set-Cookie','Day=true')
    res.send('Success')
})

router.post('/getCookie', (req, res) => {
    let cookie = req.headers.cookie
    if (!cookie)
        console.log('No Cookie present in the Headers')
    console.log('Cookie Present',cookie);
    let cookiesArray = cookie.split(';')
    console.log(cookiesArray)
})