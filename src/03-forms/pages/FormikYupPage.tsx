
import { useFormik } from "formik";
import * as Yup from "yup";


export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: value => {
            console.log(value)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe tener menos de 15 caracteres')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe ser menos de 15 char')
                .required('Requerido'),
            email: Yup.string()
                .email('Debe ser un correo válido')
                .required('Requerido')
        })
    })

  return (
    <div>
        <h2>Formik Yup </h2>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firtsName" >FirtsName</label>
            <input 
                type='text'
                { ...getFieldProps('firstName')}
            />
            {
             touched.firstName && errors.firstName && <span> {errors.firstName} </span>
            }  

            <label htmlFor="lastName" >LastName</label>
            <input 
                type='text'
                { ...getFieldProps('lastName')}

            />
            {
             touched.lastName && errors.lastName && <span> {errors.lastName} </span>
            }
            <label htmlFor="email" >Email</label>
            <input 
                type='text'
                { ...getFieldProps('email')}

            />
            {
             touched.email && errors.email && <span> {errors.email} </span>
            }
            <button type="submit"> Submit </button>
        </form>
    </div>
  )
}
