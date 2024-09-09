import React from 'react'
import style from "./ourpartner.module.css"
import { Grid, Card } from '@mui/material';
import Nav from "../Nav/Nav"
import Footer from '../Footer/Footer';

const Ourpartner = () => {
  return (
    <Grid className={style.Aboutus}>
      <Nav />
      <div className={style.h1}>
        <h1>OUR PARTNER</h1>
        <hr />
      </div>
      <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={10} className={style.Grid}>
        <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} className={style.Grid1}>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                <Grid style={{ height: "100%", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button style={{ color: "white", fontWeight: "700", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "3px" }}>Read more</button>
                  
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://lacaravellerestaurant.fr/wp-content/uploads/42426168.jpg" alt="" width="53%" height="55%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                <Grid style={{ height: "100%", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button style={{ color: "white", fontWeight: "700", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "3px" }}>Read more</button>
                  
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India.jpg" alt="" width="55%" height="55%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                <Grid style={{ height: "100%", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button style={{ color: "white", fontWeight: "700", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "3px" }}>Read more</button>
                  
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                <Grid style={{ height: "100%", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button style={{ color: "white", fontWeight: "700", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "3px" }}>Read more</button>
                  
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
            <Card style={{ height: "100%", width: "90%", padding: "10px", border: "3px solid green", boxShadow: "0px 0px 20px black", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
              <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                <Grid style={{ height: "100%", width: "40%", marginLeft: "20px", border: "2px solid gold", backgroundColor: "rgba(0, 0, 0, .3)", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px" }}>
                  <button style={{ color: "white", fontWeight: "700", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "3px" }}>Read more</button>
                  
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

export default Ourpartner