import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { ROLES } from '../models/roles.enoum';
import { User } from '../models/roles.class';
import '../server/index'
const PrincipalForm = () => {

    let user = new User();

    const initialValues = {
        titulo: '',
        texto: '',

    }

 
    return (
        <div className='form-register'>
            <h4>formulario service</h4>
            <Formik className='formik'
                initialValues = {initialValues}
              
                validationSchema = {registerSchema}
              
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form className='form'>
                            <label htmlFor="username">Nombre de Usuario</label>
                            <Field className='controls' id="titulo" type="text" name="tutilo" placeholder="Tu nombre de usuario" />
                            
                            <textarea className='texto'name='texto'></textarea>
                            {/* Username Errors */}
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage>
                                )
                            }

     
     
                            <button className='btn' type="submit">Register Account</button>
                            {isSubmitting ? (<p>Enviando tus datos...</p>): null}

                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}

export default PrincipalForm;