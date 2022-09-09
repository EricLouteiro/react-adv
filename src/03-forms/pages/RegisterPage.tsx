import "../styles/styles.css";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = registerData;

    const onChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target
        setRegisterData(state => ({
            ...state,
            [ name ]: value
        }))
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(registerData)
    }

  return (
    <div>
        <form noValidate onSubmit={ submit } >
            <input 
                type='text'
                name="name"
                placeholder="Name"
                value={ name }
                onChange={ onChange }
            />
            <input 
                type='email'
                placeholder="email"
                name="email"
                value={email}
                onChange={ onChange }
            />
            <input 
                type='password'
                placeholder="Password"
                name="password"
                value={password}
                onChange={ onChange }
            />
            <input 
                type='password'
                placeholder="Repeat Password"
                name="password2"
                value={ password2 }
                onChange={ onChange }
            />
            <button type="submit" >Create</button>
        </form>
    </div>
  )
}
