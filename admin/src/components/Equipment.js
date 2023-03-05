import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
export default function Equipment() {
  const [data, setData] = useState([]);

  useEffect(() => {
 const fetchData = async () => {
   const querySnapshot = await getDocs(collection(db, "EquipmentForm"));
   const documents = querySnapshot.docs.map((doc) => doc.data());
   setData(documents);
 };

 fetchData();
}, []);
return(
  <div>
    <h1>Fetch data from Equiment Form</h1>
    <ul>
      {data.map((doc) => (
        <li>
          <h4>{doc.barangay}</h4>
          <h4>{doc.city}</h4>
          <h4>{doc.email}</h4>
          <h4>{doc.equipment}</h4>
          <h4>{doc.firstname}</h4>
          <h4>{doc.lastname}</h4>
          <h4>{doc.phone}</h4>

        </li>
      ))}
    </ul>
  </div>
);
}
