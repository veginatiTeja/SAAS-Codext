import './index.css'

const latestImg1 =
  'http://4c51b102-f3ab-4043-b00d-875c8ddb6833.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/latestNews1.png'
const latestImg2 =
  'http://1c042128-a685-4145-a011-17bdb64f439e.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/latestNews2.png'

const LatestNews = () => (
  <div className="latest-news-container">
    <h1 className="latest-heading">Latest insight News</h1>
    <div className="latest-responsive-containers">
      <div className="latest-contentss">
        <img src={latestImg1} alt="remote" className="latest-img" />
        <div className="specifications">
          <div className="insights">
            <p className="item1">our creative team</p>
            <p className="item1">17 Jan 2021</p>
            <p className="item1">By Siva Sruthi</p>
          </div>
          <h1 className="insight-heading">
            Running remote offsites and onboardings
          </h1>
          <p className="latest-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button type="button" className="button">
            Continue
          </button>
        </div>
      </div>
      <div className="latest-contentss">
        <img src={latestImg2} alt="news" className="latest-img" />
        <div className="specifications">
          <div className="insights">
            <p className="item1">Create Presentations</p>
            <p className="item1">17, June 2021</p>
            <p className="item1">By Thomas leaves</p>
          </div>
          <h1 className="insight-heading">
            A new look & new ways to collaborate
          </h1>
          <p className="latest-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button type="button" className="button">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
)
export default LatestNews
