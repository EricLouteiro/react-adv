
import { useFormik } from "formik";


export const FormikBasicPage = () => {

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: value => {
            console.log(value)
        }
    })

  return (
    <div>
        <h2>Formik Form </h2>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firtsName" >FirtsName</label>
            <input 
                name="firstName"
                value={ values.firstName }
                onChange={ handleChange }
                type='text'
            />
            <span> FirstName is required </span>

            <label htmlFor="lastName" >LastName</label>
            <input 
                name="lastName"
                value={ values.lastName }
                onChange={ handleChange }
                type='text'
            />

            <span> LastName is required </span>
            <label htmlFor="email" >Email</label>
            <input 
                name="email"
                value={ values.email }
                onChange={ handleChange }
                type='text'
            />
            <span> FirstName is required </span>

            <button type="submit"> Submit </button>
        </form>
    </div>
  )
}
