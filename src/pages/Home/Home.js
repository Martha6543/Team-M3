import React, { Fragment } from 'react';
import "./Home.css";
//import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import 'bulma/css/bulma.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';


function Index (){
    return( <Fragment>



<header className="hero-section">
<div className="content">
<img src="img/One.png" className="logo" alt=""/>
<p className="sub-heading">best sport shoes collection of all time</p>
</div>
</header>

<section className="product">
<h2 className="product-category">best selling</h2>
<div className="product-container">

<div className="product-card">
<div className="product-image">
<span className="discount-tag">35% off</span>
<img src="https://wallpapercave.com/wp/4jv11ON.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Gym Shoe</h2>
<p className="product-short-des">    </p>
<span className="price">$120</span><span className="actual-price">$40</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">30% off</span>
<img src="https://wallpapercave.com/wp/ZqJ3XLB.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Walking shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$200</span><span className="actual-price">$60</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">15% off</span>
<img src="img/Shoe9.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Running shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$850</span><span className="actual-price">$120</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">10% off</span>
<img src="img/Shoe4.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Tennis Shoe</h2>
<p className="product-short-des">   </p>
<span className="price">$340</span><span className="actual-price">$40</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">20% off</span>
<img src="img/Shoe5.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Trail Running Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$600</span><span className="actual-price">$100</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">11% off</span>
<img src="img/Shoe6.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Cross Trainer Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$750</span><span className="actual-price">$60</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">25% off</span>
<img src="img/Shoe7.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Hiking Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$200</span><span className="actual-price">$50</span>
</div>
</div>

</div>
</section>

<div className="categories">

    <h1>Shop by Category</h1>

    <div className="slider">

      

 <Slider

  dots={true}

  infinite={true}

  speed={500}

  slidesToShow={1}

  slidesToScroll={1}

  autoplay={true}>

  <div>

   <a href='/tennis'>

    <img src="tennis banner.jpg" alt="Slider" />

   </a>

  </div>

  <div>

   <a href='/football'>

    <img src="football banner.jpg" alt="Slider" />

   </a>

  </div>

  <div>

   <a href='/climbing'>

    <img src="climbing banner.jpg" alt="Slider" />

   </a>

  </div>

  <div>

   <a href='/running'>

    <img src="running banner.jpg" alt="Slider" />

   </a>

  </div>

  <div>

   <a href='/hiking'>

    <img src="hiking banner.jpg" alt="Slider" />

   </a>

  </div>

 </Slider>

</div>

</div>


<section className="product">
<h2 className="product-category">best selling</h2>
<div className="product-container">

<div className="product-card">
<div className="product-image">
<span className="discount-tag">35% off</span>
<img src="https://wallpapercave.com/wp/4jv11ON.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Gym Shoe</h2>
<p className="product-short-des">    </p>
<span className="price">$120</span><span className="actual-price">$40</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">30% off</span>
<img src="https://wallpapercave.com/wp/ZqJ3XLB.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Walking shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$200</span><span className="actual-price">$60</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">15% off</span>
<img src="img/Shoe9.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Running shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$850</span><span className="actual-price">$120</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">10% off</span>
<img src="img/Shoe4.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Tennis Shoe</h2>
<p className="product-short-des">   </p>
<span className="price">$340</span><span className="actual-price">$40</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">20% off</span>
<img src="img/Shoe5.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Trail Running Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$600</span><span className="actual-price">$100</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">11% off</span>
<img src="img/Shoe6.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Cross Trainer Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$750</span><span className="actual-price">$60</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">25% off</span>
<img src="img/Shoe7.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Hiking Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$200</span><span className="actual-price">$50</span>
</div>
</div>

</div>
</section>
<section className="product">
<h2 className="product-category">best selling</h2>
<div className="product-container">

<div className="product-card">
<div className="product-image">
<span className="discount-tag">35% off</span>
<img src="https://wallpapercave.com/wp/4jv11ON.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Gym Shoe</h2>
<p className="product-short-des">    </p>
<span className="price">$120</span><span className="actual-price">$40</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">30% off</span>
<img src="https://wallpapercave.com/wp/ZqJ3XLB.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Walking shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$200</span><span className="actual-price">$60</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">15% off</span>
<img src="img/Shoe9.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Running shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$850</span><span className="actual-price">$120</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">10% off</span>
<img src="img/Shoe4.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Tennis Shoe</h2>
<p className="product-short-des">   </p>
<span className="price">$340</span><span className="actual-price">$40</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">20% off</span>
<img src="img/Shoe5.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Trail Running Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$600</span><span className="actual-price">$100</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">11% off</span>
<img src="img/Shoe6.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Cross Trainer Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$750</span><span className="actual-price">$60</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">25% off</span>
<img src="img/Shoe7.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Hiking Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$200</span><span className="actual-price">$50</span>
</div>
</div>

</div>
</section>
<section className="product">
<h2 className="product-category">best selling</h2>
<div className="product-container">

<div className="product-card">
<div className="product-image">
<span className="discount-tag">35% off</span>
<img src="https://wallpapercave.com/wp/4jv11ON.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Gym Shoe</h2>
<p className="product-short-des">    </p>
<span className="price">$120</span><span className="actual-price">$40</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">30% off</span>
<img src="https://wallpapercave.com/wp/ZqJ3XLB.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Walking shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$200</span><span className="actual-price">$60</span>
</div>
</div>

<div className="product-card">
<div className="product-image">
<span className="discount-tag">15% off</span>
<img src="img/Shoe9.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Running shoe</h2>
<p className="product-short-des">  </p>
<span className="price">$850</span><span className="actual-price">$120</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">10% off</span>
<img src="img/Shoe4.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Tennis Shoe</h2>
<p className="product-short-des">   </p>
<span className="price">$340</span><span className="actual-price">$40</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">20% off</span>
<img src="img/Shoe5.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Trail Running Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$600</span><span className="actual-price">$100</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">11% off</span>
<img src="img/Shoe6.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Cross Trainer Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$750</span><span className="actual-price">$60</span>
</div>
</div>
<div className="product-card">
<div className="product-image">
<span className="discount-tag">25% off</span>
<img src="img/Shoe7.jpg" className="product-thumb" alt=""/>
</div>
<div className="product-info">
<h2 className="product-brand">Hiking Shoe</h2>
<p className="product-short-des">a short line about the shoe..</p>
<span className="price">$200</span><span className="actual-price">$50</span>
</div>
</div>

</div>
</section>


</Fragment>
    )
}
export default Index;