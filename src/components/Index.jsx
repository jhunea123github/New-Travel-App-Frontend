import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Index.css';
import FamilyCard from './FamilyCard';



function Index() {
  return (
  <div>
  
    
  <h1 className='heady'>TRAVEL APP</h1>
  
  <br/>
  <div className="center">
               
    <FamilyCard/>
          
    </div>

  <div class="container-fluid">
      <div class="justify ">
      <Link to="/booking">
      <button type="button" className="btn btn-success btn-lg">
        <i className="bi bi-bus-front-fill"></i> &nbsp; Book a Trip
      </button>
    </Link>   
       </div>
       </div>
       </div> 

  );
}

export default Index;
