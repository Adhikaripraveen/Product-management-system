import React from 'react'
import ProductData from "../ProductData";
import Nav from './Nav';

const Home = () => {
	const totalQuantity = ProductData.reduce((acc, product) => acc + Number(product.quantity), 0);
	const totalRevenue=ProductData.reduce((acc,product)=>acc+Number(product.Price),0);

  return (
	<div  className="home-container">
		<Nav/>
	  
	  <div style={{width:"80%"}}  >
		<div className="home-stats">
		<div className='home-tabs'><span>{ProductData.length}</span> Total Produts</div>
		<div  className='home-tabs'><span>{totalQuantity}</span>Stocks</div>
		<div  className='home-tabs'><span>{totalRevenue}</span>Revenue</div>
		</div>
		<div  className="home-table">
		<table>
<thead>
  <tr>
	<th>Image</th>
	<th>Product Name</th>
	<th>Product ID</th>
	
	<th>Description</th>
	<th>Quantity</th>
	<th>Price (INR)</th>
  </tr>
</thead>
<tbody>
  {ProductData.map((product) => (
     
	  <tr id="table" key={product.id}  style={{ border: '1px solid #ddd', borderRadius: '8px',  }}>
	  <td>
		<img src={product.image} alt={product.Productname} style={{ width: '50px', height: '50px' }} />
	  </td>
	  <td>{product.Productname}</td>
	  <td>{product.id}</td>
	
	  <td>{product.description}</td>
	  <td>{product.quantity}</td>
	  <td>{product.Price}</td>
	</tr>

  ))}
</tbody>
</table>
		</div>
	  </div>
	</div>

  )
}

export default Home
