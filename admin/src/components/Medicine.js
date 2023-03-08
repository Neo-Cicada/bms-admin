import {React, useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import ExpandableItem from './ExpandableItem';
export default function Medicine() {
  const [data, setData] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "MedicineForm"));
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
              barangay={doc.barangay}
              city={doc.city}
              email={doc.email}
              title={doc.firstname}
              lastname={doc.lastname}
              medicine={doc.medicine}
              phone={doc.phone}
              province={doc.province}
            />
            </li>
          ))}
        </ul>
      </div>
    );
  
}
