import React, { useEffect, useState } from "react";
import "../css/AddNewPerson.css";

function AddNewPerson() {
  // const [newRow, setNewRow] = useState([]);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    setUserData(storedData);
  }, []);

  const handleAdd = () => {
    setFormData({
      Name: "",
      Date_of_birth: "",
      Aadhar_Number: "",
      Mobile_Number: "",
      Age: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    // if (name === "Date_of_birth") {
    //   const year = new Date(value).getFullYear();
    //   updatedData.Age = new Date().getFullYear() - year;
    // }
    if (name === "Date_of_birth") {
        const birthYear = new Date(value).getFullYear();
        const currentYear = new Date().getFullYear();
        updatedData.Age = currentYear - birthYear;
      }

    setFormData(updatedData);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedList = [...userData, formData];
//     setUserData(updatedList);
//     localStorage.setItem("user", JSON.stringify(updatedList));
//     setFormData(null);
//   };


const handleSubmit = (e) => {
    e.preventDefault();
  
    // Recalculate age just in case
    const birthYear = new Date(formData.Date_of_birth).getFullYear();
    const currentAge = new Date().getFullYear() - birthYear;
  
    const finalData = {
      ...formData,
      Age: currentAge,
    };
  
    const updatedList = [...userData, finalData];
    setUserData(updatedList);
    localStorage.setItem("user", JSON.stringify(updatedList));
    setFormData(null);
  };
  
  
  const handleDelete = (aadhar) => {
    const updatedList = userData.filter(
      (item) => item.Aadhar_Number !== aadhar
    );
    setUserData(updatedList);
    localStorage.setItem("user", JSON.stringify(updatedList));
  };

  return (
    <div className="AddNewPerson">
      <div>
        <h4 className="page-title">Add New Person</h4>
      </div>
      <table frame="box" rules="all">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Adhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <td colSpan={6}>No Data</td>
            </tr>
          ) : (
            userData.map((item) => {
              return (
                <tr key={item.Aadhar_Number}>
                  <td>{item.Name}</td>
                  <td>{item.Date_of_birth}</td>
                  <td>{item.Aadhar_Number}</td>
                  <td>{item.Mobile_Number}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      className="row-btns"
                      onClick={() => handleDelete(item.Aadhar_Number)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {formData && (
        <>
          <h3 style={{ textAlign: "center" }}>Fill below form for New Entry</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="date"
              name="Date_of_birth"
              value={formData.Date_of_birth}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="Aadhar_Number"
              value={formData.Aadhar_Number}
              onChange={handleChange}
              required
              min="100000000000"
              max="999999999999"
            />
            <input
              type="number"
              name="Mobile_Number"
              value={formData.Mobile_Number}
              onChange={handleChange}
              required
              min="1000000000"
              max="9999999999"
            />
            <input
              name="Age"
              value={formData.Age}
              readOnly 
              placeholder="Age"
            />
            <input type="submit" className="row-btns" value="Save" />
          </form>
        </>
      )}

      {/* {!formData && <button className="Add-btn" onClick={handleAdd}>Add</button>} */}
      <button className="Add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddNewPerson;
