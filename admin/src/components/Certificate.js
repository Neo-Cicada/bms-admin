import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
const Certificate = () => {
    const [data, setData] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "CertificateForm"));
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setData(documents);
    };

    fetchData();
  }, []);

      return(
    <div>
      <h1>Fetch data from CertificateForm</h1>
      <ul>
        {data.map((doc) => (
          <li>
            <h4>{doc.certificate}</h4>
            <h4>{doc.email}</h4>
            <h4>{doc.firstname}</h4>
            <h4>{doc.lastname}</h4>
            <h4>{doc.phone}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
} 
          
    

   
 
export default Certificate;