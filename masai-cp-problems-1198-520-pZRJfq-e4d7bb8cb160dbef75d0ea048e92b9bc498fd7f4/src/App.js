import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch (action.type) {

    case 'EMAIL_INPUT' : {
      return {
        ...state,
        email : action.payload
      }
    }

    case 'PASSWORD_INPUT' : {
      return {
        ...state,
        password : action.payload
      }
    }

    default : {
      throw new Error(`Action type is invalid`);
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);
  let {email, password} = state;

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
  // console.log(submittedData);

  let handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({email : email, password : password});
  }

  let handleEmail = (e) => {
    dispatch({ type: 'EMAIL_INPUT', payload: e.target.value }); 
  }

  let handlePass = (e) => {
    dispatch({ type: 'PASSWORD_INPUT', payload: e.target.value });
  }

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form  onSubmit={handleSubmit} className="form-wrapper" data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" onChange={(e) => handleEmail(e)} data-testid="user-email" />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" onChange={(e) => handlePass(e)} data-testid="user-password" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {submittedData.email && submittedData.password ? 
      <div>
        <div data-testid="submitted-data-email">User Email: {submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password: {submittedData.password}</div>
      </div>:
      
      <div data-testid="no-details-container">no details found</div>
      }
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
