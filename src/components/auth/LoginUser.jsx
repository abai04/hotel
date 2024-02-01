import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./RegisterUser.css"
function LoginUser({rus}) {
  return (
    <div className='register-block'> 
    <h2>{rus ? "Вход" : "Log-in"}</h2>
    <hr />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{rus ? "Логин" : "Login"}</Form.Label>
        <Form.Control type="email" placeholder={rus ? "Введите почту" : "Enter your e-mail"} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{rus ? "Пароль" : "Password"}</Form.Label>
        <Form.Control type="password" placeholder={rus ? "Введите пароль" : "Enter your password"} />
      </Form.Group>
      
      <Button variant="success" type="submit">
        {rus ? "Отправить" : "Submit"}
      </Button>
    </Form>
    </div>
  );
}

export default LoginUser;