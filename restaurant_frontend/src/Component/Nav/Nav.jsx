import React from 'react'
import style from "./nav.module.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import image from '../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg'
import { Grid } from '@mui/material'

const Nav = () => {
    const [value, setValue] = useState('')
    const handelValue = (event) => {
        const value = event.target.value
        setValue(value)
        if (value == "signin") {
            window.location.href = "/signin"
        }
        else if (value == "signup") {
            window.location.href = "/signup"
        }
    }
  return (
    <Grid className={style.nav}>
                <img src={image} alt="" />
                <Grid className={style.list}>
                    <ol>
                        <li><Link to={"/"} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Home</Link></li>
                        <li><Link to={'/aboutus'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>About us</Link></li>
                        <li><Link to={'/ourpartner'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Our partner</Link></li>
                        <li><Link to={'/portfolio'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Portfolio</Link></li>
                        <li><Link to={'/contactus'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Contact us</Link></li>
                    </ol>
                </Grid>
                <select name="" id="" onChange={handelValue}>
                    <option value="">Select</option>
                    <option value="signup" style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>signup</option>
                    <option value="signin" style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>Signin</option>
                </select>
            </Grid>
  )
}

export default Nav