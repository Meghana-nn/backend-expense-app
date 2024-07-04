const Expense = require('../models/Expense')
const { validationResult } = require('express-validator')
const expensesCltr = {}

//create
expensesCltr.create= async(req,res)=>{
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const body=req.body
    const Expense=new Expense(body)
    try{
        //const Expense=await Expense.create(body)
        await Expense.save()
        res.status(201).json(Expense)

    }catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server error'})

    }

}
// expensesCltr.create = (req,res) => {
//     const errors = validationResult(req) 
//     if(!errors.isEmpty()){
//         return res.status(400).json({ errors: errors.array()})
//     }
//     const { body } =req
//     const exp1 = new Expense(body)
//     exp1.save()
//         .then((Expense) => {
//             res.json(Expense)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//get

expensesCltr.list=async(req,res)=>{
    try{
    const expense=await Expense.find()
    res.json(expense)
    }
    catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server error'})

    }
}
// expensesCltr.list =(req,res) => {
//     Expense.find()
//         .then((Expense) => { 
//             res.json(Expense)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//delete

expensesCltr.destroy= async(req,res)=>{
    const id=req.params.id
    try{
        const Expense= await Expense.findByIdAndDelete(id)
        res.json(Expense)
 }catch(err){
    console.log(err)
    res.status(500).json({notice:'internal server error'})
}
}
// expensesCltr.destroy = (req,res) => {
//     const id = req.params.id
//     Expense.findByIdAndDelete(id)
//         .then((Expense) => {
//             res.json(Expense)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//edit
expensesCltr.update=async(req,res)=>{
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array()})
    }
       const id = req.params.id
       const body=req.body
 
 try{
    const Expense= await Expense.findByIdAndUpdate(id,body,{new:true})
    res.json(Expense)

 }catch(err){
    console.log(err)
    res.status(500).json({notice:'internal server error'})
 }
}


// expensesCltr.update = (req,res) => {
//     const errors = validationResult(req) 
//     if(!errors.isEmpty()){
//         return res.status(400).json({ errors: errors.array()})
//     }
//     const id = req.params.id
//     const { body } = req
//     Expense.findByIdAndUpdate(id, body,{ new:true, runValidators:true})
//         .then((Expense) => {
//             res.json(Expense)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

module.exports = expensesCltr