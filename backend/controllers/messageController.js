const axios = require('axios');

const getMessage = async function(req,res,next){
    try{
        const url = 'http://localhost:8000/message'
        const message = await axios.get(url)
        console.log('message',message)
        res.status(200).json({
            msg:'get message succeed',
            data:message.data
        })
    } catch(error){
        next(error)
    }
}

module.exports = {getMessage}