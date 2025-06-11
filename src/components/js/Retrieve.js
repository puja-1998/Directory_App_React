import React,  { useState, useRef } from 'react'
import "../css/Retrieve.css";

export default function Retrieve() {
    const [retrieveUserData, setRetrieveUserData] = useState([]);
    const EnterAdharNum = useRef();
    function handleFind(e) {
      e.preventDefault();
      const AdharInput = EnterAdharNum.current.value;
      const sessionData = JSON.parse(localStorage.getItem("user"));
      if(sessionData===null){
          setRetrieveUserData([]);
      }
      else{
          const searchedResult = sessionData.filter(
              (item) => item.Aadhar_Number === AdharInput
            );
            if (searchedResult.length > 0) {
              setRetrieveUserData(searchedResult);
            } else {
              setRetrieveUserData("");
            }
      }
    }
    return (
      <div className="Retrieve">
      <div>
        <h4 className="page-title">Retrieve Information</h4>
      </div>
      <div className="find">
        <form className="find-form" onSubmit={(e) => handleFind(e)}>
          <input
            className="search-aadhar"
            type="number"
            ref={EnterAdharNum}
            min="100000000000"
            max="999999999999"
            required
          />
          <input type="submit" className="find-btn" value="Enter Aadhar Number" />
        </form>
      </div>
      <div className="result">
        {retrieveUserData === "" ? (
          <h1 style={{ textAlign: "center" }}>No Data Found</h1>
        ) : retrieveUserData.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No Data</h1>
        ) : (
          retrieveUserData.map((item) => {
            return (
              <div
                style={{ border: "1px solid black", padding:"10px" } }
                key={item.Aadhar_Number}
              >
                <div className="details">
                  <p>Name :{item.Name}</p>
                  <p>DOB :{item.Date_of_birth}</p>
                  <p>Aadhar :{item.Aadhar_Number} </p>
                  <p>Mobile no. :{item.Mobile_Number}</p>
                  <p>Age :{item.Age}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
    )
}

 
