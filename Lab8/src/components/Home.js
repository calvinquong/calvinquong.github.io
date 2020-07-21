import React from 'react'
import Popup from "reactjs-popup";
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'


import Rackets from './Rackets'


function TakeMeToRackets(name){
    console.log('hey');
   
   // alert(`hello, ${name}`);
    //this.setState({ redirect: "/racket" })
   

   

}

const Home=()=>{

    

   
    return(
        <div className="container">
            <div align="center">
            <br></br>
            <br></br>
            <a ><img src="https://img.icons8.com/fluent/48/000000/home.png" style={{width:"30px"}}/><span> <h4>Home</h4></span></a>
            </div>
            <div align="right">  <Popup trigger={<button type="button"> ?</button>} position="left center">
                <div align="left"><u>Help</u><br></br>
                    <p align="left"> Welcome to CQ badminton's homepage. Feel free to explore
                    and navigate anywehre you want. Use the navigation bar to visit other pages. 
                    Click the image to be directed to our rackets! Below you can contact us or read 
                    the news and updates section! Have fun and thank you for visiting our website!</p>
                
                </div>
                </Popup></div>
            <br></br>
            <br></br>
            <p style={{fontSize: "40px"}}>Weekly Deals</p>
            <hr></hr>
            
            <div style={{border:"1px solid black", borderWidth:"1px"}}>
            <Link to="/rackets"><img style={{ height: '100%', width: '100%'}} src={ require('./sale.png')}  /></Link> {/* Image taken from https://shopbadmintononline.com/ */}
               {/* <Link to="/rackets">Take me to rackets</Link>*/}
                
                    
            </div>

            <br></br>
            <br></br>
            <p style={{fontSize: "40px"}}>News and Updates</p>
            <hr></hr>
            
            <div style={{border:"1px solid black", borderWidth:"1px", paddingTop:'20px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px' }}>
            We are asking all members of our staff and customers who enter our store or facility to <strong>please wear a mask.</strong> 
            Covid-19 is no joke and we want to keep our people in our community safe and healthy. Masks help prevent the spread of the virus
            not only by protecting the user from virus particles, but also filtering out any virus particles from the user themselves if they are asymptomatic.
            Covid-19 is one of most infectious viruses known to this date. Please prevent the spread and we can all go back to normal in a short while. Thank you
            for your cooperation. 
            
            <br></br>
            Our store hours will be from <strong>10am-6pm </strong>from now on until the pandemic has subsided. Sorry for any inconvinience.
            Club times will still remain the same, but members are asked to wear gloves and masks while on and off the courts, and please refrain from high-fiving one another.
           
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
export default Home

