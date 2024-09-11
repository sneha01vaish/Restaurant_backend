import React from 'react'
import { Grid, Card } from "@mui/material";

const Work = () => {
    const data =[
        {src:"https://static.vecteezy.com/system/resources/thumbnails/011/384/459/small_2x/travel-map-pin-sign-location-icon-vector.jpg",title:"Select Location",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRC-uciAtoaVdk5jfwmala0ZanNuSHiHkobwgK9dU3hyBQqGhXQ",title:"Select Location",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfg1YfcY375FuwjZBa9GfI9K0LiM_dSpsLojOSV1L9Ozxi05ga",title:"Select Location",details:"Choose the location where your food will be delivered."},
        {src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyk693ddooPTPbYh6B9CS9AHuRccNgzM5TCt7JzKuufJOGDxKY",title:"Select Location",details:"Choose the location where your food will be delivered."},
    ]
    
    return (

        <Grid container direction="column" justifyContent="space-between" textAlign="center" alignItems="center" style={{padding:'10px 60px'}}>

            <Grid item>
                <h3 style={{ color:"#41B9FC", fontSize: "2.5rem" }}>How does it work</h3>
            </Grid>

            <Grid container lg={12} sm={12} direction="row" alignItems="center" justifyContent="center" spacing={6} textAlign="center" p={5}>
                {data.map((item, index) => (
                    <Grid item lg={3} sm={6} textAlign="center" key={index}>
                        <Card style={{textAlign:"center",padding:"10px",borderRadius:'10px'}}>
                            <img src={item.src} alt=""  style={{ justifyContent: "center", width: "100px",height:'100px' }} />
                            <h2 style={{marginTop:"10px"}}>{item.title}</h2>
                            <p style={{  fontSize: "16px", textAlign: "center", fontStyle:"normal",marginTop:"10px", color: "grey" }}>{item.details}</p>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Work
