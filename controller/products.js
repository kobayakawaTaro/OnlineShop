const getProduct = (req,res,next)=>{
    res.status(200).json({"msg":"getProduct"});
}
const postProduct = (req,res,next)=>{
    res.status(200).json({"msg":"postProduct"});
}
const patchProduct = (req,res,next)=>{
    res.status(200).json({"msg":`${req.params.id}`});
}
const deleteProduct = (req,res,next)=>{
    res.status(200).json({"msg":`${req.params.id}`});
}

module.exports = {getProduct, postProduct, patchProduct, deleteProduct};