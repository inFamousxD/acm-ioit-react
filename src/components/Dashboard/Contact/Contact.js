import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Contact.css';



const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    msg: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
  });
};

const formSubmit = (e) => {
  e.preventDefault();
  alert(
    `Hello ${data.fullname}, Thank you for reaching out to us!`
  )
}



// Please use Row, Col, Container directly from react-bootstrap, I have provided a sample below. Otherwise we'd be underutilizing react's optimisation power.
// Also when copy-pasting pre-made bootstrap components, make sure to change "class" to "className" and "for" to "htmlFor". I've done it for now as I didn't want reference
// -- errors. But be careful of that.
// I've also rearranged the code. Use perfect tabs, make it look pretty in general - it is easier to read and modify.

return (
  
<div className = 'container-fluid contact_div p-3 mb-5 ' >
  <Row>
    <Col sm={12} lg={4} md={4} xl={4}>
      {/* Map will go here */}
    </Col>
    <Col sm={12} lg={8} md={8} xl={8}>
      <div className = 'my-5 '><h1 className = 'text-center font-weight-bolder'>Contact Us</h1></div>
        <div className = 'row'>
        <div className = 'col-md-6 col-10 mx-auto'>
          <div className = 'mb-3'>
            <form onSubmit = {formSubmit}>
              <div className = 'mb-3'>
                <label htmlFor = 'exampleFormControlInput1' className = 'form-label font-weight-bold  '>Full Name</label>
                <input type = 'text' className = 'form-control border-aqua' id = 'exampleFormControlInput1' name = 'fullname' value = {data.fullname} onChange = {InputEvent} placeholder = 'Enter your Name' />
              </div>
                <div className = 'mb-3'>
                <label htmlFor = 'exampleFormControlInput1' className = 'form-label font-weight-bold '>Email address</label>
                <input type = 'email' className = 'form-control' id = 'exampleFormControlInput1' name = 'email' value = {data.email} onChange = {InputEvent} placeholder = 'Enter your Email Id' />
              </div>
              <div className = 'mb-3'>
                <label htmlFor = 'exampleFormControlInput1' className = 'form-label font-weight-bold '>Mobile Number</label>
                <input type = 'number' className = 'form-control' id = 'exampleFormControlInput1' name = 'phone' value = {data.phone} onChange = {InputEvent} placeholder = 'Enter Mobile Number' />
              </div>
              <div className = 'mb-3'>
                <label htmlFor = 'exampleFormControlTextarea1' className = 'form-label font-weight-bold '>Message</label>
                <textarea className = 'form-control' id = 'exampleFormControlTextarea1' rows = '3'  name = 'msg' value = {data.msg} onChange = {InputEvent}></textarea>
              </div>
              <div className = 'col-12 text-center'>
                <button className = 'btn btn-outline-dark font-weight-bold' type = 'submit'>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</div>

)}

export default Contact;