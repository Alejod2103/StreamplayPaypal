import { useEffect, useState } from "react"
import InputField from './Components/InputField.js'
import SelectField from "./Components/SelectField.js";
import CheckboxField from "./Components/CheckboxField.js"
import emailjs from 'emailjs-com';
import { ButtonStyled, TextLeft, TextLeftTwo } from './FormStyles.js'
import './Form.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    telf: '',
    message: '',
    user: '',
    role: '',
    password: '',
    repassword: '',
    xxx: false,
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_xd9mtfr', 'template_1z7fite', values, 'nPCuWIe53tZRvDWo5')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          telf: '',
          message: '',
          user: '',
          password: '',
          repassword: '',
          xxx: '',
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="Back-White">
      {status && renderAlert()}
    
    <div className="Back-Blue">
    <TextLeft>Vamos a Crear tu Usuario</TextLeft>
    <TextLeftTwo>Ingresa tu información</TextLeftTwo>
      <div className="BoxCont">
      <form className="form" onsubmit={handleSubmit}>
        <h1 className="textOne">Crea tu usuario</h1>
          <InputField value={values.fullName} handleChange={handleChange} label="Nombre" name="fullName" type="text" placeholder="John Doe" />
          <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
          <InputField value={values.telf} handleChange={handleChange} label="Telefono" name="telf" type="text" placeholder="jphn@example.com" />
          <InputField value={values.user} handleChange={handleChange} label="Usuario" name="user" type="text" placeholder="jphn@example.com" />
          <InputField value={values.password} handleChange={handleChange} label="Contraseña" name="password" type="password" placeholder="jphn@example.com" />
          <SelectField handleChange={handleChange} name="role" label="Paquete" />
          <CheckboxField handleChange={handleChange} type='checkbox' name="xxx" value={values.xxx} />
          <ButtonStyled onClick={handleSubmit} type="submit"><h1>Enviar</h1></ButtonStyled>
        </form>
      </div>
    </div>
    </div>


  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm