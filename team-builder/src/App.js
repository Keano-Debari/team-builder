import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamMembers from './TeamMembers';
import React, { useState } from 'react';
import axios from 'axios';


const team = [
  {firstName: 'Marcos', lastName: 'Boomin', email:'marcos@gmail.com',role:'Backend Engineer'},
  {firstName: 'David', lastName: 'Ngo', email:'davidngo@gmail.com',role:'Frontend Engineer'},
  {firstName: 'Hannah', lastName: 'Bradley', email:'hannahB@gmail.com',role:'UX Designer'},
  {firstName: 'Edwin', lastName: 'Garcia', email:'edwinG@gmail.com',role:'UX Researcher'},
]
const initialFormValues = {
  firstName: '',
  lastName: '',
  email:'',
  role:'',
}
function App() {
  const [members,setMembers] = useState(team);
  const[formValues,setFormValues] = useState(initialFormValues);

  const updateForm = (name,value)=>{
    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = event =>{
    const newMember ={
      firstName: formValues.firstName.trim(),
        lastName: formValues.lastName.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
    }
    if (!newMember.firstName || !newMember.email || !newMember.role) return

    axios.post('fakeapi.com', newMember)
    .then(res => {
      setMembers([...members, res.data])
      setFormValues(initialFormValues)
    })
    .catch(error => {
      console.log(error);
    })
}
  return (
    <div className="container">
     <h1>Team Members</h1>
        <Form 
          values = {formValues}
          update = {updateForm}
          submit = {onSubmit}/>
        {
        members.map(item => {
          return (
            <TeamMembers key={item.id} team={item} />
          )
        })
      }

    </div>
  );
}

export default App;
