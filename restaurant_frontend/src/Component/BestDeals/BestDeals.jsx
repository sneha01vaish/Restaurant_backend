import React from "react";
import style from './BestDeals.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function BestDeals() {
    return (
        <div className={style.dealcontainer}>
            <div className={style.dealcontent}>
                <h2>
                    Best deals <span className={style.highlight}>Crispy<br /> Sandwiches</span>
                </h2>
                <p>
                    Enjoy the large size of sandwiches. Complete your meal with the perfect
                    slice of sandwiches.
                </p>
                <button className={style.orderbutton}>PROCEED TO ORDER <ArrowForwardIosIcon style={{"marginLeft":"10px"}}/></button>
            </div>
            <div className={style.dealimage}>
                <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_QpTTiX2NBYqBNVbMhtTtwiwD6TeCX3OQgDZYLP_vGrjWlGYq"
                    alt="Crispy Sandwich"
                />
            </div>
        </div>
    );
}

export default BestDeals;