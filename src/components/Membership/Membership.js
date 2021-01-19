import React, {useState} from 'react';
import './Membership.css'

const Membership = () => {

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
    }

    const inputStyle = {
        backgroundColor: '#000',
        border: '0px',
        borderBottom: '1px solid blue',
        borderRadius: '0%',
        color: '#00aaff',
        fontSize: '1.8vh',
        fontWeight: 'bold',
        boxShadow: '0px 0px'
      }
      
      const labelStyle = {
        fontWeight: 'bold',
        fontSize: '1.8vh',
      }
    

    return(
        <div className="membership-body">
            Membership
            <div>
            <br></br>
            <h4>Why Join Us?</h4>
            <br></br> 
            <h5 className="membership-description">Be Creative. Stay Connected. Keep Inventing.</h5>
            <br></br>
            <h5 className="membership-description">ACM offers the resources, access and tools to invent the future. No one has a larger global network of professional peers. 
                No one has more exclusive content. No one presents more forward-looking events. Or confers more prestigious awards. Or provides 
                a more comprehensive learning center.</h5>
            <br></br>
            <h4>Membership Benefits</h4>
            <h5 className="membership-description">
            <ul>
                <li>➤ Learning Center with resources for lifelong learning, including online courses and popular certifications, online books and videos 
                       from Skill Soft, online books from O’Reilly, and webinars on hot topics presented by today’s innovators.</li>
                <li>➤ Ability to search DL, access bibliographic citations, view article abstracts.</li>
                <li>➤ A Full year (12 issues) online subscription to Communications of the ACM and MemberNet newsletter</li>
                <li>➤ TechNews (ACM’s tri-weekly email IT news digest)</li>
                <li>➤ CareerNews, ACM’s twice-monthly email career news digest.</li>
                <li>➤ Discounts on subscriptions to ACM journals, magazines, books and conferences.</li>
                <li>➤  Exclusive subscription pricing on ACM Books series.</li>
            </ul>
            </h5>
            <br></br>
            Membership Chair
            <h5 className="membership-description">Anuj Chordia
            <br></br>
            Mobile No: +91 9595526856</h5>
            </div>
            <div className="form-style">
                <h2 className="text-center">Membership Form</h2><br />
                <div className = ' col-md-4 col-10 mx-auto'>
                   <div className = 'mb-3'>
                    <form onSubmit = {formSubmit}>
                     <div className = 'mb-3'>
                      <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Full Name</label>
                      <input style={inputStyle} type = 'text' className = 'form-control' id = 'exampleFormControlInput1' name = 'fullname' value = {data.fullname} onChange = {InputEvent} />
                     </div>
                     <div className = 'mb-3'>
                      <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Email address</label>
                      <input style={inputStyle} type = 'email' className = 'form-control' id = 'exampleFormControlInput1' name = 'email' value = {data.email} onChange = {InputEvent} />
                    </div>
                    <div className = 'mb-3'>
                    <label style={labelStyle} htmlFor = 'exampleFormControlInput1' className = 'form-label'>Mobile Number</label>
                    <input style={inputStyle} type = 'number' className = 'form-control'  id = 'exampleFormControlInput1' name = 'phone' value = {data.phone} onChange = {InputEvent} />
                  </div>
                 <div className = 'col-12 text-center'>
                   <button className = 'btn btn-outline-primary font-weight-bold' type = 'submit'>SUBMIT</button>
                 </div>
                </form>
               </div>
              </div>
           </div> 
        </div>
    )
};

export default Membership;