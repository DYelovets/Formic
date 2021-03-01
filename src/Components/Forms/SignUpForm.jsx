import React from 'react';
import {Formik, Form, Field} from 'formik';
import {NAME_SCHEMA} from './../Utilities/SCHEMES';
import {SIGN_IN_SCHEMA} from './../Utilities/SCHEMES';
import styles from './SignIn.module.scss';
import { validateSchema } from 'webpack';

const SignInForm=(props)=>{
const initialValues={
    email:'',
    password:'',
};

const onSubmit=(values, formikBag)=>{
   console.log(values); 
}

 return(
    <div>
     <h2 classname={styles.signIn-tittle}>CREATE AN ACCOUNT</h2>
    <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validationSchema={SIGN_IN_SCHEMA}>
         
         { formProps=>{
             return(
   <Form>
     <Field type='text' name='email'/>
     <ErrorMassage component='span' name='email'/>
     
     <Field type='password' name='password'/>
     <ErrorMassage component='span' name='password'/>

     <Field type='submit' value='Submit' disabled={!formProps.isValid}/>
    </Form>
   )
    }
   }
   </Formik>
   </div>
 )
 }

export default SignUpForm;
