import React from 'react';
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeServices from '../services/EmployeeServices';

function UpdateEmployeeComponent() {
    let navigate=useNavigate();
    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");

    const {id}=useParams();

    useEffect(()=>
    {
        EmployeeServices.getEmployeeById(id).then((res)=>
        {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        }).catch(error=>
        {
            console.log(error);
        } )
        
    },[])
    

    const cancelHandle=()=>
    {
        navigate("/employees")
    }

    const updateHandle=(e)=>
    {
        e.preventDefault();
        const employee={firstName,lastName,email};
        if(id){
            EmployeeServices.updateEmployee(id,employee).then(res=>{
                navigate('/employees');
            })
        }
        else{
            EmployeeServices.createEmployee(employee).then(res=>
            {
                console.log(res.data);
                navigate('/employees');
            }
            )
        }
    }

  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3' >
                <h3 className='text-center'>Update Employee</h3>
                <div className='card-body'>
                    <form>
                    <div className='from-group my-3'>
                        <label className='my-2'>First Name :</label>
                        <input type='text' name='firstName' className='form-control' placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                    </div>
                    <div className='from-group my-3'>
                        <label className='my-2'>Last Name :</label>
                        <input type='text' name='lastName' className='form-control' placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                    </div>
                    <div className='from-group my-3'>
                        <label className='my-2'>Email :</label>
                        <input type='text' name='email' className='form-control' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <button className='btn btn-success' onClick={updateHandle}>Save</button>
                    <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={cancelHandle}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>   
      
    </div>
  )
}

export default UpdateEmployeeComponent
