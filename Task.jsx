
import React, { Fragment } from "react";

class Task extends React.Component{
    render(){
        return(
            <Fragment>
            <div class="row">
            <div class="col">
              <label class="form-label">Name</label>
              <input type="text" value={this.state.Details.name} name="name" class="form-control" onChange={this.handleChange} />
            </div>
            <div class="col">
              <label class="form-label">DOB</label>
              <input type="date" value={this.state.Details.dob} name="dob" class="form-control" onChange={this.handleChange} />
            </div>
            </div>
         <br></br><br></br>
         <div class="row">
            <div class="col">
            <label class="form-label">PHONE</label>
              <input type="text" value={this.state.Details.email} name="phone" class="form-control" onChange={this.handleChange}/>
            </div>
            <div class="col">
            <label class="form-label">E-mail</label>
              <input type="text" value={this.state.Details.phone} name="email" class="form-control" onChange={this.handleChange} /> 
            </div>
            </div>
           <br></br><br></br> 
            <div class="col">
            <label class="form-label">ADDRESS</label>
              <input type="text" value={this.state.Details.address} name="address" class="form-control" onChange={this.handleChange}/> 
            </div>
            <br></br><br></br>
            <button onClick={this.handleSubmit} class="btn btn-sm btn-primary">Submit</button>
            <br></br><br></br>
            <table class="table">
         
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">DOB</th>
      <th scope="col">PHONE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
    {this.state.tableData.map((pass,i)=>
    
    <tr>
      <th scope="row">{1+i}</th>
      <td>{pass.name}</td>
      <td>{pass.dob}</td>
      <td>{pass.phone}</td>
      <td>{pass.email}</td>
      <td>{pass.address}</td>
    </tr>
   )
    }
 
  </tbody>
</table>
<br></br><br></br>
<button onClick={this.handleSubmit} class="btn btn-sm btn-primary">Submit</button>
           </Fragment>
        )
    }
  }

export default Task ;