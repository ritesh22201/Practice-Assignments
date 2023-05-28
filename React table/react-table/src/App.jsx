import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';

function App() {
  const [data, setData] = useState([]);
  const [nameInp, setNameInp] = useState('');
  const [sortValue, setSortValue] = useState('');

  let sortData = ['name', 'email', 'phone', 'address', 'status'];

  useEffect(() => {
    fetchAndRender(0, 4, 0);
  }, [])

  const fetchAndRender = async (start, end, increase) => {
    return await axios.get(`http://localhost:3000/users?_start=${start}&_end=${end}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }
  // console.log(data)

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios.get(`http://localhost:3000/users?q=${nameInp}`)
      .then(res => {
        setData(res.data);
        setNameInp('');
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleReset = () => {
    fetchAndRender();
  }

  const handleSort = async (e) => {
    let value = e.target.value;
    return await axios.get(`http://localhost:3000/users?_sort=${value}&_order=asc`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleFilter = async (value) => {
    return await axios.get(`http://localhost:3000/users?status=${value}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <MDBContainer>
      <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }} className='d-flex input-group w-auto' onSubmit={handleSearch}>
        <input type="text" className='form-control' placeholder='Search name' value={nameInp} onChange={(e) => setNameInp(e.target.value)} />
        <MDBBtn type='submit' color='dark'>Search</MDBBtn>
        <MDBBtn className='mx-2' color='info' onClick={() => handleReset()}>Reset</MDBBtn>
      </form>
      <div style={{ marginTop: '100px' }}>
        <h2 className='text-center'>Search, Filter, Sort and Pagination using JSON Fake Rest API</h2>
        <MDBRow>
          <MDBCol size='12'>
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope='column'>S.No</th>
                  <th scope='column'>Name</th>
                  <th scope='column'>Email</th>
                  <th scope='column'>Phone</th>
                  <th scope='column'>Address</th>
                  <th scope='column'>Status</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className='align-center mb-0'>
                  <tr>
                    <td colSpan='8' className='text-center mb-0'>No Data Found</td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, ind) => {
                  return <MDBTableBody key={ind}>
                    <tr>
                      <th scope='row'>{ind + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.status}</td>
                    </tr>
                  </MDBTableBody>
                })
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
      <MDBRow style={{margin : '10px 0 50px 0'}}>
        <MDBCol size='8'>
          <h5>Sort By:</h5>
          <select style={{ width: '50%', borderRadius: '2px', height: '35px' }} onChange={handleSort}>
            <option value="">Select a data</option>
            {sortData.map(el => 
              <option value= {el}>{el}</option>  
            )}
          </select>
        </MDBCol>
        <MDBCol size='4'>
          <h5>Filter By Status:</h5>
          <MDBBtnGroup>
            <MDBBtn color='success' onClick={() => handleFilter('active')}>Active</MDBBtn>
            <MDBBtn color='danger' style={{marginLeft : '3px'}} onClick={() => handleFilter('inactive')}>InActive</MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default App
