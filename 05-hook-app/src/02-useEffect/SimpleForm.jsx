import { useState } from "react"




const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : 'ejemplo',
        email: 'ejemplo@gmail.com'
    })

    
  return (
    <>
        <h1>Formulario Simple</h1>
    <hr />

    <input
        value={formState.username}
        type='text'
        className="form-control"
        placeholder='Nombre'
        name='username'
        onChange={e => setFormState({...formState, username: e.target.value})}
    ></input>
    <input
        value={formState.email}
        type='email'
        className="form-control mt-2"
        placeholder='ejemplo@.gmail.com'
        name='email'
        onChange={e => setFormState({...formState, email: e.target.value})}
    ></input>



    </>
  )
}

export default SimpleForm