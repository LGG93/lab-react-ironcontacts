// src/App.js
import "./App.css";
import allContacts from "./contacts.json";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


const firstFive = allContacts.slice(0,5)

function App() {
  const [celebs, setCelebs] = useState(firstFive)
  console.log(firstFive)
  return (
    <div>
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
        </tr>
        )
      })}
      </tbody>
    </table>
    </div>
    
  /*<div className="App">
    <h1>Hello</h1>
    <div className="celebDiv">
    {celebs.map(celebrity => <Celeb key= {uuidv4()} pictureUrl= {celebrity.pictureUrl} name= {celebrity.name} popularity= {celebrity.popularity} />)}
    </div>
  </div>*/
  );
}
export default App;