import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ExpandableItem from './ExpandableItem'
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
      <ul style={{listStyleType:'none'}}>
        {data.map((doc) => (
          <li style={{padding: '10px'}}>
            <ExpandableItem
            certificate={doc.certificate}
            email={doc.email}
            title={doc.firstname}
            lastname={doc.lastname}
            number={doc.phone}
            
            />
          </li>
        ))}
      </ul>
    </div>
  );
} 
          
    

   
 
export default Certificate;