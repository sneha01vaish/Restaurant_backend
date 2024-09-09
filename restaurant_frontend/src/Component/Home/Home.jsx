import React, { useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

import { Grid, Card } from "@mui/material";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Home = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count == 0) {
            setCount(count)
        }
        else {
            setCount(count - 1);
        }
    };
    const handleIncrement1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        if (count1 == 0) {
            setCount1(count1)
        }
        else {
            setCount1(count1 - 1);
        }
    };
    const handleIncrement2 = () => {
        setCount2(count2 + 1);
    };

    const handleDecrement2 = () => {
        if (count2 == 0) {
            setCount2(count2)
        }
        else {
            setCount2(count2 - 1);
        }
    };
    const handleIncrement3 = () => {
        setCount3(count3 + 1);
    };

    const handleDecrement3 = () => {
        if (count3 == 0) {
            setCount3(count3)
        }
        else {
            setCount3(count3 - 1);
        }
    };
    const handleIncrement4 = () => {
        setCount4(count4 + 1);
    };

    const handleDecrement4 = () => {
        if (count4 == 0) {
            setCount4(count4)
        }
        else {
            setCount4(count4 - 1);
        }
    };
    const handleIncrement5 = () => {
        setCount5(count5 + 1);
    };

    const handleDecrement5 = () => {
        if (count5 == 0) {
            setCount5(count5)
        }
        else {
            setCount5(count5 - 1);
        }
    };

    
    return (
        <div className={style.head}>
            <Nav/>
            
            <div className={style.h1}>
                {/* <h1>Craving Something?........</h1> */}
                <h5 style={{ color: "rgb(17, 67, 7)" }}>Let's get you started !</h5>
                <div className={style.search}>
                    <input type="text" placeholder='Let us know the location' />
                    <button>Search</button>
                </div>
            </div>

            <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={10} className={style.Grid}>
                <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} className={style.Grid1}>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement1} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement1} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://lacaravellerestaurant.fr/wp-content/uploads/42426168.jpg" alt="" width="53%" height="55%" marginTop="20px"  />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Lasagna</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India.jpg" alt="" width="55%" height="55%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Dosa</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement3} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement3} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement4} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement4} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>

                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                    <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
                        <Card style={{ height: "100%", width: "90%", padding: "10px",border: "3px solid green",boxShadow: "0px 0px 20px black",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" width="50%" marginTop="20px" />
                            <Grid style={{ display: "flex", height: "35px", justifyContent: "space-around", alignItems: "center" }}>
                                <h1 style={{ color: "goldenrod", paddingBottom: "-70px", marginTop: "20px" }}>Burger</h1>
                                <Grid style={{height:"100%",width:"40%",marginLeft:"20px",border:"2px solid gold",backgroundColor:"rgba(0, 0, 0, .3)",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-evenly",borderRadius:"5px"}}>
                                <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px" }}>-</button>
                                <span style={{ height: "20px", width: "20px", fontWeight: "700", fontWeight: "700",color:"white" }}>{count2}</span>
                                <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", height: "20px", width: "20px" ,backgroundColor:"rgba(0, 0, 0, .3)",border:"1px solid grey",borderRadius:"3px"}}>+</button>
                                </Grid>
                            </Grid>
                            <h3 style={{ color: "rgb(206, 200, 200)", marginTop: "30px", }}>Price : 200</h3>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            
            <div className={style.footer}>
                <div>
                    <button>Add To Cart</button>
                </div>
                <div>
                    <button>Order Now</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home