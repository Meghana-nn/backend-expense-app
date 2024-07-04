const categoryValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: 'name field is required'
        }
    }
}

module.exports = categoryValidationSchema