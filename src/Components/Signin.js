import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
	const[error,setError]=useState(false)
	const[message,setMessage]=useState(false)
  const [accountData, setAccountData] = useState({
    name: "",
    email: "",
    password: "",
    employeeid: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   if(accountData.name===""||accountData.email===""||accountData.password===""||accountData.employeeid==="")
   {
	setError(true);
   }
   else{
	setMessage(true);
	setAccountData({
		name: "",
		email: "",
		password: "",
		employeeid: "",
	  });
   }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="signin-container">
        <img src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1" alt="logo" />

        <div>
          <p style={{textAlign:"left" ,color:"black",fontSize:"1rem"}}>Create an Account </p>
        </div>

        <form className="signin-form" onSubmit={handleSubmit}>
			{
				message && <div >
					<p style={{color:"green"}}>Account Created!!!!</p>
				</div>
			}
          <div style={{textAlign:"left"}}>
            <label htmlFor="username">Name</label>
            <input type="text" placeholder='Enter the name' name="name" value={accountData.name} onChange={handleChange} />
            <label htmlFor="mail">Email</label>
            <input type="email" placeholder='Enter the email' name="email" value={accountData.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter the password' name="password" value={accountData.password} onChange={handleChange} />
            <label htmlFor="employeeid">Employee ID</label>
            <input type="number" placeholder='Enter the ID' name="employeeid" value={accountData.employeeID} onChange={handleChange} />
			{
				error && <div>
					<p style={{color:"red"}}>Please fill all the Fields.</p>
				</div>
			}
            <button type='submit'>Create account </button>
          </div>
        </form>
        <Link to="/" style={{marginTop:"10px",color:"gray"}}>Login</Link>
      </div>
    </>
  )
}

export default Signin;
