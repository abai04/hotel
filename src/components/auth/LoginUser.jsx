import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./RegisterUser.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
function LoginUser({rus}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginData = {email, password}
  function click(){
    dispatch(login(loginData))
  }
  return (
    <div className='register-block'> 
    <h2>{rus ? "Вход" : "Log-in"}</h2>
    <hr />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{rus ? "Электронная почта" : "E-mail"}</Form.Label>
        <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder={rus ? "Введите почту" : "Enter your e-mail"} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{rus ? "Пароль" : "Password"}</Form.Label>
        <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder={rus ? "Введите пароль" : "Enter your password"} />
      </Form.Group>
      
      <Button onClick={click} variant="success">
        {rus ? "Войти" : "Log in"}
      </Button>
    </Form>
    </div>
  );
}

export default LoginUser;