
import React from "react";
import {useState, useEffect} from 'react';

import Employeedashboard from "./Componenets/Employeedashboard";
import Pagination from "./Componenets/pagination";
function App() {

  let fetchAndRender = async (current = 1) => {

    const [current, setCurrent] = useState(1);
    const[totalCount, setTotalCount] = useState(0);

    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${current}`);
      let data1 = await res.json();
      setData(data1.data);
      setTotalCount(data1.totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAndRender(current);
  }, [current]);
   
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        {/* add your employee dashboard component here */}
        <Employeedashboard/>
      </div>
      {/* add your pagination component here */}
       <Pagination onChange={}/>
    </div>
  );
}

export default App;
