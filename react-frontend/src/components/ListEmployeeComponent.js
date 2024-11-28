import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';
import { Link } from 'react-router-dom';


export default class ListEmployeeComponent extends Component 
{
    constructor(props)
    {
        super(props);

        this.state={
            employees:[]
        }
    }

    componentDidMount()
    {
            EmployeeServices.getEmployees().then((res)=>
        {
            this.setState({employees:res.data})
        })
    }

    deleteEmployee=(employeeId)=>
    {
        EmployeeServices.getEmployees().then(res=>
        {
            this.setState({employees:res.data})
        }
        ).catch(error=>
        {
            console.log(error)
     } )
        
    }

  render() {
    return (
      <div>
        <h2 className='text-center mt-5'> Employee List</h2>
        <div className='row'>

            <Link to="/add-employee" className='btn btn-primary my-5'>Add Employee</Link>
            <table className='table table-striped table-border'>
               <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
            <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>update</Link>
            <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=>this.deleteEmployee(employee.id)}>delete</button>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
