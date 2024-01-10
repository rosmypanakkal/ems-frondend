import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import {Link} from 'react-router-dom';


function Admin() {
   
  const base_url ='http://localhost:8000'
  const [adminData,setadminData] = useState([])


  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-employees`)
    console.log(result.data.employees);
    setadminData(result.data.employees)
  }
  console.log(adminData);


const DeleteEmployee=async(id)=>{
  const result= await axios.delete(`${base_url}/delete-employee/${id}`)//delete employee
  alert(result.data.message)
  fetchData()
}




  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1 className='text-center m-3'>Employee Management System</h1>
      <div className="container">
        <p>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>

      </div>
      <Link to={'/add'}><a style={{float:'right'}} className='btn btn-primary' href="">Add</a></Link>
      <div className="container">
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Action</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {adminData.map((item) => (
              <tr >
                <td>{item.id}</td>
                <td>
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{item.name}</p>
                  </div>
                </td>
                <td>{item.age}</td>
                <td>
                  <p className='fw-normal mb-1'>{item.designation}</p>
                </td>
                <td>{item.salary}</td>
                <td>
                  <div className='d-flex justify-content-evenly'>
                  <Link to={`view/${item.id}`}>
                  <i class="fa-solid fa-eye"></i>
                  </Link>
                  <Link to={`edit/${item.id}`}>
                    <i className='fa-solid fa-pen text-success'></i>
                    </Link>
                    <i onClick={()=>DeleteEmployee(item.id)} className='fa-solid fa-trash text-danger'></i>
                  </div>
                </td>
              </tr>
            ))}
        
      </MDBTableBody>
    </MDBTable>
      </div>
    </div>
  )
}

export default Admin