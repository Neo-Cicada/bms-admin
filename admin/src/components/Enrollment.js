import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
export default function Enrollment() {
  const [data, setData] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "enrollmentform"));
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setData(documents);
    };

    fetchData();
  }, []);
  return(
    <div>
      <h1>Fetch data from Enrollment Form</h1>
      <ul>
        {data.map((doc) => (
          <li>
            <h4>{doc.address}</h4>
            <h4>{doc.birthday}</h4>
            <h4>{doc.city}</h4>
            <h4>{doc.emergencyfirstname}</h4>
            <h4>{doc.emergencylastname}</h4>
            <h4>{doc.emergencynumber}</h4>
            <h4>{doc.firstname}</h4>
            <h4>{doc.lastname}</h4>
            <h4>{doc.middlename}</h4>
            <h4>{doc.province}</h4>
            <h4>{doc.guardianfname}</h4>
            <h4>{doc.guardianlname}</h4>
            <h4>{doc.guardianphone}</h4>



            <h4>{doc.phone}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
