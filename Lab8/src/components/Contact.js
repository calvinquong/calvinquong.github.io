import React from 'react'
import Popup from "reactjs-popup";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function sub(e){
    console.log('hey');
  
    confirmAlert({
        title: 'Confirm Your Booking',
        message: 'Please note that once you confirm, there is no refund.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Thank you for booking a court!')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });

    //alert(`hello, ${name}`);
    

}
const Contact=()=>{
    return(
        <div className="container">
         <div align="center">
                    <br></br>
            <br></br>
            <a ><img src="https://img.icons8.com/color/48/000000/open-book.png" style={{width:"30px"}}/><span> <h4>Book</h4></span></a>
            </div>
        <div align="right">  <Popup trigger={<button type="button"> ?</button>} position="left center">
                <div align="left"><u>Help</u><br></br>
            
               <p align="left"> Use this page to book a time for a court. Keep in mind that the play time is 1.5 hours.
                Also, please read and understand the rules. Those who do not follow the rules of
                our club will be kicked off the courts without refund.</p>
                
                
                </div>
                </Popup></div>

        <div class="container" >
        <h2 id='notice'>Important Notice</h2>
            <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert"></button>
            Due to the recent covid-19 outbreak, we are asking all members to please <strong> wear a mask.</strong><br></br>
            Thank you for your cooperation.
            </div>
            </div>
            <br></br>
           
            <p>Badminton Court Bookings</p>



            <div id="accordion">
            <div class="card">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseService">Check-In</a>
                </div>
                <div id="collapseService" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>All members are required to check in for their court bookings. 

Individuals who do not check in for their court will be counted as a no-show. Repeated no-shows may result in loss of booking privileges for a period of time. Continued non check-ins will result in longer suspension time periods.

If you have not shown up by 10 minutes past the start time of the booking you forfeit the court. Late arrivals are counted as no-shows.


Booking of courts for others is not permitted. Members are asked to cancel their bookings (online or in person) in advance to allow others to book the courts. Courts cannot be cancelled after the start of the booking time.</p>
                    </div>
                </div>
                </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseDate">What to bring</a>
                </div>
                <div id="collapseDate" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>Closed-toed, activity-appropriate footwear is required. Please make sure shoes are free of debris before entering the facility.
Socks, barefoot and back-less shoes will not be allowed at anytime.
A shirt is required during all drop-in activities.
Jeans and dress pants are not permitted.
</p>
                       

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseClientInfo">Rules</a>
                </div>
                <div id="collapseClientInfo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>1. Maximum 4 people on each court <br></br>

                        2. Round Robin games are not allowed. <br></br>

3. No playing between courts or on the sidelines.<br></br>

4. Bags and backpacks are to be left in the change rooms downstairs and not brought up to the gym space.<br></br>

5. Players should only enter the gym shortly before their scheduled booking.</p>
                    </div>
                </div>
            </div>
    </div>

    <div class="card-body">
                        <div>
                        <p style={{fontSize:'20px'}}><strong>Select a date and time</strong><br></br>
                        </p>
                        <p><strong><u>New Updated Hours</u><br></br>
                       
                       
                        Monday-Friday 10am-6pm<br></br>
                        Saturday-Sunday 12pm-5pm
                        </strong>
                        </p>

                        <p><strong>*Reminder* Play lasts 1 hr 30 mins. from the start time of your booking</strong></p>

                        <p><strong><u>Fees (pay at check-in)</u></strong><br></br>Members:$10<br></br> Non-members: Monday-Thursday:$20 <br></br> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Friday-Sunday:$30 </p>
                        </div>
                        
                        <div class="form-group row">
                            <label for="dateTimeInput" class="col-2 col-form-label">Date</label>
                            <div class="col-10">
                                <input type="date"/>
                            </div>
                        </div>
                             <div class="form-group row">
                            <label for="dateTimeInput" class="col-2 col-form-label">Time </label>
                            <div class="col-10">
                                <input class="form-control" type="time"  id="TimeInput"/>
                            </div>
                        </div>
                        <form> {/*Input text and submit button*/}
                            <label for="kname">Please enter your first and last name</label>
                            <input className="form-control" type="name"  id="NameInput"/>
                         <br>
                            </br>
                            <label for="mname">Please enter your email</label>
                            <input className="form-control" type="email" id="EmailInput"/>

                       
                        </form>

                    </div>

                    <div style={{textAlign:'center'}}>
                    
                    <button onClick={() => sub('')}>Confirm</button>
                        
                        </div>


            

            <div style={{ left:'0', bottom:'0', right:'0'}}id = "footer" className="container-md p-3 my-3 border bg-dark text-white">

          
        
    


<p style ={{fontSize: "20px"}}>Contact Us</p>


Phone: 647-542-9766
<br></br>
Email: admin@cqbadminton.com
<br></br>
Facebook: CQBadminton
<br></br>Instagram: cqbadmintonstoreandclub
</div>
        </div>

        
    )
}
export default Contact

