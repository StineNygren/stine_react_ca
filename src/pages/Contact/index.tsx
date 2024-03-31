import { Form } from "react-router-dom";

function Contact() {
    return ( 

          <Form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
            <button type="submit">Send</button>

          </Form>
  

     );
}

export default Contact;