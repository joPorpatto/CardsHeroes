import {  Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLoginEmailPassw } from '../actions/auth'
import { loadingShow } from '../actions/hero'
import { Loading } from './Loading'
import "./style.css"





const LoginScreen = () => {

        const dispatch = useDispatch()        
        return (
                <div className="center">
                        <h1>Login</h1>
                        <Formik
                                initialValues={{email:"prueba@cardheroes.com", password:""}}
                                validate={(values)=>{
                                       
                                       let errores = {};

                                       if (!values.email) {
                                               errores.email = "Ingresar correo"
                                       }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                               errores.email = "El correo de poseer caracteres válidos"
                                       }

                                       if (!values.password) {
                                               errores.password ="Ingresar contraseña"
                                               
                                       }

                                       return errores;

                               }}
                                onSubmit={
                                        (values, {resetForm}) =>{    
                                                resetForm();   
                                                dispatch(loadingShow())                                         
                                                dispatch(startLoginEmailPassw(values));
                                        }
                                }
                        >
                                {( {values,errors,touched,handleSubmit,handleChange,handleBlur}) =>(
                                        <Form onSubmit={handleSubmit}>  

                                                <div className="txt_field">
                                                        <Field 
                                                                type="text" 
                                                                name="email"
                                                                autoComplete="off"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                />    
                                                        <span></span>
                                                        <label>Email</label>   
                                                                {touched.email && errors.email && <p className="error">{errors.email}</p> }                                   
                                                </div>
                                        
                                                <div className="txt_field">                                        
                                                                <Field 
                                                                        type="password" 
                                                                        name="password"
                                                                        autoComplete="off"
                                                                        value={values.password}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        />    
                                                                <span></span>
                                                                <label>Password</label> 
                                                                        {touched.password 
                                                                        && errors.password 
                                                                        && <p className=" error"> 
                                                                        {errors.password}</p>}               
                                                </div>
                                                <Loading/>
                                        
                                                <input 
                                                        type="submit" 
                                                        value="Enviar"
                                                />     
                                        </Form> 
                                )}
                        </Formik>
                        

                </div>    
        )
}

export default LoginScreen
