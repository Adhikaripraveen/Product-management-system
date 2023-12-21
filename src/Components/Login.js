import React, { useContext,useState } from "react";
import { FormContext } from "../Context";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const Login = () => {
	const{addData,removeData,form}=useContext(FormContext);
	const[error,setError]=useState(false)
	const navigate = useNavigate();
	const handleFormSubmit=(e)=>{
		e.preventDefault();
		if(form.name===""||form.password==="")
		{
			setError(true)
			
		}
		else{

			removeData();
			navigate("/Home")
		}
	}
  return (
    <>
      <div className="login_container" >
		<img src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1" alt="logo"    />
		<div> 
			<h3 style={{fontSize:"2rem"}}>Admin Panel</h3>
			<form onSubmit={handleFormSubmit}>
			<div style={{display:"flex",flexDirection:"column"}}>
				<label htmlFor="userName" style={{fontSize:"1.5rem"}}>UserName</label>
				<input type="text" placeholder="Enter the UserName" value={form.name} onChange={(e)=>addData("name",e.target.value)} />
				<label htmlFor="password"style={{fontSize:"1.5rem"}}>Passoword</label>
				<input type="password" name="password" placeholder="Enter the Password"  value={form.password} onChange={(e)=>addData(
					"password",e.target.value
				)}/>
				{
					error && <div>
						<p style={{color:"red",fontSize:"1.5rem",marginBottom:"0.5rem"}}>Please fill the details</p>
					</div>
				}
			<button type="submit">Log in</button>
			</div>
			<Link to="/Signin" style={{textDecoration:"",color:"gray"}}><p style={{fontSize:"1.5rem"}}>Create a account</p></Link>
			</form>
		</div>
	  </div>
    </>
  );
};

export default Login;
