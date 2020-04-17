import React from 'react'
import './LoginStyle.css'
import { Link } from 'react-router-dom'
import EmailLoginForm from './Forms/EmailLoginForm'
// import FacebookLoginForm from './Forms/FacebookLoginForm'
import GoogleLoginForm from './Forms/GoogleLoginForm'
import { Card,Button } from 'react-bootstrap'
export default function Login() {

return (
<div>
  {/* { <div className='col-md'> */}
    {/* <h1>Login</h1> */}
    {/* <h3>Using email and password</h3> */}
    {/* <EmailLoginForm/> */}
    {/* <h5>or, use one of these services to login</h5> */}
    {/* <GoogleLoginForm/> */}
    {/* <FacebookLoginForm/> */}
    {/* <p>Twitter</p> */}
    {/* <div> */}
      {/* <Link to='/'>back</Link> */}
    {/* </div> */}
  {/* </div>} */}
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
)
}