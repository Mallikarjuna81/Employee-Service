package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Employee;
import com.example.service.EmployeeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
    @Autowired
	EmployeeService employeeService;
    
    @GetMapping("/employees")
    public List<Employee> getAllEmployees()
    {
    	return employeeService.getAllEmployees();
    }
    
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee)
    {
    	return employeeService.addEmployee(employee);
    }
    
    @GetMapping("/employees/{Id}")
    public Employee getEmployee(@PathVariable Long id)
    {
    	return employeeService.getEmployee(id);
    }
    
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee)
    {
    	return employeeService.updateEmployee(id,employee);
    }
    
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id)
    {
    	return employeeService.deleteEmployee(id);
    }
}
