import React, { useState } from "react";
import Nav from "./Nav";
import CloseIcon from "@mui/icons-material/Close";
import Barcode from "react-barcode";
import ProductData from "../ProductData";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    Productname: "",
    id: "",
    ManufactureName: "",
    description: "",
    quantity: "",
    Price: "",
    images: "",
  });
  const [error, setError] = useState(false);
  const [complete, setComplete] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [images, setImages] = useState([]);
  const [imageFormat, setImageFormat] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formDataWithImages = {
      ...formData,
      images: images.map((image) => image.dataURL),
    };
    if (
      formData.Productname === "" ||
      formData.id === "" ||
      formData.ManufactureName === "" ||
      formData.description === "" ||
      formData.quantity === "" ||
      formData.Price === "" ||
      formData.images === ""
    ) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      setComplete(true);
      window.scrollTo(0, 0);
      setShowBarcode(false);
      setImages([])
      setFormData({
        Productname: "",
        id: "",
        ManufactureName: "",
        description: "",
        quantity: "",
        Price: "",
        images: "",
      });

      ProductData.push(formData);
     
   
    }
  };
  const handleImage = (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();

        reader.onload = (event) => {
       
          setImages((prevImages) => [
            ...prevImages,
            { dataURL: event.target.result, file
          }]);
      
          setFormData((prevData) => ({
            ...prevData,
            images:  event.target.result,
          }));
        };

        reader.readAsDataURL(file);
        
      } else {
        setImageFormat(true);
      }
    });
  };

  const handleDelete = (index) => {
    setImages((prevImages) => [
      ...prevImages.slice(0, index),
      ...prevImages.slice(index + 1),
    ]);
  };
  const createBarcode = () => {
    setShowBarcode(true);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Nav />

        <div className="form_container">
          <h4 style={{ fontSize: "4rem", color: "#a39b9b91" }}>Add Product</h4>
          {complete && (
            <p className="product_added">
              Your Product is Added.{" "}
              <CloseIcon
                style={{
                  position: "absolute",
                  right: "0",
                  margin: "4px",
                  fontSize: "2rem",
                }}
                onClick={()=>setComplete(false)}
              />
            </p>
          )}
          {error && <p style={{ color: "red",fontSize:"1.5rem"}}>Please fill all the fields</p>}
          <div className="form_wrapper">
            <label
              htmlFor="Productname"
              style={{ fontSize: "2.5rem", color: "black" }}
            >
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter the product name"
              name="Productname"
              value={formData.Productname}
              onChange={handleChange}
              className="form_input"
            />
          </div>
          <div className="form_wrapper">
            <label htmlFor="id" style={{ fontSize: "2.5rem", color: "black" }}>
              Product ID
            </label>
            <input
              type="number"
              placeholder="Enter the product ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="form_input"
            />
          </div>
          <div className="form_wrapper">
            <label
              htmlFor="ManufactureName"
              style={{ fontSize: "2.5rem", color: "black" }}
            >
              Manufacture Name
            </label>
            <input
              type="text"
              placeholder="Enter the Manufacture name"
              name="ManufactureName"
              value={formData.ManufactureName}
              onChange={handleChange}
              className="form_input"
            />
          </div>

          <div className="form_wrapper">
            <label
              htmlFor="quantity"
              style={{ fontSize: "2.5rem", color: "black" }}
            >
              Product Quantity
            </label>
            <input
              type="number"
              value={formData.quantity}
              name="quantity"
              onChange={handleChange}
              className="form_input"
              placeholder="Enter the quantity of Product"
            />
          </div>
          <div className="form_wrapper">
            <label
              htmlFor="price"
              style={{ fontSize: "2.5rem", color: "black" }}
            >
              Product Price
            </label>
            <input
              type="number"
              value={formData.Price}
              name="Price"
              onChange={handleChange}
              className="form_input"
              placeholder="Enter the Price of Product"
            />
          </div>
          <div className="form_wrapper">
            <label
              htmlFor="description"
              style={{ fontSize: "2.5rem", color: "black" }}
            >
              Product Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="120"
              rows="5"
              value={formData.description}
              onChange={handleChange}
             
              placeholder="Enter the description"
            ></textarea>
          </div>
          <div className="">
            <label
              htmlFor="image"
              style={{ fontSize: "2.5rem", color: "black", marginRight: "8%" }}
            >
              Product Image
            </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={handleImage}
              name={formData.images}
            />
          </div>

          <div>
            {imageFormat && (
              <p style={{ color: "red",fontSize:"1.5rem" }}>
                only PNG,JPG,JPEG images is accepted{" "}
              </p>
            )}
          </div>

          <div style={{ position: "relative" }}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.dataURL}
                  alt={`Image ${index + 1}`}
                  style={{ width: "20%", height: "auto" }}
                />
                <CloseIcon
                  style={{ position: "absolute", right: "80%" }}
                  onClick={() => handleDelete(index)}
                />
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} className="addproduct_button">
            Add
          </button>
          <div>
            <button className="barcode_button" onClick={createBarcode}>
              Generate Bar code
            </button>
            <p style={{fontSize:"1.5rem"}}>(for Creating Barcode your Product should have Product ID)</p>
            {showBarcode && <Barcode value={formData.id} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
