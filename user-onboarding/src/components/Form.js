import React from 'react';
import './Form.css';

export default function Form(props){
    const { form, change, submit, disabled, errors} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <>
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <label>First Name :</label>
                <input 
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={onChange}
                />
                

                <label>Last Name :</label>
                <input type="text"
                name="last_name"
                value={form.last_name}
                onChange={onChange}
                />


                <label>Email :</label>
                <input type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                />
                

                <label>I agree to the terms of service</label>
                <input type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={onChange}
                />

                <button disabled={disabled}>Submit</button>
            </form>
        </div>
        <div className="errors">
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.terms}</div>
        </div>
        </>
    )
}