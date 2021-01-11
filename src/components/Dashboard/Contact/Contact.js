import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Contact.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import Animation from './Animation';

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


const inputStyle = {
  backgroundColor: '#00aaff',
  border: '0px',
  borderBottom: '1px solid black',
  borderRadius: '0%',
  color: '#000',
  fontSize: '1.8vh',
  fontWeight: 'bold',
  boxShadow: '0px 0px'
}

const labelStyle = {
  fontWeight: 'bold',
  fontSize: '1.8vh'
}

// Please use Row, Col, Container directly from react-bootstrap, I have provided a sample below. Otherwise we'd be underutilizing react's optimisation power.
// Also when copy-pasting pre-made bootstrap components, make sure to change "class" to "className" and "for" to "htmlFor". I've done it for now as I didn't want reference
// -- errors. But be careful of that.
// I've also rearranged the code. Use perfect tabs, make it look pretty in general - it is easier to read and modify.

return (
  
<div className = 'container-fluid contact-div p-3' >
  <Row>
    <Col sm={12} lg={5} md={5} xl={5}>
      <div className='map-container'>
        <MapContainer scrollWheelZoom={false} style={{
          height: '52.5vh',
          zIndex: '1',
          marginTop: '3rem',
          marginLeft: '2rem',
          borderRadius: '1%',
          border: '2px solid black'
        }} center={[18.530989,73.8672683]} zoom={17}>
          <TileLayer
            attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url = 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
          />
          <Marker position={[18.530989,73.8672683]} />
        </MapContainer>
      </div>
      {/* <div>
        <Animation />
      </div> */}
    </Col>
    <Col sm={12} lg={7} md={7} xl={7}>
      <div className = 'my-5 '><h1 className = 'text-center font-weight-bolder'>Contact Us</h1></div>
        <div className = 'row'>
        <div className = 'col-md-6 col-10 mx-auto'>
          <div className = 'mb-3'>
            <form onSubmit = {formSubmit}>
              <div className = 'mb-3'>
                <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Full Name</label>
                <input style={inputStyle} type = 'text' className = 'form-control' id = 'exampleFormControlInput1' name = 'fullname' value = {data.fullname} onChange = {InputEvent} placeholder="Enter Full Name"/>
              </div>
                <div className = 'mb-3'>
                <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Email address</label>
                <input style={inputStyle} type = 'email' className = 'form-control' id = 'exampleFormControlInput1' name = 'email' value = {data.email} onChange = {InputEvent} placeholder="Enter Email Id" />
              </div>
              <div className = 'mb-3'>
                <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Mobile Number</label>
                <input style={inputStyle} type = 'number' className = 'form-control'  id = 'exampleFormControlInput1' name = 'phone' value = {data.phone} onChange = {InputEvent} placeholder="Enter Phone Number" />
              </div>
              <div className = 'mb-3'>
                <label style={labelStyle} htmlFor = 'exampleFormControlTextarea1' className = 'form-label'>Message</label>
                <textarea style={inputStyle} className = 'form-control' id = 'exampleFormControlTextarea1' rows = '3'  name = 'msg' value = {data.msg} onChange = {InputEvent} placeholder="Send us a Message"></textarea>
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