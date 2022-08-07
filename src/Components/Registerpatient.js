import React from 'react';
import { useForm } from 'react-hook-form';
import {Form,Button} from "react-bootstrap";
import {MdLogin} from "react-icons/md";
import 'bootstrap';
import axios from 'axios'


function SignUp() {
    const{register,handleSubmit,formState:{errors},}=useForm();
    const onFormSubmit=(userObj)=>{
        axios.post('/admin/create-user',userObj)
        .then(response=>{
            // console.log(response)
            // alert(response.data.message)
            if(response.data.message==="User Created successfully..."){
                alert("Admin Added")
            }
        })
        .catch(error=>{
            console.log(error)
            alert(`error occured ${error}`)
        })
    }
    return (
        <div className='container mx-auto col-sm-3 mt-3'>
        <div className='display-2 text-center text-dark'>SignUp</div>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)} >
                {/* username */}
                <Form.Group className="mb-3 mt-2" >
                    <Form.Label className='ms-1 float-start' >Username</Form.Label>
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
                <Form.Group className="mb-3">
                    <Form.Label className='ms-1 float-start' >Email</Form.Label>
                    <Form.Control type="mail"  placeholder="Enter mail"{...register("mail",{required:true})}/>
                    {/* validation error message for E-mail */}
                    {errors.mail?.type==="required" && <p className="text-danger ms-1 float-start">*E-mail is required</p>}
                </Form.Group>
                {/* City */}
                <Form.Group className="mb-3">
                    <Form.Label className='ms-1 float-start' >City</Form.Label>
                    <Form.Control type="city"  placeholder="Enter City"{...register("city",{required:true})}/>
                    {errors.city?.type==="required" && <p className="text-danger ms-1 float-start">*City is required</p>}
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-4'>
                    Signup<MdLogin/>
                </Button>
            </Form>
        </div>
    );
}

export default SignUp;