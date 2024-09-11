import React from "react";
import style from "./FeaturedItems.module.css"; // Import the CSS file
import DiscountIcon from '@mui/icons-material/Discount';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import restaurants from './featuredData.js';

const FeaturedItems = () => {
    return (
        <div className={style.container}>
            <div className={style.featuredcontainer}>
                <h2>Featured Restaurants</h2>
                <div className={style.restaurantgrid}>
                {
                  restaurants.map((restaurant, index) => 
                      
                        <div key={index} className={style.restaurantcard}>
                            <div className={style.imagewrapper}>
                                <img src={restaurant.img} alt={restaurant.name} />
                                <div className={style.discountbadge}><DiscountIcon className={style.icon} />{restaurant.discount}</div>
                                {restaurant.fastDelivery && <div className={style.fastbadge}><WatchLaterIcon className={style.icon} />Fast</div>}
                            </div>
                            <div className={style.contain}>
                                <div className={style.logo}>
                                    <img src={restaurant.log} alt="" />
                                </div>
                                <div>
                                    <h3>{restaurant.name}</h3>
                                    <div className={style.restaurantrating}>⭐ {restaurant.rating}</div>

                                </div>
                            </div>
                            <div className={style.statusbadge}>{restaurant.status}</div>
                        </div>
                    )}
                </div>
                
                <button className={style.viewallbtn}>View All<KeyboardArrowRightIcon className={style.icons} /></button>
            </div>
        </div>
    );
};

export default FeaturedItems;
