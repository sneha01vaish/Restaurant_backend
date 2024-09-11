import React from 'react'
import style from "./nav.module.css"
import { Link } from 'react-router-dom'
import image from '../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg'
// import { Grid } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body sticky-top" data-navbar-on-scroll="data-navbar-on-scroll">
    <div className="container">
        <Link className="navbar-brand d-inline-flex" to="/"><img className="d-inline-block" src={image} alt="logo" width='50' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse bg-white border-lg-0 my-2 mt-lg-0 d-flex justify-content-between" id="navbarSupportedContent">
            <div className="pt-lg-0 d-block d-lg-none d-xl-block">
                <p className="mb-0 fw-bold text-lg-center">Deliver to: <i className="fas fa-map-marker-alt text-warning mx-2"></i><span className="fw-normal">Current Location </span><span>Mirpur 1 Bus Stand, Dhaka</span></p>
            </div>
            <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
                <div className={style.inputGroupIcon}>
                    <input className={style.searchForm} type="text" placeholder="Search Food" aria-label="Search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>&nbsp;&nbsp;
                <button className="btn btn-outline-secondary bg-white shadow-warning text-warning" type="submit"> <i className="fas fa-user me-2"></i><Link to='/signin' className={style.signIn}>Login</Link></button>
            </form>
        </div>
    </div>
</nav>
    // <Grid className={style.nav}>
    //             <img src={image} alt="" />
    //             <Grid className={style.list}>
    //                 <ol>
    //                     <li><Link to={"/"} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Home</Link></li>
    //                     <li><Link to={'/aboutus'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>About us</Link></li>
    //                     <li><Link to={'/ourpartner'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Our partner</Link></li>
    //                     <li><Link to={'/portfolio'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Portfolio</Link></li>
    //                     <li><Link to={'/contactus'} style={{ textDecoration: "none", color: "rgb(141, 253, 221)" }}>Contact us</Link></li>
    //                 </ol>
    //             </Grid>
    //             <select name="" id="" onChange={handelValue}>
    //                 <option value="">Select</option>
    //                 <option value="signup" style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>signup</option>
    //                 <option value="signin" style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>Signin</option>
    //             </select>
    //         </Grid>
  )
}

export default Nav