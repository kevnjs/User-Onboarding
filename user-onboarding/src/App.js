import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schemaForm from './validation/schemaForm';
import * as yup from 'yup';
import Users from './components/Users';

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  terms: ""
}

const initialErrors = {
  first_name: "",
  last_name: "",
  email: "",
  terms: ""
}

function App() {
  //STATE 
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);

  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers([ resp.data, ...users ])
      })
      .catch(err => console.error(err))
      .finally(() => setForm(initialForm))
    }

  const validate = (name, value) => {
    yup.reach(schemaForm, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setForm({...form, [name]: value})
  }

  useEffect(() => {
    schemaForm.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  useEffect(() => console.log(users), [users]);
  //useEffect(() => console.log(errors), [errors]);
  

  const formSubmit = () => {
    const newUser = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      terms: form.terms
    }
    postNewUser(newUser)
    setForm(initialForm);
  }

  return (
    <div className="App">
      <Form 
      form={form}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={errors}
      />
      {
        users.map( (user, index) => (
          <Users key={index} user={user}/>
        ))
      }
    </div>
  );
}
export default App;
