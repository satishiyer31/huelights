const hue = require('express').Router();
const {HUB_IP, USERNAME} = process.env;
const fetch = require('node-fetch');

hue.get('/on',async(req,res)=> {

    const URL = `http://${HUB_IP}/api/${USERNAME}/lights/2/state`
    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":true,"bri": 254,
            "hue": 41191,
            "sat": 86,}),

        })
        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `http://${HUB_IP}/api/${USERNAME}/lights/3/state`

        fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":true,"bri": 254,
            "hue": 41191,
            "sat": 86,}),

        })
        .then(response=> response.json())
        .then(response => console.info(response))

        res.json(200)
    }
    catch(error) {
        console.info(error)
        res.json(500)
    }

})

hue.get('/off',async(req,res)=> {

    const URL = `http://${HUB_IP}/api/${USERNAME}/lights/2/state`

    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":false}),

        })

        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `http://${HUB_IP}/api/${USERNAME}/lights/3/state`

        await fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":false}),

        })
        .then(response=> response.json())
        .then(response => console.info(response))
        res.json(200)
    }
    catch(error) {
        console.info(error);
        res.json(500)

    }
})

hue.get('/christmas',async(req,res)=> {

    const URL = `http://${HUB_IP}/api/${USERNAME}/lights/2/state`

    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":true,"hue":65384,"sat":254,"bri":254 }),

        })

        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `http://${HUB_IP}/api/${USERNAME}/lights/3/state`

        await fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":true,"hue":21219,"sat":254,"bri":254 }),

        })
        .then(response=> response.json())
        .then(response => console.info(response))
        res.status(200);
    }
    catch(error){
        console.info(error)
        res.status(500);
    }
})

module.exports = hue;