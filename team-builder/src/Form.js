import React, { useState } from 'react'


export default function Form (props){
    const {values,update,submit} = props
    
    const onChange = event =>{
        const {name, value} = event.target;
        update(name,value);
    }
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }



    return(
        <div className="container">
            <form onSubmit = {onSubmit}>
                <label htmlFor ="firstName">First Name:
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.firstName}
                        name = "firstName"
                    />
                </label>

                <label htmlFor ="lastName">Last Name: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.lastName}
                        name = "lastName"
                    />
                </label>

                <label htmlFor ="email">Email: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.email}
                        name = "email"
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>



                <div className ="submit">
                <button>Submit</button>
                </div>
            </form>
        </div>

    )
}