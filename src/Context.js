// FormDataContext.js
import React, { createContext, useState } from 'react';

// Create the context
const FormContext = createContext();

// Context provider component
const FormDataProvider = ({ children }) => {
  const [form, setForm] = useState({
	name:"",
	password:""
  });

  // Add a field to the form data
  const addData = (Name, Value) => {
    setForm((prevData) => ({
      ...prevData,
      [Name]: Value,
    }));
  };

  // Remove a field from the form data
  const removeData = () => {
    setForm({
		name:"",
		password:""
	});
  };

  return (
    <FormContext.Provider value={{ form, addData, removeData}}>
      {children}
    </FormContext.Provider>
  );
};

export { FormDataProvider, FormContext };
