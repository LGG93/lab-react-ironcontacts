// src/App.js
import "./App.css";
import allContacts from "./contacts.json";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';




function App() {
  const firstFive = allContacts.slice(0,5) //Getting first 5 from the Array
  const [celebs, setCelebs] = useState(firstFive)
  console.log(firstFive)
  
//Adding randome Contacts
  const addRandomContact = ()=>{
    setCelebs((prevContacts)=>{       //Getting the Contacts that have already appeared
      console.log("Previous contacts", prevContacts)
      const newContactsList = allContacts.filter((contact)=> {
        return !prevContacts.includes(contact); // Contacts will not appear twice
      });

      const getRandomContact = newContactsList[Math.floor(Math.random()* newContactsList.length)];
      const newConctactSelection = [...prevContacts,getRandomContact]
      return newConctactSelection; //Here we get a new random contact from the Arrays copy
    })
  };

  //Sorting Contacts by name
  const sortByName = ()=>{
    setCelebs((prevContacts)=>{ //Here we sort all the contacts alphabetically
      let sortedContacts = [...prevContacts.sort((a, b) => a.name.localeCompare(b.name))]
      //With localeCompare we can compare two strings with special characters also
      return sortedContacts
    })
  };

  //Sort Contacts by popularity
  const sortByPopularity = () =>{
    setCelebs((prevContacts)=>{
      let sortedByPopularity = [...prevContacts.sort((a, b) => b.popularity - (a.popularity))]
      return sortedByPopularity
    })
  }

  //Delete Contact
  const deleteContact = (contactId) =>{
    setCelebs((prevContacts)=>{
      const newContactsList = prevContacts.filter((contact)=> {
        return contact.id !== contactId;
      });
      return newContactsList
    })
  }



  
  return (
    <div>
    <button onClick={addRandomContact}>Add a random celebrity</button>
    <button onClick={sortByName}>Sort Contact by Name</button>
    <button onClick={sortByPopularity}>Sort Contact by Popularity</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
      {celebs.map((singleCeleb)=>{
        return(
          <tr key= {uuidv4()}>
          <td><img src={singleCeleb.pictureUrl} style={{height: "200px"}}></img></td>
          <td>{singleCeleb.name}</td>
          <td>{singleCeleb.popularity}</td>
          <td>{(singleCeleb.wonOscar ? "🏆" : "")}</td>
          <td>{(singleCeleb.wonEmmy ? "🏆" : "")}</td>
          <button className="del-but" onClick={()=>deleteContact(singleCeleb.id)}><span class="emoji">🗑</span></button>
        </tr>
        )
        
      })}
      </tbody>
    </table>
    </div>
    
  );
}
export default App;