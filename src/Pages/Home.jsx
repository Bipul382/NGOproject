import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Ref1 from '../assets/ban.jpg'
import Ref2 from '../assets/ban2.jpg'
import Ref3 from '../assets/ban1.jpg'
import Sli from '../assets/slider.jpg'
import Sli1 from '../assets/slider1.jpg'
import Sli2 from '../assets/slider2.jpg'
import Sli3 from '../assets/slider3.jpg'
import Sli4 from '../assets/slider4.jpg'
import Char from '../assets/char.jpg'
import Char1 from '../assets/char1.jpg'
import Char2 from '../assets/char2.jpg'
import Char3 from '../assets/char3.jpg'
import Prop from '../assets/prop.jpg'
import Prop1 from '../assets/prop1.jpg'
import Prop2 from '../assets/prop2.jpg'
import Prop3 from '../assets/prop3.jpg'
import Prop5 from '../assets/prop5.jpg'
import Prop4 from '../assets/prop4.jpg'
import Resc1 from '../assets/resc1.jpg'
import Resc2 from '../assets/resc2.jpg'
import Resc3 from '../assets/resc3.jpg'
import Resc4 from '../assets/resc4.jpg'
import Don1 from '../assets/don1.jpg'
import Don2 from '../assets/don2.jpg'
import Don3 from '../assets/don3.jpg'
import Don4 from '../assets/don4.jpg'
import Spon1 from '../assets/spon1.png'
import Spon2 from '../assets/spon2.png'
import Spon3 from '../assets/spon3.png'
import Spon4 from '../assets/spon4.png'
import Spon5 from '../assets/spon5.png'

