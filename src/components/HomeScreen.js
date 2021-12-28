import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { Loading } from './Loading'

import { loadingShow, searchHero } from '../actions/hero'
import { Heroes } from './hero/Heroes'
import { Navbar } from './Navbar'
import { Team } from './team/Team'

const HomeScreen = () => {

        const dispatch = useDispatch()       


        return (
                <> 
                        <div className="top-header py-4 mt-4">
                                <div className="container text-center text-white mt-4">
                                        <h1>Show heroes cards</h1>
                                </div>
                        </div>
                
                                
                        <Navbar/>    

                        <Team/>  

                        <Formik
                                initialValues = {{name:""}}
                                validate={ (values)=>{
                                        let errores={};
                                        if (!values.name) {
                                                errores.name="Empty space"
                                                
                                        }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                                errores.name = "The name must have only valid characters"
                                        }
                                        return errores;

                                }}
                                onSubmit={
                                        (values,{resetForm})=>{
                                                resetForm();

                                                dispatch(loadingShow())
                                                dispatch(searchHero(values))

                                        }
                                }
                        >
                                {({values,errors,handleSubmit,handleChange,handleBlur})=>(

                                        <Form onSubmit={handleSubmit}>
                                                <nav className="navbar d-flex justify-content-center  navbar-expand-md mt-4 navbar-dark bg-dark ">
                                                        <div className="m-2 ">

                                                                <div className="  d-flex justify-content-center">                                       
                                                                        
                                                                        <Field 
                                                                                className="form-control me-2" 
                                                                                type="text" 
                                                                                placeholder="Enter hero name..." 
                                                                                name="name"
                                                                                value={values.name}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                autoComplete="off"
                                                                        />
                                                                        <button         
                                                                                className="btn btn-outline-success"     
                                                                                type="submit"  
                                                                                value="Buscar"                                                      
                                                                                
                                                                                >Search</button>
                                                                                        

                                                                </div >
                                        
                                                                        {errors.name && 
                                                                        <p className="error ">{errors.name}</p>}
                                                        </div>
                                                        
                                                        
                                                </nav>
                                        </Form>
                                )}

                        </Formik>

                        <Loading/>
                       
                        <Heroes/>

                        

                        
                </>

                
        )
}

export default HomeScreen


