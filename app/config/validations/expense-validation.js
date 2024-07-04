const expenseValidationSchema = {
    expenseDate: {
        notEmpty: {
            errorMessage: ' expense date field is required'
        },
        isDate:{
            errorMessage:'invalid date format'
        }
    },
    amount: {
        notEmpty:{
            errorMessage:'amount is required'
        },
        isFloat:{
            options:{min: 0.01},
            errorMessage:'invalid amount'
        }
    },
    categoryId: {
        notEmpty:{
            errorMessage:{
                errorMessage:'catergory is required'
            }
        },
        isMongoId:{
            errorMessage:'invaild mongoid'
        }
    },
    description: {
        notEmpty:{
            errorMessage:'description is required'
        },
        isLength:{
            option:{min:1, max:300},
            errorMessage:'description should be within 300 words'
        }
    }
}

module.exports = expenseValidationSchema