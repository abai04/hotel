import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./RegisterUser.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/authActions';
function RegisterUser({rus, setRus}) {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const user = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email,
        password, 
        password_confirm: passwordConfirm
    }
    function click(){
        dispatch(register(user))
        console.log("sadas");
    }
  return (
    <div className='register-block'> 
    <h2>{rus ? "Регистрация" : "Registration"}</h2>
    <hr />
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>{rus ? "Имя" : "First name"}</Form.Label>
        <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" placeholder={rus ? "Введите имя" : "Enter your e-mail"} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>{rus ? "Фамилия" : "Login"}</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder={rus ? "Введите фамилию" : "Enter your e-mail"} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>{rus ? "Номер" : "Phone number"}</Form.Label>
        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder={rus ? "Введите номер" : "Enter your e-mail"} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{rus ? "Логин" : "Login"}</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder={rus ? "Введите почту" : "Enter your e-mail"} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{rus ? "Пароль" : "Password"}</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder={rus ? "Придумайте пароль" : "Enter new password"} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{rus ? "Подтверждение пароля" : "Password confirm"}</Form.Label>
        <Form.Control onChange={(e) => setPasswordConfirm(e.target.value)} type="password" placeholder={rus ? "Подтвердите пароль" : "Confirm password"} />
      </Form.Group>
      
      <Button onClick={click} variant="success">
        {rus ? "Отправить" : "Submit"}
      </Button>
    </Form>
    </div>
  );
}

export default RegisterUser;