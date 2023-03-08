import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ExpandableItem from './ExpandableItem';
export default function Facility() {
  const [data, setData] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "FacilityForm"));
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
            title={doc.firstname}
            email={doc.email}
            lastname={doc.lastname}
            number={doc.phone}
            facility = {doc.facility}
            />
            
          </li>
        ))}
      </ul>
    </div>
  );
}
