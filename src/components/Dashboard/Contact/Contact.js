import React,{useState} from "react";

const Contact=()=>{

  const [data,setData]=useState({
    fullname:"",
    email:"",
    phone:"",
    msg:"",
  });

    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((preVal)=>{
          return {
                ...preVal,
                [name]:value,
          };
      });
};


    const formSubmit = (e) =>{
          e.preventDefault();
          alert(
            `Hello ${data.fullname}, Thank you for reaching out to us!`
          )
    }


  return (
    <>
      
      <div className="container contact_div shadow-lg p-3 mb-5 bg-white rounded w-50 p-3 border border-primary rounded">
      <div className="my-5 ">
        <h1 className="text-center text-primary">Contact Us</h1>
      </div>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <div class="mb-3">

          <form onSubmit={formSubmit}>
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label text-primary ">Full Name</label>
  <input type="text" class="form-control border-aqua" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label text-primary">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your Email Id" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label text-primary">Mobile Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Mobile Number" />
</div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-primary">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="msg" value={data.msg} onChange={InputEvent}></textarea>
</div>

<div class="col-12 text-center">
    <button class="btn btn-outline-primary" type="submit">SEND</button>
  </div>

          </form>
  
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;