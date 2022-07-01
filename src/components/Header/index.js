import {Link} from 'react-router-dom'

import './index.css'

const logoUrl =
  'http://bca78877-ffaa-45b1-aacf-8a04aac18c35.mini-browser.localhost/mini-browser/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/public/img/codelogoss.png'
const Header = () => {
  const onClickItem = () => {
    const className = 'active'
    return className
  }

  return (
    <nav className="header-container">
      <div className="logo-and-title-container">
        <img alt="codeEx" className="logo" src={logoUrl} />
        <h1 className="title">Codext</h1>
      </div>
      <div className="nav-container">
        <ul className="nav-items-list">
          <li className="link-item">
            <Link className="route-link" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/services">
              services
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <div className="button-content">
          <button type="button" className="button">
            Free Trial
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
