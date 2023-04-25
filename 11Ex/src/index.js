import panzoom from 'panzoom';
import flicking from '@egjs/flicking';

document.getElementById('sub').addEventListener("click", () => {
    if (document.getElementById('username').value === 'namas' && document.getElementById('password').value === 'pass') {
        document.getElementById("prompt").value = "success";
        console.log("success");
    } else {
        document.getElementById("prompt").value = "failure";
        console.log("failure");
    }
    console.log("ho");
})

