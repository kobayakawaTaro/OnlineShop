const productModel = require('../DB/productModel')
const errors = require('../errors/customAPIError')
const {StatusCodes} = require('http-status-codes')

const getProduct = async (req,res,next)=>{
    const {id,search,category,condition,filter,variation}=req.query
    const query = {}
    let productData

    if(id){
        productData = await productModel.findById(id)
    }else{
        if(search)
            query.name={$regex:search, $options:'i'}
        if(category)
            query.category={$regex:category, $options:'i'}
        if(condition)
            query.condition={$regex:condition, $options:'i'}

        if(filter){
            const options = ['price','stock','rating','sold']
            const mapObj = {
                '>':'$gt',
                '<':'$lt',
                '=':'$eq',
                '>=':'$gte',
                '<=':'$lte',
            }
            let filterTemp = filter.replace(/\b(>|<|=|>=|<=)\b/g,match=>`-${mapObj[match]}-`)
            filterTemp = filterTemp.split(',')
            filterTemp.forEach((e)=>{
                const [prop,operator,value] = e.split('-')
                console.log(prop,operator,value)
                if(options.includes(prop))
                    if(!query[`${prop}`])
                        query[`${prop}`]={}
                    query[`${prop}`][`${operator}`]= Number(value)
            })
        }
        productData = await productModel.find(query)
    }

    res.status(200).json({'nbhit':productData.length,productData});
}
const postProduct = async (req,res,next)=>{
    if(req.user.role!='Admin')
        throw new errors.unauthorizedError('Only admins can add products')

    const {name,price,category,condition,variation} = req.body
    let query = {name,price,category,condition,variation}
    
    if(name)
       query.name = name 
    if(price)
        query.price = price
    if(category)
        query.category = category
    if(condition)
        query.condition = condition
    if(variation)
        query.variation = variation
    
    const addedProduct = await productModel.create(query)

    res.status(StatusCodes.OK).json(addedProduct)
}
const patchProduct = async (req,res,next)=>{
    //edit price, images, stock, variation
    res.status(200).json({"msg":`${req.params.id}`})
}
const deleteProduct = async (req,res,next)=>{
    if(req.user.role!='Admin'){
        throw new errors.unauthorizedError('Only admins can delete products')
    }
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedProduct)
}

module.exports = {getProduct, postProduct, patchProduct, deleteProduct};