import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function PageNotFound() {
  return (
    <div>
   
        <div className="row" style={{display:'flex',height:'400px',paddingLeft:'10px' ,alignItems:'center'}} >
          <div className="col-6" >
          <img src="https://www.shutterstock.com/image-vector/error-404-page-not-found-260nw-2288561705.jpg" alt="" />
          </div>
          <div className="col-6" style={{marginTop:'30px'}}>
          <h1>Oops!</h1>
          <p>Sorry page does not found</p>
          
          <MDBBtn outline>Back Home</MDBBtn>
          </div>
        </div> 
      </div>
  )
}

export default PageNotFound