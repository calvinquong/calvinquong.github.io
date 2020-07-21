import React from 'react'
import Popup from "reactjs-popup";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function ally(name){
    //console.log('hey');
    console.log('hey');
    confirmAlert({
        title: 'We will send you an email shortly',
        message: 'Feel free to reply anytime',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('We hope to hear from you soon! Thanks!')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });
   // alert();
    

}

const Club=()=>{

    //handleSubmit=(event)=>{
       // event.preventDefault()
  //  }
  
    return(
        <div className="container">
         <div align="center">
                    <br></br>
            <br></br>
            <a ><img src="https://img.icons8.com/color/48/000000/badminton-2.png" style={{width:"30px"}}/><span> <h4>Club</h4></span></a>
            </div>
            <div align="right">  <Popup trigger={<button type="button"> ?</button>} position="left center">
                <div align="left"><u>Help</u><br></br>
                <p align="left">This page is about our club. There is information about the competitions we 
                participate in, and a picture of our courts. You can also request to join our club by giving us your email.</p>
                
                
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

            <div style={{border:"1px solid black", borderWidth:"1px"}}>
            <img style={{ height: '550px', width: '100%'}} src={ require('./courts.png') } /> {/* Image taken from google images */}
            </div>

            <br></br>
            <br></br>
            <h2>16 badminton courts!!!</h2> 
            <h2>We produce the best players in Ontario!!!</h2> 
            <h2>Top Club in Canada!!!</h2>
            <br></br>
            <h1><u>Competitions</u></h1>
            <br></br>
            <div id="accordion">
            <div class="card">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseService">Monthly Free Play</a>
                </div>
                <div id="collapseService" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>We host local tournaments every month! Only local players allowed.</p>
                    </div>
                </div>
                </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseDate">Semi-Annual Competition</a>
                </div>
                <div id="collapseDate" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>We participate in the provincial tournaments twice a year. The top players of the tournament qualify
                        to play in the national finals! </p>
                       

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseClientInfo">SmashFest</a>
                </div>
                <div id="collapseClientInfo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                        <p>If any of our players qualify, they compete in the annual national competition called SmashFest! The best players
                        from around Canada meet and clash rackets in epic games to settle the best of the best in the country!</p>
                    </div>
                </div>
            </div>
       
    </div>
            <br></br>
            <div>
            <h2> <u>Join Our Club</u></h2>
            
            <label for="fname">Please enter your email and we will send you the details</label>
            <input className="form-control" type="email" id="EmailInput"/>
                        <button onClick={() => ally('')} >Confirm</button>
                        
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
export default Club

/*
handleSubmit=(e)=>{
    e.preventDefault();
    console.log('form submitted');
  }
*/