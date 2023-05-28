import { useEffect, useReducer } from "react";
import axios from 'axios';
import '../style.css'
import { useState } from "react";

let getData = () => {
    return axios.get(`https://reqres.in/api/users`);
}

let initState = {
    loading: false,
    data: [],
    err: false
}

let ProductCard = ({ id, avatar, first_name, last_name, email }) => {
    return <div className="container" key={id}>
        <img src={avatar} alt={first_name} />
        <h2>Name : {first_name} {last_name}</h2>
        <h3>Email : {email}</h3>
    </div>
}


let reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_LOADING': {
            return {
                loading: true,
                data: [],
                err: false
            }
        }

        case 'FETCH_ERROR': {
            return {
                loading: false,
                data: [],
                err: true
            }
        }

        case 'FETCH_SUCCESS': {
            return {
                loading: false,
                data: action.payload,
                err: false
            }
        }

    }
}

function Axios() {
    const [state, dispatch] = useReducer(reducer, initState);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let fetchAndRender = async () => {
        try {
            dispatch({ type: 'FETCH_LOADING' })
            let res = await getData();
            console.log(res);
            setTotalPages(res?.data?.total_pages);
            console.log(totalPages)
            dispatch({ type: 'FETCH_SUCCESS', payload: res ?.data.data })
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR' });
        }
    }

    useEffect(() => {
        fetchAndRender();
    }, [])

    const { loading, err, data } = state;

    return loading ? (<h1>Loading...</h1>) : err ? (<h1>Something went wrong.Please refresh the page</h1>) :
        (
            <div>
                <div className="main-cont">
                    {data.map(el =>
                        <ProductCard key={el.id} {...el} />
                    )}
                </div>
                <div>
                    <button onClick={() => setPage(page - 1)}>Prev</button>
                    <button disabled>{page}</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        )
}

export default Axios;
