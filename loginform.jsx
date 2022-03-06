
import { useState } from 'react';
import { React } from 'react';
import '../From/form.css';

const BasicForm = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [allEntry,setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email: email, password:password};
        setAllEntry([ ...allEntry, newEntry]);
        console.log(allEntry);
       
    }

    
   

return(

    

    
    <>

    <div className='frm'>

   


        <form action="" onSubmit={submitForm}>

        <div className='myform'>

            <label htmlFor='email'>Email: </label>
            <input type="text" name='email' id="email" value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
            <br></br><br></br>
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id="password" value={password} autoComplete="off" onChange={ (e) => setPassword(e.target.value)} />
            <br></br><br></br>
            <button type='submit' >Login</button>
        </div>

        </form>
        
        
        <div> 

        {
            allEntry.map((curElem) => {

                return(
                    <div className="mydetail">
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }


        </div> 

    </div>
    </>



)



}



export default BasicForm;
