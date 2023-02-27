import React from "react";
import "../css/Login.css";
import "../css/about.css";
import Buses from "../video/Buses.mp4";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a company that specializes in creating awesome web applications.
      </p>
      <div className="myvideo">
        <video autoPlay loop muted>
          <source src={Buses} type="video/mp4" />
        </video>
        <p>
          <h3>
            <h1> About Us - Team Travel App</h1>
            <p />
            We as a group of (5 FIVE) are here to help everyone, in a sense of
            making life more comfortable. Buses are the most frequently vehicle
            used for small distance trips or very long trips. Types of buses
            available in the market according to the private or public are in
            high demands .
            <p />
            In our generation, each and everyone likes to comfortable when
            travelling. Making the system more useful, unique tickets will be
            generated as its seats are confirmed. Here we are with a system that
            can facilitate the users to which they can get their seats details.
            As staff will decide the bus and seat availability and here, we have
            other users like the staff of the bus and driver with the owner who
            together collaborates in smooth functioning of the travel app
            system.
            <p />
            <h1> Author and Makers of this App</h1>
            <br />
            <p>George Banin - Back End Developer</p>
            <p>Owusu Bright Junior - Front-End Developer</p>
            <p>Catherine Kumiwaa Bonsu - Documentation and Design</p>
            <p>Samuel - Err Diagrams and Flowchart Designer</p>
            <p>Kallum - Testing and Bug Checking</p>
            <p />
            <h1> Contacts </h1>
            <p>KOFI ANNAN CENTRE OF EXCELLENCE IN INFORMATION TECHNOLOGY</p>
            <p>Feel free to contact us at any time:</p>
            <ul>
              <li>Email: contact@mycompany.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 123 Main St, Anytown USA</li>
            </ul>
            <br />
            <h1>OTHERS</h1>
            <p>
              <h3>
                This program was built with Java as the main backend and React for the frontend-
              </h3>
            </p>
          </h3>
        </p>
      </div>
    </div>
  );
}

export default About;
