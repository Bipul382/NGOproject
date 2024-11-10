import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from '../assets/ngo1.jpg'
import Image2 from '../assets/ngo2.jpg'
import Image3 from '../assets/ngo3.jpg'

import Logo from '../assets/logo.png'
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

function Header() {
  return (
    <>
      <section className='banner position-relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide><img className='w-100' src={Image} alt="" />
        <div className='info text-white'>
            <button className='bg-danger text-white'>How you could help</button>
            <h2>We Stand #withRefugees</h2>
            <h1>629,000 People Have pledged their support</h1>
            <div className='gap-3'>
            <button className='caus'>Make Donation</button>
            <button className='caus'>View Causes</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img className='w-100' src={Image2} alt="" />
        <div className='info text-white'>
            <button className='bg-danger text-white'>How you could help</button>
            <h2>We Stand #withRefugees</h2>
            <h1>629,000 People Have pledged their support</h1>
            <div className='gap-3'>
            <button className='caus'>Make Donation</button>
            <button className='caus'>View Causes</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><img className='w-100' src={Image3} alt="" />
        <div className='info text-white'>
            <button className='bg-danger text-white'>How you could help</button>
            <h2>We Stand #withRefugees</h2>
            <h1>629,000 People Have pledged their support</h1>
            <div className='gap-3'>
            <button className='caus'>Make Donation</button>
            <button className='caus'>View Causes</button>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          
        </div>
      </div>
      
      <div className="menubar container align-items-center ">
        <div className="row align-items-center">
            <div className="col-lg-3">
             <Link to={"/"}>
                <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
                <ul className='d-lg-flex list-unstyled gap-5 text-uppercase text-bold fw-bold'>
                  <Link className='' to={"/"}>
                    <li>Home</li></Link>
                    <li>Campaign</li>
                    <li>Features</li>
                    <li>Shortcodes</li>
                    <li>Posttypes</li>
                </ul>
            </div>
            <div className="col-lg-3 d-flex gap-3 align-middle">
                <div>
            <i class="bi bi-search"></i>
            </div>
            <div className='d-flex gap-1'>
            <i class="bi bi-bag-dash"></i>
            <p>0</p>
            </div>
            <button className='bg-danger text-white px-5 fs-5 fw-bold text-uppercase my-1 py-1'>Donate</button>
            </div>
        </div>
      </div>
      
        <div className="involve container d-lg-block d-none">
            <div className="ab row ">
                <div className="dn col-lg-3 py-3">
                 <h4 className=' fs-3 fw-bold'>Donate Now!</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
                <div className="jn col-lg-3 py-3">
                <h4 className=''>Join Us Now</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
                <div className="gn col-lg-3 py-3">
                <h4 className=''>Get Involved</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
            </div>

      </div>
      <div className="container d-lg-none d-block">
            <div className="ab row ">
                <div className="dn col-lg-3 py-3">
                 <h4 className=' fs-3 fw-bold'>Donate Now!</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
                <div className="jn col-lg-3 py-3">
                <h4 className=''>Join Us Now</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
                <div className="gn col-lg-3 py-3">
                <h4 className=''>Get Involved</h4>
                 <p className='py-3'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed</p>
                 <button className='bg-transparent text-white'>Read More</button>
                </div>
            </div>

      </div>
      </section>
      
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </>
  )
}

export default Header
