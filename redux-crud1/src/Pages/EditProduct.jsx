import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editPrice } from '../Redux/Products/action';

const EditProduct = () => {
  const {id} = useParams();
  const {products} = useSelector(store => store.productReducer);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find(el => el.id === +id);
    setPrice(data.price);
  }, [])

  const handleEdit = () => {
    const data = {price}
    dispatch(editPrice(id, data));
  }

  return (
    <div>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onSubmit={handleEdit}>Submit</button>
    </div>
  )
}

export default EditProduct;