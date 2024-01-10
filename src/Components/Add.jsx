import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  // to hold input field data
  const [id,setId] =useState("")
  const [name ,setName]=useState("")
  const [age,setAge]=useState("")
  const [designation,setDesignation]=useState("")
  const [salary,setSalary]=useState("")

  const base_url='http://localhost:8000/add-employee' 
  const location = useNavigate() // component to component

  const AddEmployee=(e)=>{
    e.preventDefault()
    console.log(id,name,age,designation,salary);
 
  //  Api call to add employee details
  const body={
    id,name,age,designation,salary
  }
  const result= axios.post(base_url,body).then((response)=>{
    console.log(response);
    alert(response.data.message)//employee added successfully
    location('/')//redirect to admin page
  })
  .catch((error)=>{
    alert("please enter unique employee id")
  })
  

  }
  return (
    <div>
      <div className="container" style={{textAlign:'center'}}>
      <h1 className='m-3'>ADD EMPLOYEE DETAILS</h1>
      <form className='p-5 m-5 border shadow'>
      <MDBInput label='ID' id='formControlLg'onChange={(e)=>setId(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='NAME' id='formControlLg' onChange={(e)=>setName(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='AGE' id='formControlLg' onChange={(e)=>setAge(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='DESIGNATION' id='formControlLg'onChange={(e)=>setDesignation(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='SALARY' id='formControlLg' onChange={(e)=>setSalary(e.target.value)} type='text' size='lg' />
      <br />
      <MDBBtn onClick={(e)=>AddEmployee(e)}>ADD</MDBBtn>
      </form>
      </div> 
    </div>
  )
}



export default Add