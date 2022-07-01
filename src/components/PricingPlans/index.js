import './index.css'

const pricingPlansObj = [
  {
    pricingName: 'Start-up',
    priceCount: '$10/mo',
    plan: 'Single',
  },
  {
    pricingName: 'Classic',
    priceCount: '$30/mo',
    plan: '5',
  },
  {
    pricingName: 'Premium',
    priceCount: '$49/mo',
    plan: '10',
  },
]

const PricingPlans = () => (
  <div className="pricing-plans-container">
    <h1 className="pricing-head">Choose your best pricing plan</h1>
    <p className="price-des">Added for Monthly Yearly </p>
    <ul className="pricing-list">
      {pricingPlansObj.map(eachItem => (
        <li className="pricing-item">
          <p className="price-name">{eachItem.pricingName}</p>
          <hr className="horizontal-line" />
          <h1 className="price-count">{eachItem.priceCount}</h1>
          <div className="price-content">
            <p className="price-plan-name">Easy Customizable</p>
            <p className="price-plan-name">Commercial Sense</p>
            <p className="price-plan-name">{eachItem.plan} user licence</p>
            <p className="price-plan-name">Hotline support 24/7</p>
          </div>
          <button type="button" className="package-btn">
            TRY THIS PACKAGE
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default PricingPlans
