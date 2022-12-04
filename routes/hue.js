const hue = require('express').Router();
const {HUB_IP, USERNAME} = process.env;
const fetch = require('node-fetch');

hue.put('/on',async(req,res)=> {

    const URL = `https/${HUB_IP}/api/${USERNAME}/lights/2`

    fetch(URL, {
        method: "PUT",
        body: JSON.stringify({"on":"true"}),

    })

    const URL2= `https/${HUB_IP}/api/${USERNAME}/lights/3`

    fetch(URL2, {
        method: "PUT",
        body: JSON.stringify({"on":"true"}),

    })

})

hue.put('/off',async(req,res)=> {

    const URL = `https/${HUB_IP}/api/${USERNAME}/lights/2`

    fetch(URL, {
        method: "PUT",
        body: JSON.stringify({"on":"false"}),

    })

    const URL2= `https/${HUB_IP}/api/${USERNAME}/lights/3`

    fetch(URL2, {
        method: "PUT",
        body: JSON.stringify({"on":"false"}),

    })

})