// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isBtnClicked: false, activeFaq: ''}

  showAnswer = id => {
    const {faqsList} = this.props

    this.setState(prevState => ({
      isBtnClicked: !prevState.isBtnClicked,
      activeFaq: id,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isBtnClicked, activeFaq} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="question-container">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                faqDetails={each}
                isBtnClicked={isBtnClicked}
                showAnswer={this.showAnswer}
                isActive={activeFaq === each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
