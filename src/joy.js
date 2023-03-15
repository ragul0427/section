import * as yup from 'yup'

// const passwordRules=/^(?=.\d)(?=.[a-z])(?=.*[A-z]).{5,}$/;  //we can create a password rules like this

const BasicSchema=yup.object().shape({                    //========we create basicschema for storing to validationschema..it only show the error msg schema...
    email:yup.string().email().required(),
    name:yup.string().required(),
    number:yup.string().min(6).max(10).required(),
    message:yup.string().min(30).required()
})

export default BasicSchema
