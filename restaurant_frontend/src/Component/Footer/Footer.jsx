import React, { useState } from 'react';
import style from './footer.module.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Subscribed with email: ${email}");
        setEmail('');
    };

    return (
        <footer className={style.footercontainer}>
            <div className={style.footertop}>
                {/* <div className={style.footersection}>
                    <h3>Our Top Cities</h3>
                    <div className={style.cities}>
                        <ul>
                            <li>San Francisco</li>
                            <li>Miami</li>
                            <li>San Diego</li>
                            <li>East Bay</li>
                            <li>Long Beach</li>
                        </ul>
                        <ul>
                            <li>Los Angeles</li>
                            <li>Washington DC</li>
                            <li>Seattle</li>
                            <li>Portland</li>
                            <li>Nashville</li>
                        </ul>
                        <ul>
                            <li>New York City</li>
                            <li>Orange County</li>
                            <li>Atlanta</li>
                            <li>Charlotte</li>
                            <li>Denver</li>
                        </ul>
                        <ul>
                            <li>Chicago</li>
                            <li>Phoenix</li>
                            <li>Las Vegas</li>
                            <li>Sacramento</li>
                            <li>Oklahoma City</li>
                        </ul>
                        <ul>
                            <li>Columbus</li>
                            <li>New Mexico</li>
                            <li>Albuquerque</li>
                            <li>New Orleans</li>
                        </ul>
                    </div>
                </div> */}
{/* <hr style={{marginLeft:"10%"}}/> */}
                <div className={style.footerpart}>
                    <div className={style.footersection}>
                        <h3>Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className={style.footersection}>
                        <h3>Contact</h3>
                        <ul>
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul>
                    </div>

                    <div className={style.footersection}>
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div className={style.footersection}>
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                           
                        </ul>
                    </div>
                </div>
            </div>

            <div className={style.footersocial}>
                <span>Follow Us:</span>
                <div className={style.socialicons}>
                    <FacebookIcon/>
                    <InstagramIcon />
                    <TwitterIcon/>
                    
                </div>
            </div>

            <div className={style.footersubscribe}>
                <p>Receive exclusive offers and discounts in your mailbox</p>
                <form onSubmit={handleSubscribe} className={style.subscribeform}>
                   <div className={style.inputs}>
                   <EmailIcon/><input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                   </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <hr style={{marginLeft:"10%",marginTop:"10px"}}/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10%",marginTop:"10px"}}>
                <p>All rights Reserved @ Nua Scan,2024</p>
                <p>Made with <FavoriteIcon style={{"color":"orange"}}/> by <span style={{fontWeight:"600"}}>Geinca</span></p>
            </div>

        </footer>
    );
};

export default Footer;

// import React from 'react'
// import style from "./footer.module.css"
// import { Link } from 'react-router-dom'
// import { colors, Grid } from '@mui/material'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import XIcon from '@mui/icons-material/X';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import image from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg"

// const Footer = () => {
//   return (
//     <Grid className={style.Footer}>
//         <img src={image} alt="" style={{height:"40px",width:"3%",marginLeft:"100px",border:"2px solid gold"}}/>
//         <h1>NuaScan</h1>
//         <p>Copyright© 2024 NuaScan</p>
        
//         <Grid className={style.icon}>
//             <FacebookIcon style={{color:"blue",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
//             <InstagramIcon style={{color:"rgb(255, 0, 106)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
//             <LinkedInIcon style={{color:"rgb(0, 157, 255)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
//             <YouTubeIcon style={{color:"red",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
//             <XIcon style={{color:"rgb(4, 109, 174)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
//         </Grid>
//     </Grid>
//   )
// }

// export default Footer