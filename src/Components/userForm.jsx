import React from 'react';
import useInput from '../hooks/useInput';


const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName]= useInput('');
    const [lastName,bindLastName, resetLastName]= useInput('');
    const submitHandler= e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
 ;
    return ( 
        <div className='bg-white'>
          <form onSubmit={submitHandler}>
            <div>
                <label className='flex justify-between items-center'  >FirstName</label>
                <input className='flex justify-between items-center border-spacing-8' 
                {...bindFirstName}
                type='text' 
               ></input>
            </div>
            <div>
                <label className='flex justify-between items-center' >LastName</label>
                <input className='flex justify-between items-center' 
               {...bindLastName}
               type='text'
                >
                </input>
            </div>
            <button type='submit' className='btn-primary'>Submit</button>
          </form>
        </div>
     );
}
 
export default UserForm;