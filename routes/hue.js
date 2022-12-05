const hue = require('express').Router();
const {HUB_IP, USERNAME, TOKEN} = process.env;
const fetch = require('node-fetch');

hue.get('/on',async(req,res)=> {

    const URL = `https://${HUB_IP}/api/${USERNAME}/lights/2/state`
    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":true,"bri": 254,
            "hue": 41191,
            "sat": 86,}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+ TOKEN
                
            }

        })
        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `https://${HUB_IP}/api/${USERNAME}/lights/3/state`

        fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":true,"bri": 254,
            "hue": 41191,
            "sat": 86,}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+ TOKEN
                
            }

        })
        .then(response=> response.json())
        .then(response => console.info(response))

        res.status(200).json("Success")
    }
    catch(error) {
        console.info(error)
        res.status(500).json("Error")
    }

})

hue.get('/off',async(req,res)=> {

    const URL = `https://${HUB_IP}/api/${USERNAME}/lights/2/state`

    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":false}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+ TOKEN
                
            }

        })

        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `https://${HUB_IP}/api/${USERNAME}/lights/3/state`

        fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":false}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + TOKEN
                
            }

        })
        .then(response=> response.json())
        .then(response => console.info(response))
        res.status(200).json("Success")
    }
    catch(error) {
        console.info(error);
        res.status(500).json("Error")

    }
})

hue.get('/christmas',async(req,res)=> {

    const URL = `https://${HUB_IP}/api/${USERNAME}/lights/2/state`

    try {

    
        fetch(URL, {
            method: "PUT",
            body: JSON.stringify({"on":true,"hue":65384,"sat":254,"bri":254 }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + TOKEN
                
            }

        })

        .then(response=> response.json())
        .then(response => console.info(response))

        const URL2= `https://${HUB_IP}/api/${USERNAME}/lights/3/state`

        fetch(URL2, {
            method: "PUT",
            body: JSON.stringify({"on":true,"hue":21219,"sat":254,"bri":254 }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+ TOKEN
                
            }

        })
        .then(response=> response.json())
        .then(response => console.info(response))
        res.status(200).json("Success");
    }
    catch(error){
        console.info(error)
        res.status(500).json("Error");
    }
})

module.exports = hue;