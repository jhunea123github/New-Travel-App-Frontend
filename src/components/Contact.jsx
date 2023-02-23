import '../css/Contact.css';


function Contact() {
  return (
    
    <div className="main">
      {/* <h5>
        <img src="logo192.png"/>
      </h5> */}
      <form action="/3000">
      <h2> Please Send Us your concern</h2>
      {/* <div className="flexdiv1 "> */}
        <input type="text" name="name" placeholder="Full name" />
        <br></br>
        <br></br>
        <input type="text" name="name" placeholder="Email" />
        <br></br>
        <br></br>
        <input type="text" name="name" placeholder="Phone number" />
      {/* </div> */}
      <p><h4>Message</h4></p>
      <div>
        <textarea rows="12" cols="80" ></textarea>
      </div>
      <button type="submit" href="/">
        Submit
      </button>
      </form>
      {/* <h5>
        <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png"/>
      </h5> */}
    </div>
    
  );
}


export default Contact;
