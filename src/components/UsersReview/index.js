import './index.css'
import {FaQuoteLeft} from 'react-icons/fa'

const usersReviewList = [
  {
    reviewName:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author:
      'https://encyclopedia.1914-1918-online.net/smw/images/thumb/b/b7/Bergson_portrait_IMG.jpg/180px-Bergson_portrait_IMG.jpg',
    authorName: 'Wilson Bergson',
    category: 'French philosophers',
  },
  {
    reviewName:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiECUPH-s98JI2Jjq_ePtKd92f8v_hfuHmTw&usqp=CAU',
    authorName: 'Zaire Aminoff',
    category: 'Neurology',
  },
  {
    reviewName:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv3Y5nQpkjZSedVggRUzAP3Re5j-sN2WB1L6uwPOCRA&s',
    authorName: 'Ryan Press',
    category: 'Music publishing',
  },
]

const UsersReview = () => (
  <div className="user-review-container">
    <h1 className="review-heading">Let's see our User's Review</h1>
    <p className="review-des">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla
      etlam turpls quam diam et. Arcu nisi, sed aenean siti nisi.
    </p>
    <ul className="review-list">
      {usersReviewList.map(eachReview => (
        <li className="review-item">
          <FaQuoteLeft className="fa-quote" />
          <p className="review-name">{eachReview.reviewName}</p>
          <div className="author-content">
            <img
              src={eachReview.author}
              alt={eachReview.authorName}
              className="author-img"
            />
            <div className="review-category">
              <h1 className="author-name">{eachReview.authorName}</h1>
              <p className="author-design">{eachReview.category}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
export default UsersReview
