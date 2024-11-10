import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row py-4 border-bottom">
            <div className="col-lg-3">
              <h5>About us</h5>
              <p>Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin vel nibh et elit mollis commodo et nec augue</p>
              <p><i class="bi bi-geo-alt-fill"></i> Brooklyn, NY 10036, United States</p>
              <p><i class="bi bi-envelope"></i> example@example.com</p>
              <p><i class="bi bi-phone"></i> Call Us: 1-800-123-1234</p>
            </div>
            <div className="col-lg-3">
              <h5>What we do</h5>
              <p className='border-bottom'>Education</p>
              <p className='border-bottom'>Health</p>
              <p className='border-bottom'>Social Services</p>
              <p className='border-bottom'>Microfinance</p>
              <p className='border-bottom'>Infrastructure</p>
              <p>Emergency Response</p>
            </div>
            <div className="col-lg-3">
            <h5>NewsRoom</h5>                                   
              <p className='border-bottom'> Press Releases</p>
              <p className='border-bottom'>Official Statements</p>
              <p className='border-bottom'>Emergency Reports</p>
              <p className='border-bottom'>Blog & News</p>
              <p className='border-bottom'>Features</p>
              <p>Press Contacts</p>
            </div>
            <div className="col-lg-3">
              <h5>Calender</h5>
              <p className='text-white fw-bold'><span><i class="bi bi-chevron-left"></i></span> August 2024</p>
              <table>
                <tr>
                  <td>M</td>
                  <td>T</td>
                  <td>W</td>
                  <td>T</td>
                  <td>F</td>
                  <td>S</td>
                  <td>S</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td></td>
                </tr>
              </table>
              <p><span><i class="bi bi-chevron-double-right"></i></span> June</p>
            </div>
          </div>
        </div>
        <div className='container py-4 d-lg-flex justify-content-between'>
          <p>Privacy Policy / This is a sample website - cmsmasters © 2024 / All Rights Reserved</p>
          <p className='d-flex gap-1'>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-skype"></i>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
