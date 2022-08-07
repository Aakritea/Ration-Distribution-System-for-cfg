import React from 'react';
import { useForm } from 'react-hook-form';
import {Form,Button} from "react-bootstrap";
import 'bootstrap';
import { adminLogin } from "../Slices/adminSlice";
import {volunteerLogin} from "../Slices/volunteerSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'


function Login() {
    const{register,handleSubmit,formState:{errors},}=useForm();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const onFormSubmit=(userObj)=>{
        console.log(userObj);
        if(userObj.usertype=="admin"){
        dispatch(adminLogin(userObj));}
        else{
            dispatch(volunteerLogin(userObj));
        }
        if(localStorage.getItem('login')!=null){
          navigate('/');
        }
    }
    return (
        <div className='container mt-5 w-50 mb-5'>
        <div className='display-2 text-center text-dark m-2'>Login</div>
        <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)} >
        <Form.Group className="mb-3 mt-2" >
            <Form.Label className='ms-1 float-start'>Select User Type</Form.Label>
            <Form.Select aria-label="Default select mt-3 example" {...register("usertype",{required:true})}>
            <option>Open this select menu</option>
            <option value="admin">admin</option>
            <option value="volunteer">volunteer</option>
            </Form.Select>
        </Form.Group>
                {/* username */}
                <Form.Group className="mb-3 mt-2" >
                    <Form.Label className='ms-1 float-start'>Username</Form.Label>
                    <Form.Control type="text"  placeholder="Enter username"{...register("username",{ minLength:4,maxLength:10,required:true})}/>
                    {/* validation error message for username */}
                    {errors.username?.type === 'required' && <p className="text-danger ms-1 float-start mb-2">* Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger ms-1 float-start">* Min length should be 4</p>}
                    {errors.username?.type === 'maxLength' && <p className="text-danger ms-1 float-start">* Max length should be 10</p>}
                </Form.Group>
                {/* password */}
                <Form.Group className="mb-3 ">
                    <Form.Label className='ms-1 float-start'  >Password</Form.Label>
                    <Form.Control type="password"  placeholder="Enter password"{...register("password",{required:true,minLength:4,maxLength:10})}/>
                    {/* validation error message for password */}
                    {errors.password?.type === 'required' && <p className="text-danger ms-1 float-start">*Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-danger ms-1 float-start">* Min length should be 4</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-danger ms-1 float-start">* Max length should be 10</p>}
                </Form.Group>
                {/* E-mail */}
                <Button variant="primary" type="submit" className='mb-4'>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;