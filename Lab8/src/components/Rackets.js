import React from 'react'
import Popup from "reactjs-popup";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function PrintSpecs(id){
    console.log('hey');
    
return null

    
}

function buy(name){
    console.log('hey');
    confirmAlert({
        title: 'Confirm Your Purchase',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });

    //alert(`hello, ${name}`);
    

}












const Rackets=()=>{

   
    
    
    

    return(
        <div className="container">
        <div align="center">
                    <br></br>
            <br></br>
            <a ><img src="https://img.icons8.com/office/48/000000/badminton-racquet.png" style={{width:"30px"}}/><span> <h4>Rackets</h4></span></a>
            </div>
            <div align="right">  <Popup trigger={<button type="button"> ?</button>} position="left center">
                <div align="left"><u>Help</u><br></br>
                    <p align="left"> This page is about our rackets. You can select any racket you want and add it to cart, order it
                    after you fill out your contact, shipping, and payment information. To see racket specifications, click on the prices.</p>
                
                </div>
                </Popup></div>
          
           {/*} {<PrintSpecs name='Calvin'/>}*/}
           

            
            <br></br>
            <br></br>
            <br></br>
            <p><strong>*Click on prices to see specifics*</strong></p>
           
           <div>
           {/*
           
           

            <form> submit button*
            
            <button >Submit</button>
            </form>*/}

            <div className="row">
  <div className="column">
    <img src={ require('./Racket1.png') } style={{width:"100%"}}/>   
     {/*All specifications taken from https://shopbadmintononline.com/badminton-racket-turbocharging-10c-p-2790.html*/}
    <p style={{textAlign:'center'}}>Z-Yonex</p>  
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}    
    
                        
                <Popup trigger={<button type="button"> $144.99</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Green, Blue</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 85-89 grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li>
                
                </div>
                </Popup><button>Add to cart</button>
                        
                        </form>
                        </div>
  </div>
  <div className="column">
    <img src={ require('./Racket2.png') } style={{width:"100%"}}/>
    <p style={{textAlign:'center'}}>RX-ProZEA</p>
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}
                  

                        <Popup trigger={<button type="button"> $2999.99</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Black, Blue</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 88-92 grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li></div>
                </Popup><button>Add to cart</button>
                        </form>
                        </div>
  </div>
  <div className="column">
    <img src={ require('./Racket3.png') } style={{width:"100%"}}/>
    <p style={{textAlign:'center'}}>Lite-340Pro</p>
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}
                       
                        <Popup trigger={<button type="button"> $199.99</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Blue, Yellow</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 90-94grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li></div>
                </Popup><button>Add to cart</button>
                        </form>
                        </div>
  </div>
</div>

<div className="row">
  <div className="column">
    <img src={ require('./Racket4.png') } style={{width:"100%"}}/>
    <p style={{textAlign:'center'}}>5BBXSCQ</p>
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}
                     
                        <Popup trigger={<button type="button"> $75.99</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Black, Red</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 65-69 grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li></div>
                </Popup><button>Add to cart</button>
                        </form>
                        </div>
  </div>
  <div className="column">
    <img src={ require('./Racket5.png') } style={{width:"100%"}}/>
    <p style={{textAlign:'center'}}>ATL-BR6</p>
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}
                       
                        <Popup trigger={<button type="button"> $99.99</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Black, Red</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 70-76 grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li></div>
                </Popup><button>Add to cart</button>
                        </form>
                        </div>
  </div>
  <div className="column">
    <img src={ require('./Racket6.png') } style={{width:"100%"}}/>
    <p style={{textAlign:'center'}}>SBR-Razor</p>
    <div style={{textAlign:'center'}}>
                    <form> {/*Input text and submit button*/}
                        
                        <Popup trigger={<button type="button"> $35.00</button>} position="right center">
                <div><u>Racket Specifications</u><br></br>
                <li>STRINGS: Custom Option - See Above </li>
                <li> CASE: Premium Thermal Included</li>
                <li>  COLOR: Black, Orange</li>
                    <li>  MATERIAL: Military Grade Carbon Fiber</li>
                    <li> WEIGHT: W3 90-95 grams</li>
                    <li> GRIP SIZE: S1, Extra Small 3 1/8"/79.4mm</li>
                    <li> OVERALL LENGTH: 675mm</li>
                    <li> GRIP LENGTH: 200mm</li>
                    <li> BALANCE POINT: 298mm</li>
                    <li> FLEX: Medium Flexible</li>
                    <li> TENSION: Vertical 24-28 lbs, Horizontal 26-30 lbs   </li></div>
                </Popup><button>Add to cart</button>
                        </form>
                        </div>
  </div>
</div>
           

           </div>

           <div>
           <br></br>
           <h1><strong>Checkout</strong></h1>
           
           <h3><p><u>Contact Information</u></p></h3>
           <br></br>
                        <p>Enter Name</p>


                 <div class="col-10">
                                <input className="form-control" type="name"  id="NameInput"/>
                            
                            <br></br>
                            </div>
                            <p>Enter email (example@host.com</p>

                                                                                <div class="col-10">
                                <input className="form-control" type="email" id="EmailInput"/>
                           
                            <br></br>
                            </div>
                                <p>Enter phone number (###-###-####)</p>
                                <div class="col-10">
                                <input className="form-control" type="phone" id="PhoneInput"/>
                            <br></br>
                            <h3><u>Shipment</u></h3>
                            <br></br>
                            <p>Shipping Address</p>
                                <div class="col-10">
                                <input className="form-control" type="text" id="addy" />
                                <br></br>
                                <p>Opt. Address Aditional Information (aprt #, unit) </p>
                                <div class="col-10">
                                <input className="form-control" type="text" id="optaddy" />
                                <br></br>
                                </div>
                                <h3><u>Payment</u></h3>
                                <br></br>
                                <p>Enter credit card number (**** **** **** ****)</p>
                                <div class="col-10">
                                <input className="form-control" type="text" id="creditcard" />
                                <br></br>
                                </div>
                                <p>Enter crv (security code)</p>
                                <div class="col-10">
                                <input className="form-control" type="text" id="creditcardcrv" />
                                <br></br>
                                
                            </div>

                            
           </div>
           <div class="col-10" id="buttocks">
           <button onClick={() => buy('')}>Confirm</button>
  
    </div>
           </div>
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
export default Rackets