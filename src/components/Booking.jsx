import { useState } from "react";
import "../css/SearchForm.css"
import { Link } from 'react-router-dom';
import '../css/Booking.css';


function Booking() {
  function alerty() {
    alert("your form has been reset");
  }
    const [passenger, setPassenger] = useState({
        passengerName: "",
        pickupTime: "",
        travelDate: "",
        pickupLocation: "",
        destination: "",
        busType: "",
        phoneNumber: "",
       
      });
      const [booking, setBooking] = useState(null); 
      const [successMessage, setSuccessMessage] = useState("");
      const [failedMessage, setfailedMessage] = useState("");
      const handleChange = (event) => {
        setPassenger({ ...passenger, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(passenger);
        // Add your code to submit the form data to your backend here
        try {
          const response = await fetch("http://localhost:8081/booking/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer gkb0201219789",
            },
            body: JSON.stringify(passenger),
          });
          //console.log(response.json());
          setBooking(await response.json());
          
        // Handle the response data here
        console.log(response.status);
        if (response.status === 201) {
            console.log(booking);
            setPassenger({
                passengerName: "",
                pickupTime: "",
                travelDate: "",
                pickupLocation: "",
                destination: "",
                busType: "",
                phoneNumber: ""
              });
              setSuccessMessage("Booking successful");
        } else {
            setfailedMessage("BookingFailed");
        }
        } catch (err) {
          console.log(err);
          // Handle any errors here
        }
      };  

    
      return (
        <form>
          <>
          {/* <Banner/> */}
        <h1>Add Personal Details to Book a trip</h1>
          <div className="viewbooking">
            <Link to="/bookinglist">
            <button type="button" className="btn btn-success btn-lg">
            <i class="bi bi-book"></i> &nbsp; View Bookings
            </button>
            
        </Link>
        </div>
          <div className="mainy">
              <div className="sub-main">
                  <div className="main11">
            
        <br/>
        <br/>
            
        <form onSubmit={handleSubmit}>
          <div className="h3head"><h4>Add Booking Details</h4></div>
          <div className="h3heady"><h4>Please be adviced that details provided must be correct</h4></div>
           
          <label>
            Passenger Name:
            <input
              type="text"
              name="passengerName"
              value={passenger.passengerName}
              onChange={handleChange}
            />
            <br/>
          </label>
          <br/>
          <br/>
          <label>
            Bus Pickup Time: 
            <input
              type="time"
              name="pickupTime"
              value={passenger.pickupTime}
              onChange={handleChange}
            />
            <br/>
          </label>
          <br/>
          <br/>
          <label>
            Select Travel Date:
            <input
              type="date"
              name="travelDate"
              value={passenger.dateBooked}
              onChange={handleChange}
            />
            <br/>
            <br/>
          </label>
          <br/>
          <label>
            Select Pickup Loc:
            <input
              type="text"
              name="pickupLocation"
              value={passenger.pickupLocation}
              onChange={handleChange}
            />
            <br/>
            <br/>
          </label>
          <br />
          <label>
            Phone Number (s)  :
            <input
              type="text"
              name="phoneNumber"
              value={passenger.phoneNumber}
              onChange={handleChange}
            />
             <br/>
            <br/>
          </label>
          <br />
          <label>
            Set Destination:
            <select name="destination" value={passenger.destination} onChange={handleChange}>
                <option value="">Select a destination</option>
                <option value="Koforidua">Koforidua</option>
                <option value="Kumasi">Kumasi</option>
                <option value="Cape Coast">Cape Coast</option>
                <option value="Bolgatanga">Bolgatanga</option>
                <option value="Ho">Accra</option>
            </select>
            </label>
            <br/>
            <br/>
          <label>
               Select Bus Type:
                <select name="busType" value={passenger.busType} onChange={handleChange}>
                    <option value="">Select a bus type</option>
                    <option value="VIP">VIP</option>
                    <option value="VVIP">VVIP</option>
                    <option value="MiniBus">MiniBus</option>
                </select>
                </label>

            <br/>
            <br/>

            <div className="bookbut">
          <button type="submit">Submit</button>
          <button type="reset" onClick={alerty}>Reset </button>
          </div>
        </form>
        <br/>
        <br/>
        {successMessage && <p>{successMessage}</p>}
        {failedMessage && <p>{failedMessage}</p>}
        {booking && <p>Your booking number is : {booking.bookingNumber}</p>}
        </div>
        </div>
          </div>
          </>
        </form>
      );
      
}


export default Booking;