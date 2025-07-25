const {fileModel} = require("../models/user"); 

const Upload = async (req, res) => {
    try {
        // const { email } = req.body;
        // const user = await userModel.findOne({ email });
        // console.log("saving the details ");
        const filedata=new fileModel(req.body);
        console.log(filedata);
        await filedata.save();

        res.status(201).json({ message: " Sign Up success", success: true })

    }catch(err){
        console.log(err);
    }
}

module.exports = Upload;