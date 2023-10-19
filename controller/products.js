const getProduct = async (req,res,next)=>{
    res.status(200).json({"msg":"getProduct"});
}
const postProduct = async (req,res,next)=>{
    res.status(200).json({"msg":"postProduct"});
}
const patchProduct = async (req,res,next)=>{
    res.status(200).json({"msg":`${req.params.id}`});
}
const deleteProduct = async (req,res,next)=>{
    res.status(200).json({"msg":`${req.params.id}`});
}

module.exports = {getProduct, postProduct, patchProduct, deleteProduct};