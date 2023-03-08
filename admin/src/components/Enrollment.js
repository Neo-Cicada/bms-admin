import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ExpandableItem from './ExpandableItem';
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
      <ul style={{listStyleType:'none'}}>
        {data.map((doc) => (
          <li style={{padding: '10px'}}>
           <ExpandableItem
            address={doc.address}
            birthday={doc.birthday}
            city={doc.city}
            emergencynumber={doc.emergencynumber}
            emegergencyfirstname={doc.emegergencyfirstname}
            title={doc.firstname}
            guardianfname={doc.guardianfname}
            guardianlname={doc.guardianlname}
            guardianphone={doc.guardianphone}
            lastname={doc.lastname}
            middlename={doc.middlename}
            province={doc.province}
            
            
            />



          </li>
        ))}
      </ul>
    </div>
  );
}
