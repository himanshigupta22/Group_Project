const {fileModel} = require("../models/user"); 


const findData = async (req, res) => {
    try { 
        // console.log("Access all ");
        // console.log(req.body);
        const data=await fileModel.find();
        // console.log(data);
        res.send(data);
    }catch(err){
        console.log(err);
    }
}

module.exports = findData;