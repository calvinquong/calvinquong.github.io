import React from 'react'
import Popup from "reactjs-popup";

const About=()=>{
    return(
        <div className="container">
         <div align="center">
                    <br></br>
            <br></br>
            <a ><img src="https://img.icons8.com/doodle/48/000000/information.png" style={{width:"30px"}}/><span> <h4>About</h4></span></a>
            </div>
            <div align="right">  <Popup trigger={<button type="button"> ?</button>} position="left center">
                <div align="left"><u>Help</u><br></br>
                    <p align="left">This page is about the history of CQ badminton club. Please 
                    feel free to read about anything you'd like about our creation, our awards, and the athletes we've trained. </p>
                
                </div>
                </Popup></div>
            <p>Established in 1990</p>
            <p>Recognized as top 5 club in Canada</p>
            <p>CQ badminton was established in 1999 by Calvin Quong, a former competitive badminton player, with many national titles. Soon after opening,
            ,CQ badminton was one of the top badminton clubs in all of Canada. </p>

            <br></br>

            <div style={{border:"1px solid black", borderWidth:"1px", paddingTop:'20px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px' }}>
            <h5><strong>Club Awards and Accolades</strong></h5>
            <ul>
           <li>2003 National Overall Club Champions</li> 
           <li>2006-2010 National Coaching Group of the Year</li> 
            <li>2008 Provincial Overall Club Champions</li>
           <li>2014 National Coaching Group of the Year</li> 
           <li>2015 National Overall Club Champions</li> 
           <li>2018 National Women's Athlete Title</li> 
           <li>2019 National Men's Athlete Title</li>
            
            </ul>
            </div>
            <br></br>
            <p>Over the years, CQ badminton has trained many top athletes from around the world. Not just badminton atheltes, but UFC and 
            NFL professional athletes. The dedication and attention that the coaches give members is second to none. Vigorous training programs 
            and smart coaching has had a hand in creating some of the most physical specimens known to mankind to this date.</p>
            
            <div style={{border:"1px solid black", borderWidth:"1px", paddingTop:'20px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px' }}>
            <h5><strong>Athletes we've trained:</strong></h5>
            <ul>
           <li>Lee Jing Liang: 5x olympic badminton world men's singles champion</li> 
           <li>Chandler Jones: 4x national badminton junior champion</li> 
            <li>Minny Park: 10x national women's doubles champion</li>
           <li>Barry Sanders: 12x NFL all pro running back</li> 
           <li>Joe Sung: 2x UFC middleweightchampion</li> 
           <li>Taylor Rapp: 5x NFL pro bowler</li> 
            
            </ul>
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
export default About