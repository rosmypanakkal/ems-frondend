import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {Link, useParams} from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';




function View() {

  const base_url ='http://localhost:8000'

  // get an id from url
  const {id}= useParams()
  console.log(id);

  const[employeeData,setEmployeeData]=useState({})

  // api fetching -function
  const fetchAnEmployee=async(id)=>{ 
    const result = await axios.get(`${base_url}/get-an-employees/${id}`)
    console.log(result.data.employees);
    setEmployeeData(result.data.employees)
  
  }
console.log(employeeData);
  useEffect(()=>{
    fetchAnEmployee(id)
  },[])

  return (
    <div>
      <div className="row m-5 p-5">
        <div className="col-8">
          {/* card */}
          <MDBCard className='shadow'>
      <MDBCardBody>
        <MDBCardTitle className='text-center m-2'>Employee Details</MDBCardTitle>
        <MDBCardText>
        {
          <MDBListGroup style={{ minWidth: '12rem' }}>
          <MDBListGroupItem   className='px-3'>
           Employee Id :{employeeData.id}
          </MDBListGroupItem>
          <MDBListGroupItem className='px-3'>
         Employee Name :{employeeData.name}
          </MDBListGroupItem>
          <MDBListGroupItem  className='px-3'>
          Designation :{employeeData.designation}
          </MDBListGroupItem>
          <MDBListGroupItem className='px-3'>
           Salary :{employeeData.salary}
          </MDBListGroupItem>
          <MDBListGroupItem  className='px-3'>
          Age :{employeeData.age}
          </MDBListGroupItem>
        </MDBListGroup>
        }
        </MDBCardText>
        
        
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-4">
          {/* image */}
          <img src="https://www.eaglebooks.co/wp-content/uploads/2017/05/Eaglebooks-Bookkeeping-light.gif.gif" height={'300px'} alt="" />
        </div>
        <div className='text-center'>
          <Link to = {'/'}>
          <MDBBtn className='mb-3'>Back to Home</MDBBtn>
          </Link>
        
        </div>
      </div>
     
    </div>
  )
}

export default View