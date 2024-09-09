import React from 'react'
import { Grid, Card } from '@mui/material';
import style from "./portfolio.module.css"
import Nav from "../Nav/Nav"

import Footer from '../Footer/Footer';

const Portfolio = () => {
  return (
    <Grid className={style.Aboutus}>
      <Nav />
      <div className={style.h1}>
        <h1>PORTFOLIO</h1>
        <hr />
      </div>
      <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={10} className={style.Grid}>
        <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} className={style.Grid1}>
          <Grid item  sm={6} textAlign="center" className={style.secson} height={"500px"}>
            <Card style={{ height: "100%", width: "90%", padding: "30px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chanwalrus-941861.jpg&fm=jpg" alt="" width="53%" height="55%" marginTop="50px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "70px" }}>Fine diner</h1>
                <Grid style={{ height: "50px", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "90px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button  style={{ color: "white", fontWeight: "700", height: "80px", width: "80%", backgroundColor: "transparent",border:"none",fontSize:"20px" }}>See more</button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson1}  height={"250px"}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="" width="60%" height="60%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "60px", fontSize:"20px" ,width:"55%"}}>Delicious food</h1>
                <Grid style={{ height: "50px", width: "45%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "60px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button  style={{ color: "white", fontWeight: "700", height: "80px", width: "100%", backgroundColor: "transparent",border:"none",fontSize:"18px" }}>See more</button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson2} height={"250px"}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://media.istockphoto.com/id/1169950748/photo/hands-of-man-and-woman-eating-meal-at-table.jpg?s=612x612&w=0&k=20&c=fHUqTRXQYeOx5IOoEwfvYgMVkah9_661sEFp9zCw0Dw=" alt="" width="53%" height="55%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "70px", fontSize:"23px"}}>Fine diner</h1>
                <Grid style={{ height: "50px", width: "45%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "80px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button  style={{ color: "white", fontWeight: "700", height: "80px",width: "100%", backgroundColor: "transparent",border:"none",fontSize:"18px"}}>See more</button>
                </Grid>
              </Grid>
1            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson3} height={"250px"} marginLeft={"345px"} marginTop={"-270px"}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" width="53%" height="55%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "70px", fontSize:"23px" }}>Fine diner</h1>
                <Grid style={{ height: "50px", width: "45%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "80px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button  style={{ color: "white", fontWeight: "700", height: "80px", width: "100%", backgroundColor: "transparent",border:"none",fontSize:"18px"}}>See more</button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson4} height={"250px"} marginLeft={"1030px"} marginTop={"-270px"}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxNS1oZWxlbmFsLTc3LmpwZw.jpg" alt="" width="53%" height="55%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "70px", fontSize:"23px" }}>Fine diner</h1>
                <Grid style={{ height: "50px", width: "45%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "80px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button  style={{ color: "white", fontWeight: "700", height: "80px", width: "100%", backgroundColor: "transparent",border:"none",fontSize:"18px" }}>See more</button>
                </Grid>
              </Grid>
              
            </Card>
          </Grid>
          
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

export default Portfolio