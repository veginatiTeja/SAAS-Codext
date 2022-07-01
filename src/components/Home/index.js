import {TiArrowForward} from 'react-icons/ti'
import './index.css'
import PricingPlans from '../PricingPlans'
import UsersReview from '../UsersReview'
import LatestNews from '../latestNews'
import Footer from '../Footer'

const codextImg =
  'http://7b10a868-73c4-4ed5-be20-13881c2fd091.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/codeext-pic.png'
const useCasesImg =
  'http://2e1205ff-dbd2-4830-bb24-cc13a4347b12.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/usecasesimg.png'
const cleanCode =
  'http://30fbf987-178c-45c7-a622-9cb8b2557c1f.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/cleanCode.png'
const Analytic =
  'http://70706d5a-16c1-4536-b88a-24a5285b3809.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/dataAnalytic.png'
const fullySecure =
  'http://7aa90ab3-34c6-4c2a-8fa6-e919103a2889.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/fullySecure.png'
const support =
  'http://3523300b-69c7-4a4c-9fca-a5e1d581bd8d.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/support.png'

const Home = props => (
  <div className="home-container">
    <div className="codext-container">
      <div className="responsive">
        <h1 className="heading">Codext one of the best system in SAAS.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla
          etlam turpls quam diam et. Arcu nisi, sed aenean siti nisi.
        </p>
        <button type="button" className="demo-btn">
          Try A Live Demo
        </button>
      </div>
      <img src={codextImg} alt="code ext img" className="code-img" />
    </div>
    <div className="usecase-container">
      <img src={useCasesImg} alt="use cases" className="usecase-img" />
      <div className="usecase-features">
        <h1 className="usecase-heading">It's helpful for operating system</h1>
        <ul className="usecase-list">
          <li className="usecase-item">
            <TiArrowForward className="forward-icons ultra" />
            <div className="features-list">
              <h1 className="feature-heading">Ultra fast & Secure</h1>
              <p className="usecase-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut slin morbe
              </p>
            </div>
          </li>
          <li className="usecase-item">
            <TiArrowForward className="forward-icons custom" />
            <div className="features-list">
              <h1 className="feature-heading">Allow customization</h1>
              <p className="usecase-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut slin morbe
              </p>
            </div>
          </li>
          <li className="usecase-item">
            <TiArrowForward className="forward-icons contact" />
            <div className="features-list">
              <h1 className="feature-heading">Smart contact</h1>
              <p className="usecase-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut slin morbe
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="feature-page-container">
      <h1 className="features-heading">
        We Provides best Feature for customar
      </h1>
      <ul className="custom-list">
        <li className="custom-item">
          <div className="image-container CleanCode">
            <img src={cleanCode} alt="cleanCode" className="custom-img" />
          </div>
          <div className="custom-content active-custom">
            <h1 className="custom-head">Clean Code</h1>
            <p className="custom-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </li>
        <li className="custom-item">
          <div className="image-container analytic">
            <img src={Analytic} alt="analytic" className="custom-img" />
          </div>
          <div className="custom-content">
            <h1 className="custom-head">Data Analytic</h1>
            <p className="custom-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </li>
        <li className="custom-item">
          <div className="image-container secure">
            <img src={fullySecure} alt="secure" className="custom-img" />
          </div>
          <div className="custom-content">
            <h1 className="custom-head">Fully Secured</h1>
            <p className="custom-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </li>
        <li className="custom-item">
          <div className="image-container support">
            <img src={support} alt="support" className="custom-img" />
          </div>
          <div className="custom-content">
            <h1 className="custom-head">24/7 Support</h1>
            <p className="custom-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </li>
      </ul>
    </div>
    <PricingPlans />
    <UsersReview />
    <LatestNews />
    <Footer />
  </div>
)

export default Home
