import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import SignUpForm from './Components/Forms/SignUpForms.jsx';
import SignInForm from './Components/Forms/SignInForms.jsx';

class App extends Component{
    render(){
     const onSubmit=(values, formikBag)=>{
            console.log(values); 
         }
       return(
<BrowserRouter>
<Switch>
    <Route path='/home' component={Home}/>
   <Route path='/SignUpForm' component={SignUpForm}/>
    <Route path='/SignInForm' component={SignInForm }/>
</Switch>
</BrowserRouter>
        );
    }
}