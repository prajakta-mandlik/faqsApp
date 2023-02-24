// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqDetails, isActive, showAnswer} = props
  const {id, questionText, answerText} = faqDetails

  const btnClicked = () => {
    showAnswer(id)
  }

  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isActive ? 'minus' : 'plus'
  const className = isActive ? 'show-answer' : 'hide-answer'

  return (
    <li className="question-cards" key={id}>
      <div className="questions">
        <h1 className="question-heading">{questionText}</h1>
        <button type="button" className="button" onClick={btnClicked}>
          <img src={imgUrl} alt={altText} className="icon" />
        </button>
      </div>

      <div className={className}>
        <hr />
        <p>{answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
