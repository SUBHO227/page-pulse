const cors = require("cors");
const express=require("express");

const app=express();
app.use(cors());
const port=5000;
const auditRoutes = require("./routes/audit");
app.use(express.json());

app.use("/", auditRoutes);
app.get("/",(req,res)=>{
    res.send("page pulse Backend Running");

})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});