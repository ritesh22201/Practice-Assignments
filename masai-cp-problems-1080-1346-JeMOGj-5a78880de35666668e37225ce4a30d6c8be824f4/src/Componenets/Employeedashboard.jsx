import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { EmployeeCard } from './Employeecard';


const Employeedashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  let fetchAndRender = async (page) => {
    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${page}`);
      let data1 = await res.json();
      setData(data1.data);
      console.log(data1)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAndRender(page);
  }, [page]);

  return (
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
        {/* map through the data and make use of EmployeeCard*/}
        {data.map((item) => {
          return <EmployeeCard {...item}/>
        })}
      </tbody>
    </table>
  );
};

export default Employeedashboard;
