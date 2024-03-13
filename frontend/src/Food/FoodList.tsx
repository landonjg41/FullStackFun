import { useEffect, useState } from 'react';
import { MarriottFood } from '../types/MarriottFood'; // bringing in the MarriottFood object to know what it is, to later map()

function FoodList() {
  const [foodData, setFoodData] = useState<MarriottFood[]>([]);

  // is only grabbing the data if it needs to
  useEffect(() => {
    const fetchFoodData = async () => {
      const rsp = await fetch('http://localhost:5094/MarriottFood'); //grabs data at this location
      const f = await rsp.json(); //stores data to 'f'
      setFoodData(f);
    };
    fetchFoodData();
  }, []); // other wise return an empty array

  return (
    <>
      <div className="row">
        <h4 className="text-center">Best Marriott Food</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Vendor Name</th>
            <th>Food Rating</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr key={f.FoodId}>
              <td>{f.EventName}</td>
              <td>{f.VendorName}</td>
              <td>{f.FoodRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
