import React from "react";
import { useState, useEffect } from "react";

let getData = async(page = 1) => {
  let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees/?limit=12&page=${page}`)
  let data = await res.json();
  return data;
}

function App() {

  const[data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  
  let fetchAndRender = async(page) => {
    let data1 = await getData(page);
    setData(data1.data);
    setTotalCount(data1.totalPages);
  }

  useEffect(() => {
    fetchAndRender(page)
  },[page])

  let onChange = (ind) => {
    setPage(ind);
  }
  
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}            
            {data.map((item) => {
             return <tr key={item.id}>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
            })}            
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {new Array(totalCount).fill(0).map((item, ind) => {
        return <button disabled={page == ind + 1} onClick={() => onChange(ind + 1)} style={{border : page == ind + 1 ? '1px solid red' : ''}}>{ind + 1}</button>
      })}      
    </div>
  );
}

export default App;
