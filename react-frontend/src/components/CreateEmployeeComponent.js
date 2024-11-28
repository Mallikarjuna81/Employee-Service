import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeServices from '../services/EmployeeServices'
function CreateEmployeeComponent() {

    const [employee ,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
    })

    let navigate=useNavigate();
    const handleClick=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({...employee,[name]:value});
    }

    const cancelHandle=()=>
    {
        navigate("/employees")
    }

    const saveHandle=(e)=>
    {
        e.preventDefault();
        console.log("employee =>"+JSON.stringify(employee));

        EmployeeServices.createEmployee(employee).then(res=>
        {
            navigate('/employees')
        }
        )
    }
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3' >
                <h3 className='text-center'>Add Employee</h3>
                <div className='card-body'>
                    <form>
                    <div className='from-group my-3'>
                        <label className='my-2'>First Name :</label>
                        <input type='text' name='firstName' className='form-control' placeholder='First Name' value={employee.firstName} onChange={handleClick}/>
                    </div>
                    <div className='from-group my-3'>
                        <label className='my-2'>Last Name :</label>
                        <input type='text' name='lastName' className='form-control' placeholder='Last Name' value={employee.lastName} onChange={handleClick}/>
                    </div>
                    <div className='from-group my-3'>
                        <label className='my-2'>Email :</label>
                        <input type='text' name='email' className='form-control' placeholder='Email' value={employee.email} onChange={handleClick}/>
                    </div>
                    <button className='btn btn-success' onClick={saveHandle}>Save</button>
                    <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={cancelHandle}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>   
      
    </div>
  )
}

export default CreateEmployeeComponent
