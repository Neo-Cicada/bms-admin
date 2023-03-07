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
      <h1>Fetch data from Facility Form</h1>
      <ul>
        {data.map((doc) => (
          <li>
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
