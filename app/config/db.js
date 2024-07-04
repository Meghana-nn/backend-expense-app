const mongoose = require('mongoose')


const ConfigureDB= async()=>{
    try{
        const db=await mongoose.connect('mongodb://127.0.0.1:27017/expense-app')
        console.log('successfully connected to db')
    }
    catch(err){
        console.log('error occured to db' ,err)
    }
}

// const ConfigureDB = () => {
//     mongoose.connect('mongodb://127.0.0.1:27017/expense-app')
//     .then(() => {
//         console.log('sucessfully connected to db')
//     })

//     .catch(() => {
//         console.log('error occured to db')
//     })
//}

module.exports = ConfigureDB