import {FaWhatsapp} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import './index.css'

const logoUrl =
  'http://b7b12342-7d93-400f-bec5-bac2bae24b5f.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/codelogoss.png'

const Footer = () => (
  <div className="footer-container">
    <div className="responsive-containers">
      <div className="icons-contents">
        <div className="logo-contents">
          <img src={logoUrl} alt="logo" className="logos" />
          <p className="codexts">Codext</p>
        </div>
        <p className="lorem-dess">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="icons-containers">
          <FaWhatsapp className="icons" />
          <BsTwitter className="icons" />
          <FaFacebookF className="icons" />
          <BsLinkedin className="icons" />
        </div>
      </div>
      <div className="resources-contents">
        <h1 className="heading-resources">Resources</h1>
        <ul className="res-list">
          <li className="res-item">Services</li>
          <li className="res-item">Pricing</li>
          <li className="res-item">Testimonials</li>
          <li className="res-item">Blog</li>
        </ul>
      </div>
      <div className="useful-containers">
        <h1 className="useful-name">Useful links</h1>
        <ul className="useful-lists">
          <li className="useful-items">Terms of Services</li>
          <li className="useful-items">Privacy Policy</li>
          <li className="useful-items">Terms of Services</li>
          <li className="useful-items">Contact us</li>
        </ul>
      </div>
      <div className="news-letter-contentss">
        <h1 className="new-heading">Newsletter</h1>
        <p className="new-letter-description">
          Signup and recieve the latest news via email.
        </p>
        <div>
          <input type="email" placeholder="Enter Email" className="email" />
          <button type="button" className="send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
    <div>
      <p>Hi</p>
      <hr />
      <p className="copy-right">
        CopyRight 2021 The Content And All Rights Reserved
      </p>
    </div>
  </div>
)

export default Footer