function Home() {
  return (
    <div>
      <div className='story container border pb-3 lg:w-50'>
          <h5 className='bg-secondary d-inline-block my-5 px-2'>
           Story About Us</h5>
          <h2 className='text-danger'>EVERYONE. EVERYWHERE. EQUAL VALUE.</h2>
          <p className='par my-4'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          <a className='text-danger py-5 mb-2' href="">Learn More...</a>
      </div>
      <div className="numbers container p-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className='fs-[50px]'>468</h1>
            <h5>Successful Projects</h5>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo</p>
          </div>
          <div className="col-lg-3">
            <h1>1534</h1>
            <h5>People Impacted</h5>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo</p>
          </div>
          <div className="col-lg-3">
            <h1>$14432
            </h1>
            <h5>Money Donated</h5>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo</p>
          </div>
          <div className="col-lg-3">
            <h1>$189</h1>
            <h5>Total Volunteers</h5>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo</p>
          </div>
        </div>
      </div>
      <section className='refugee'>
        <div className=''>
          <img className='photo' src={Ref1} alt="" />
        </div>
        <div className='refugee1'>
          <img src={Ref2} alt="" />
        </div>
        <div className="inn container position-absolute z-index-5">
          <div className="row align-items-center">
            <div className="col-lg-4">
               <img className='ph' src={Ref3} alt="" />
            </div>
            <div className="col-lg-4">
              <h5>$7220 to go</h5>
              <h3>Syrian Refugee Crisis</h3>
              <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis.</p>
              <h3>Donate Now !</h3>
            </div>
            <div className="col-lg-4">
            <h1> 70 <sup>%</sup></h1>
            <h3>Donated</h3>
            </div>
          </div>
        </div>
      </section>
      <div className="container text-center my-5 d-none d-lg-block">
        <h5 className='bg-secondary d-inline-block px-2 text-white'>Story about us</h5>
        <h2 className='text-uppercase'>Our Causes</h2>
         <div className='py-4'>
         <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli} alt="" />
          <h5 className='text-danger'>Refugees and Migrants in Serbia</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 26%</h5>
          <progress className='bg-warning' value="26" max="100"></progress>
          <p>$3300 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli1} alt="" />
          <h5 className='text-danger'>Desperate for Shelter and Clean Water</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 66%</h5>
          <progress className='bg-warning' value="66" max="100"></progress>
          <p>$4680 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli2} alt="" />
          <h5 className='text-danger'>Preparing to help American Refugees</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 18%</h5>
          <progress className='bg-warning' value="18" max="100"></progress>
          <p>$3650 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli3} alt="" />
          <h5 className='text-danger'>Burundian Refugees in the DR Congo</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 31%</h5>
          <progress className='bg-warning' value="31" max="100"></progress>
          <p>$2200 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli4} alt="" />
          <h5 className='text-danger'>Donate to our good causes</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 48%</h5>
          <progress className='bg-warning' value="48" max="100"></progress>
          <p>$1800 to go</p>
        </SwiperSlide>
      </Swiper>
         </div>
      </div>

      <div className="d-lg-none container text-center my-5 col-lg-12 w-[100%]">
        <h5 className='bg-secondary d-inline-block px-2 text-white'>Story about us</h5>
        <h2 className='text-uppercase'>Our Causes</h2>
         <div className='py-4 w-[100%]'>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli} alt="" />
          <h5 className='text-danger'>Refugees and Migrants in Serbia</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 26%</h5>
          <progress className='bg-warning' value="26" max="100"></progress>
          <p>$3300 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli1} alt="" />
          <h5 className='text-danger'>Desperate for Shelter and Clean Water</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 66%</h5>
          <progress className='bg-warning' value="66" max="100"></progress>
          <p>$4680 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli2} alt="" />
          <h5 className='text-danger'>Preparing to help American Refugees</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 18%</h5>
          <progress className='bg-warning' value="18" max="100"></progress>
          <p>$3650 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli3} alt="" />
          <h5 className='text-danger'>Burundian Refugees in the DR Congo</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 31%</h5>
          <progress className='bg-warning' value="31" max="100"></progress>
          <p>$2200 to go</p>
        </SwiperSlide>
        <SwiperSlide className='text-start'>
          <img className='w-75' src={Sli4} alt="" />
          <h5 className='text-danger'>Donate to our good causes</h5>
          <p>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
          <h5>Donated 48%</h5>
          <progress className='bg-warning' value="48" max="100"></progress>
          <p>$1800 to go</p>
        </SwiperSlide>
      </Swiper>
         </div>
      </div>
      <div className='inv w-full align-items-center text-center text-white py-5'>
         <h5 className='bg-danger d-inline-block my-5 text-white px-2'>Become a Volunteer</h5>
         <h2 className='text-uppercase py-3'>No One has ever become poor by giving</h2>
         <h6 className='py-4 text-secondary fw-bold'>The message of The Faithland is that Christ saves sinners. In light of <br />
         that, we steward a message that radically changes lives.</h6>
         <button className='bg-transparent my-5 text-white p-3 border-white'>Get Involved Now</button>
      </div>

      <section className='text-center'>
        <h5 className='bg-secondary d-inline-block text-white my-4 px-2'>Be First To Read</h5>
        <h2 className='text-uppercase fw-bold'>Latest News</h2>
        <div>
          <div className='d-none d-lg-block'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char} alt="" />
          <div className='news py-3 px-1 position-absolute d-none d-lg-block'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char1} alt="" />
          <div className='news py-3 px-1 position-absolute'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char2} alt="" />
          <div className='news py-3 px-1 position-absolute'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char3} alt="" />
          <div className='news py-3 px-2 position-absolute'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      <div className='d-lg-none'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char} alt="" />
          <div className=' py-3 px-1'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char1} alt="" />
          <div className=' py-3 px-1 '>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char2} alt="" />
          <div className='py-3 px-1'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='newsswiper'>
          <img className='w-75' src={Char3} alt="" />
          <div className='py-3 px-2'>
            <h6>November 10,2015</h6>
            <h4 className='text-danger'>A harsh fall for Yazidi Refugees in Greece</h4>
            <p className='fs-1.5 text'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis.</p>
            <button className='btn bg-transparent'>Read More</button>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      <div className='events text-white'>
            <h5 className='bg-danger d-inline-block my-4'>Story About Us</h5>
            <h2 className='text-uppercase py-3 my-4'>Upcoming Events</h2>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
                <div className="col-lg-4"><div className="container">
                    <div className="row">
                      <div className="col-2">
                        <p className='m-0 p-0'>Sep</p>
                        <h3 className='m-0 p-0'>26</h3>
                      </div>
                      <div className="col-10">
                        <p className='m-0 p-0 text-align-left slogan'>September 26, 2023 - December 26, 2024</p>
                        <h4 className='slogan text-uppercase m-0 p-0'>Digital Help For Language Volunteers</h4>
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
            <button className='bg-transparent text-white my-5 py-3 px-5 border-white'>View More</button>
      </div>
      </div>
      
      </section>
      
      
      <div className='bg-danger text-white'>
      <div className='container bg-danger py-3'>
        <div className="row align-items-center">
          <div className="col-6">
            <h3 className='text-uppercase'>Subscribe To NewsLetter</h3>
            <h6>Sign up with your email address to receive news and updates</h6>
          </div>
          <div className="col-6">
            <input className='py-2 px-5 border-white bg-[$red-400]' type="text" /><button className='bg-white text-danger py-2 px-4 fw-bold'>Subscribe</button>
          </div>
        </div>

      </div>
      </div>
      <div className='text-center'>
        <h5 className='bg-secondary d-inline-block text-white mt-5 px-2'>Story About us</h5>
        <h1 className='text-bs-primary-bg-subtle fw-bold'>Petitons And Solutions</h1>
      </div>
      <div className='container my-3 d-lg-none'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center'>
          <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop} alt="" />
            <p>In Health</p>
            <h5>Public Health</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop1} alt="" />
            <p>In Education</p>
            <h5>Educate a Child</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop2} alt="" />
            <p>In Safety</p>
            <h5>Safeguarding Individuals</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop3} alt="" />
            <p>In Safety</p>
            <h5>Safeguarding Livelihoods</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop4} alt="" />
            <p>In Environment</p>
            <h5>Climate Change</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop5} alt="" />
            <p>In Migration</p>
            <h5>Asylum and Migration</h5>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='container my-3 d-lg-block d-none'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center'>
          <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop} alt="" />
            <p>In Health</p>
            <h5>Public Health</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop1} alt="" />
            <p>In Education</p>
            <h5>Educate a Child</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop2} alt="" />
            <p>In Safety</p>
            <h5>Safeguarding Individuals</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop3} alt="" />
            <p>In Safety</p>
            <h5>Safeguarding Livelihoods</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop4} alt="" />
            <p>In Environment</p>
            <h5>Climate Change</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <div className='bg-light py-3'>
            <img className='prop w-50' src={Prop5} alt="" />
            <p>In Migration</p>
            <h5>Asylum and Migration</h5>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='rescue'>
      <div className='text-center'>
        <h5 className='bg-danger d-inline-block text-white mt-5 px-2'>Story About us</h5>
        <h1 className='text-white fw-bold'>Rescue Stories</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className=" text-center">
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
        <SwiperSlide>

          <img className='resc py-2' src={Resc1} alt="" />
          <h3 className='text-white py-3'>“Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla.”</h3>
          <h3 className='text-white fw-bold py-3'>Helen Milton</h3>
          <p className='text-white py-3 my-2'>Refugee</p>
          </SwiperSlide>
        <SwiperSlide>
          <img className='resc py-2' src={Resc2} alt="" />
          <h3 className='text-white py-3'>“Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla.”</h3>
          <h3 className='text-white fw-bold py-3'>Helen Milton</h3>
          <p className='text-white py-3 my-2'>Refugee</p></SwiperSlide>
        <SwiperSlide>
          <img className='resc py-2' src={Resc3} alt="" />
          <h3 className='text-white py-3'>“Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla.”</h3>
          <h3 className='text-white fw-bold py-3'>Helen Milton</h3>
          <p className='text-white py-3 my-2'>Refugee</p></SwiperSlide>
        <SwiperSlide>
          <img className='resc py-2' src={Resc4} alt="" />
          <h3 className='text-white py-3'>“Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla.”</h3>
          <h3 className='text-white fw-bold py-3'>Helen Milton</h3>
          <p className='text-white py-3 my-2'>Refugee</p></SwiperSlide>
        
      </Swiper>
      </div>
        </div>
      </div>
      </div>
      <div className='bg-warning'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <h2 className='text-uppercase text-white py-4'>YOUR DONATIONS SUPPORT OUR CRITICAL WORK</h2>
            </div>
            <div className="col-lg-3">
              <button className='bg-transparent border-white py-2 px-5 text-white'>Make A Donation Today</button>
            </div>
          </div>
        </div>
      </div>
      <div className='donors'>
      <div className='text-center'>
        <h5 className='bg-secondary d-inline-block text-white mt-5 px-2'>Story About us</h5>
        <h1 className='fw-bold text-uppercase'>Charity Donors</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img className='w-100' src={Don1} alt="" />
            <p>Desperate for Shelter and Clean Water</p>
            <h4 className='text-uppercase pb-4 border-bottom fw-bold'>Mia Jameson</h4>
            <div className='d-flex justify-content-between'>
              <p className='text-danger fw-bold'>$8620</p>
              <p>Donated</p>
            </div>
          </div>
          <div className="col-lg-3">
            <img className='w-100' src={Don2} alt="" />
            <p>Syrian refugee crisis</p>
            <h4 className='text-uppercase pb-4 border-bottom fw-bold'>John Baker</h4>
            <div className='d-flex justify-content-between'>
              <p className='text-danger fw-bold'>$7230</p>
              <p>Donated</p>
            </div>
          </div>
          <div className="col-lg-3">
            <img className='w-100' src={Don3} alt="" />
            <p>Education to every child</p>
            <h4 className='text-uppercase pb-4 border-bottom fw-bold'>Mike Carter</h4>
            <div className='d-flex justify-content-between'>
              <p className='text-danger fw-bold'>$7000</p>
              <p>Donated</p>
            </div>
          </div>
          <div className="col-lg-3">
            <img className='w-100' src={Don4} alt="" />
            <p>Donate to our good causes</p>
            <h4 className='text-uppercase pb-4 border-bottom fw-bold'>Kira Simon</h4>
            <div className='d-flex justify-content-between'>
              <p className='text-danger fw-bold'>$1200</p>
              <p>Donated</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className='text-center'>
        <h5 className='bg-secondary d-inline-block text-white mt-5 px-2'>Friends and Sponsors</h5>
        </div>
        <div className="container">
          <div className="row justify-content-center py-4 my-4">
            <div className="col-lg-2">
              <img src={Spon1} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={Spon2} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={Spon3} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={Spon4} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={Spon5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
