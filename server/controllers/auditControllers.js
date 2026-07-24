const { analyzePage } = require("../services/pageAnalyzer");

const auditWebsite = async (req, res) => {

    try {

        const { url } = req.body;

        const report = await analyzePage(url);

        res.json(report);

    } 
    catch(error){

    if(error.message==="Invalid URL"){
        return res.status(400).json({
            success:false,
            message:error.message
        });
    }

    if(error.message==="URL does not contain an HTML page"){
        return res.status(400).json({
            success:false,
            message:error.message
        });
    }

    if(error.code==="ECONNABORTED"){
        return res.status(408).json({
            success:false,
            message:"Request timed out"
        });
    }

    if(error.response){
        return res.status(error.response.status).json({
            success:false,
            message:`Website returned status ${error.response.status}`
        });
    }

    return res.status(500).json({
        success:false,
        message:"Something went wrong"
    });

}

};

module.exports = {
    auditWebsite
};