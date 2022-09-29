import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
//import logo from './logo.svg';
import './App.css';
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from "./mock.data.json";
// import data from DB

function App() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const baseurl = "http://localhost:8080";

  const refreshAllData = () => {
    fetch(baseurl + "/api/object/")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then(data => {
        setContacts(data);
      })
      .catch(err => {
        console.log(err)
        alert("unknown failure while refreshing");
      })
  };

  useEffect(() => {
    //refreshAllData();
  });

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const request = new Request(baseurl + '/api/object/', {method: 'POST', headers:myHeaders, body: JSON.stringify(newContact)});

    fetch(request)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const newContacts = [...contacts, data];
        setContacts(newContacts);
        setAddFormData({});
      })
      .catch(err => {
        alert("failed to add object");
      });
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
            <ReadOnlyRow contact={contact}/>
          ))}
        </tbody>
      </table>

      <h2>Add Item info</h2>
      <button type="button" onClick={refreshAllData}>refresh</button>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone #..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )};

// original app
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
