import React from 'react'
import style from "./aboutus.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Aboutus = () => {
    return (
       
        <Grid className={style.Aboutus}>
             <Nav/>

            <Grid className={style.h1}>
                <h1>ABOUT US</h1>
                <Grid className={style.icon}>
                    <FacebookIcon style={{ color: "blue", border: "1px solid white", backgroundColor: "white" }} className={style.icon1} />
                    <InstagramIcon style={{ color: "rgb(255, 0, 106)", border: "1px solid white", backgroundColor: "white" }} className={style.icon1} />
                    <LinkedInIcon style={{ color: "rgb(0, 157, 255)", border: "1px solid white", backgroundColor: "white" }} className={style.icon1} />
                    <YouTubeIcon style={{ color: "red", border: "1px solid white", backgroundColor: "white" }} className={style.icon1} />
                    <XIcon style={{ color: "rgb(4, 109, 174)", border: "1px solid white", backgroundColor: "white" }} className={style.icon1} />
                </Grid>
                
            </Grid>
            <Grid container sx={12}  paddingRight="10%" paddingLeft="10%" className={style.secson1}>
                <Grid sx={6} className={style.text}>
                    <h3>NUASCAN</h3>
                    <hr style={{ width: "80%", color:"grey" ,height:"5px",backgroundColor:"rgb(243, 213, 40)",border:"none"}} />
                    <p>
                        <h5>Welcome to <span>Nuascan </span>restaurant with a focus on premium food taster</h5>
                        we invite you to celebrate our restaurant delicious recipes whether you are here for a business branch or dianer . discover new teates and inspired recipes from all over the world. 
                    </p>
                    <button>Read More <ArrowForwardIcon/></button>
                </Grid>
                
                <Grid sx={6} className={style.img} paddingBottom="3%">
                        <div>
                        <img src="https://img.freepik.com/premium-photo/male-chef-plating-food-plate-while-working-commercial-kitchen_763111-6618.jpg" alt="" />
                        </div>
                </Grid>

            </Grid>

            <Grid container sx={12}  paddingRight="10%" paddingLeft="10%" className={style.secson1}>
                                
                <Grid sx={6} className={style.img} paddingBottom="3%">
                        <div>
                        <img src="https://www.jrenders.com/wp-content/uploads/2017/03/Birthday-Parties.png" alt="" />
                        </div>
                </Grid>
                <Grid sx={6} className={style.text} paddingLeft="2%">
                    <h3>BIRTH DAY</h3>
                    <hr style={{ width: "80%", color:"grey" ,height:"5px",backgroundColor:"rgb(243, 213, 40)",border:"none"}} />
                    <p>
                        <h5>Welcome to <span>Nuascan </span>restaurant with a focus on premium food taster</h5>
                        we invite you to celebrate our restaurant delicious recipes whether you are here for a business branch or dianer . discover new teates and inspired recipes from all over the world. 
                    </p>
                    <button>Read More <ArrowForwardIcon/></button>
                </Grid>

            </Grid>

            <Grid container sx={12}  paddingRight="10%" paddingLeft="10%" className={style.secson1}>
                <Grid sx={6} className={style.text}>
                    <h3>Festive foods</h3>
                    <hr style={{ width: "80%", color:"grey" ,height:"5px",backgroundColor:"rgb(243, 213, 40)",border:"none"}} />
                    <p>
                        <h5>Welcome to <span>Nuascan </span>restaurant with a focus on premium food taster</h5>
                        we invite you to celebrate our restaurant delicious recipes whether you are here for a business branch or dianer . discover new teates and inspired recipes from all over the world. 
                    </p>
                    <button>Read More <ArrowForwardIcon/></button>
                </Grid>
                
                <Grid sx={6} className={style.img} paddingBottom="3%">
                        <div>
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzJsdgnsdEKq2lgChWgq-x0SXS6Yt4uOlTQmbj2F0uwG4zpyGy7NiH1hhyphenhyphentDck4sU1e1Uj-hEGIrUFCfvCRsubthk6tvAQhrL1D6TwvIgunz0XLEKZRKRN_0kXagaVaPv0PX-6-ywbKQE-/s1600/Spread.jpg" alt="" />
                        </div>
                </Grid>

            </Grid>

            <Grid container sx={12}  paddingRight="10%" paddingLeft="10%" className={style.secson1}>
                                
                <Grid sx={6} className={style.img} paddingBottom="3%">
                        <div>
                        <img src="https://b.zmtcdn.com/data/reviews_photos/fa8/9842e5a0636fca9a716d8df9d5e21fa8_1583667398.jpg?fit=around|960:500&crop=960:500;*,*" alt=""  />
                        </div>
                </Grid>
                <Grid sx={6} className={style.text} paddingLeft="2%">
                    <h3>Summer special food</h3>
                    <hr style={{ width: "80%", color:"grey" ,height:"5px",backgroundColor:"rgb(243, 213, 40)",border:"none"}} />
                    <p>
                        <h5>Welcome to <span>Nuascan </span>restaurant with a focus on premium food taster</h5>
                        we invite you to celebrate our restaurant delicious recipes whether you are here for a business branch or dianer . discover new teates and inspired recipes from all over the world. 
                    </p>
                    <button style={{marginBottom:"20px"}}>Read More <ArrowForwardIcon/></button>
                </Grid>

            </Grid>
            <Grid container sx={12}  paddingRight="10%" paddingLeft="10%"  className={style.secson1}>
                <Grid sx={6} className={style.text}>
                    <h3>Dessert</h3>
                    <hr style={{ width: "80%", color:"grey" ,height:"5px",backgroundColor:"rgb(243, 213, 40)",border:"none"}} />
                    <p>
                        <h5>Welcome to <span>Nuascan </span>restaurant with a focus on premium food taster</h5>
                        we invite you to celebrate our restaurant delicious recipes whether you are here for a business branch or dianer . discover new teates and inspired recipes from all over the world. 
                    </p>
                    <button>Read More <ArrowForwardIcon/></button>
                </Grid>
                
                <Grid sx={6} className={style.img} paddingBottom="3%">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QVI-oyu4dctoalPKeutM5vtL9gxG7-xkBg&s" alt="" />
                        </div>
                </Grid>

            </Grid>

        <Footer/>
        </Grid>
    )
}

export default Aboutus