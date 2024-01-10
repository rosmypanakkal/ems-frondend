import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
  // to hold input field data
  const [empid,setId] =useState("")
  const [empname ,setName]=useState("")
  const [empage,setAge]=useState("")
  const [empdesignation,setDesignation]=useState("")
  const [empsalary,setSalary]=useState("")


  // get a particular id of an employee from the url
  const {id}=useParams()
  console.log(id);
  const base_url ='http://localhost:8000'

  // get an particular details of an employee
   // api fetching -function
   const fetchAnEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employees/${id}`)
    console.log(result.data.employees);//OBJECT OF AN EMPLOYEE
    setId(result.data.employees.id)
    setName(result.data.employees.name)
    setAge(result.data.employees.age)
    setDesignation(result.data.employees.designation)
    setSalary(result.data.employees.salary)
    
  
  }

  useEffect(()=>{
    fetchAnEmployee(id)
  },[])

  const location=useNavigate()
  // update an employee function call
  const updateEmployee=async(e)=>{
    e.preventDefault()
    const body={
      id:empid,
      name:empname,
      age:empage,
      designation:empdesignation,
      salary:empsalary
    }
    const result=await axios.post(`${base_url}/update-an-employee/${id}`,body)
    console.log(result);
    alert(result.data.employees)
    location('/')

  }

  return (
    <div>
      <div className="container" style={{textAlign:'center'}}>
      <h1 className='m-3'>EDIT EMPLOYEE DETAILS</h1>
      <form className='p-5 m-5 border shadow'>
      <MDBInput label='ID' id='formControlLg'onChange={(e)=>setId(e.target.value)} value={empid} type='text' size='lg' />
      <br />
      <MDBInput label='NAME' id='formControlLg' onChange={(e)=>setName(e.target.value)} value={empname} type='text' size='lg' />
      <br />
      <MDBInput label='AGE' id='formControlLg' onChange={(e)=>setAge(e.target.value)} value={empage} type='text' size='lg' />
      <br />
      <MDBInput label='DESIGNATION' id='formControlLg'onChange={(e)=>setDesignation(e.target.value)} value={empdesignation} type='text' size='lg' />
      <br />
      <MDBInput label='SALARY' id='formControlLg' onChange={(e)=>setSalary(e.target.value)} value={empsalary} type='text' size='lg' />
      <br />
      <MDBBtn onClick={(e)=>updateEmployee(e)}>Update</MDBBtn>
      </form>
      </div> 
    </div>
  )
}

export default Edit