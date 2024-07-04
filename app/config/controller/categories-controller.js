const Category  = require('../models/Category')
const { validationResult } = require('express-validator')
const categoriesCltr = {}

categoriesCltr.create = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    const body=req.body
    const Category=new Category(body)
    try{
        await Category.save()
        res.status(201).json(Category)

    }catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server error'})

    }

    }
//     const data = req.body
//         const c1  = new Category()
//         c1.name = data.name
//         c1.save()
//         .then((Category) => {
//             res.json(Category)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

categoriesCltr.list = async (req,res)=>{
    try{
        const category=await Category.find()
        res.json(category)
    }
    catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server error'})
    }
}

// categoriesCltr.list = (req, res) => {
//     Category.find()
//     .then((categories) =>{
//         res.json(categories)
//     })
//     .catch((err) =>{
//         res.json(err)
//     })
// }

categoriesCltr.destroy=async (req,res)=>{
const id=req.params.id
try{
    const Category=await Category.findByIdAndDelete(id)
    res.json(Category)
} 
catch(err){
    console.log(err)
    res.status(500).json({notice:'internal server error'})
}
}


// categoriesCltr.destroy = (req, res) => {
//     const id = req.params.id
//         Category.findByIdAndDelete(id)
//             .then((Category) => {
//                 if(!Category){
//                     res.status(404).json({error: "catergory not found"})
//                 }
//                 else{
//                     res.json(Category)
//                 }
//             })
//             .catch((err) => {
//                 res.json(err)
//             })
// }


categoriesCltr.update= async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
        }
        const id = req.params.id
       const body=req.body
try{
    const Category=await Category.findByIdAndUpdate(id,body,{new:true})
    res.json(Category)

} catch(err){
    res.status(500).json({notice:'internal server error'})

}

// categoriesCltr.update = (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors : errors.array()})
//     }
//     const id = req.params.id
//         const{ body } = req
//         Category.findByIdAndUpdate(id, body, { new: true , runValidators:true})
//         .then((Category) => {
//             res.json(Category)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
}

module.exports = categoriesCltr