import React from 'react'
import style from "./footer.module.css"
import { Link } from 'react-router-dom'
import { colors, Grid } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import image from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg"

const Footer = () => {
  return (
    <Grid className={style.Footer}>
        <img src={image} alt="" style={{height:"40px",width:"3%",marginLeft:"100px",border:"2px solid gold"}}/>
        <h1>NuaScan</h1>
        <p>Copyright© 2024 NuaScan</p>
        
        <Grid className={style.icon}>
            <FacebookIcon style={{color:"blue",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
            <InstagramIcon style={{color:"rgb(255, 0, 106)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
            <LinkedInIcon style={{color:"rgb(0, 157, 255)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
            <YouTubeIcon style={{color:"red",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
            <XIcon style={{color:"rgb(4, 109, 174)",border:"1px solid white",backgroundColor:"white"}} className={style.icon1}/>
        </Grid>
    </Grid>
  )
}

export default Footer