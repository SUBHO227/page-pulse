const cheerio = require("cheerio");
const axios=require("axios");
const analyzePage=async(url)=>{
    try {
        new URL(url);
    } catch (error) {
        throw new Error("Invalid URL");
    }
    const startTime=Date.now();
    const response = await axios.get(url, {
    timeout: 5000,
    headers: {
        "User-Agent": "Mozilla/5.0"
    }
});
const contentType = response.headers["content-type"];

if (!contentType.includes("text/html")) {
    throw new Error("URL does not contain an HTML page");
}
    const $ = cheerio.load(response.data);
    const title = $("title").text();
    const metaDescription = $("meta[name='description']").attr("content") || "No Meta Description";
    const h1Count = $("h1").length;
    let missingAltImages = 0;

$("img").each((index, element) => {

    if (!$(element).attr("alt")) {
        missingAltImages++;
    }

});
const text = $("body").text();
const cleanText = text.trim();
const words = cleanText.split(/\s+/);
const wordCount = words.length;



    const endTime=Date.now();
    return {
    status: response.status,
    responseTime: endTime - startTime,
    title,
    metaDescription,
    h1Count,
    missingAltImages,
    wordCount
};



};
module.exports={
    analyzePage
};