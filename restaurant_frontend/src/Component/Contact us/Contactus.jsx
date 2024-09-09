import React from 'react'
import { Grid, Card } from '@mui/material'
import style from "./contact.module.css"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import image from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg"
const Contactus = () => {
  return (
    <Grid container className={style.Contactus}  >
      <Nav />
      <section container className={style.h1} >
        <div><h1>Contact Us</h1></div>
        <section >
          <article  className={style.part1}>

            <div >
              <h3>Phone number</h3>
              <h6>987654321</h6>
            </div>
            <div>
              <h3>Email</h3>
              <h6>nuascan@gmail.com</h6>
            </div>
            <div style={{marginBottom:"100px"}}>
              <h3>Location</h3>
              <h6>Bhubaneswar ,Odisha</h6>
            </div>

          </article>
          <article  className={style.part2}>

            <article className={style.art}>
              <img src={image} alt="" />
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone number' />
            <textarea name="" id="">Booking Details</textarea>
            </article>

          </article>
        </section>
      </section>
      <Footer />
    </Grid>
  )
}

export default Contactus