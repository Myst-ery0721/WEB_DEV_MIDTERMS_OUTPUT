import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)
  
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  
  return (
    <div>
      <h2>Hey {name}, Contact Us</h2>
      <p>We’d love to hear from you! Whether you have a question, feedback, or simply want to say hello, Coffee Corner is here to connect.
        Feel free to reach out through any of the following channels:</p>
        <p> ------☕ Email: KapeIsLayp@coffeecorner.com </p>
        <p> ------☕ Phone: +633333333333</p>
        <p> ------☕ Address: 123 Brew Lane, Coffee Town, PH Kape is Layp</p>
    </div>
  )
}
