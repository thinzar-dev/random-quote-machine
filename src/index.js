import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const data = [
  {
    author: '--Audrey Hepburn',
    text: '"Nothing is impossible, the word itself says, “I’m possible!'
},
  {
    author: '- Dalai Lama',
    text: '"Remember that not getting what you want is sometimes a wonderful stroke of luck.'
},
  {
    author: '- Michael Jordan',
    text: '"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.'
},
  {
    author: '- Latin Proverb',
    text: '"If the wind will not serve, take to the oars.'
},
  {
    author: '- Abraham Lincoln',
    text: '"It’s not the years in your life that count. It’s the life in your years.'
},
  {
    author: '- Gloria Steinem',
    text: '"Dreaming, after all, is a form of planning.'
}, 
  {
    author: '- Eleanor Roosevelt',
    text: '"Remember no one can make you feel inferior without your consent.'
},
  {
    author: '- Marie Curie',
    text: '"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.'
},
  {
    author: '- Babe Ruth',
    text: '"Every strike brings me closer to the next home run.'
},
  {
    author: '- Henry Ford',
    text: '"Whether you think you can or you think you can’t, you’re right.'  
},
]

const quoteArray = data

class QuoteMachine extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        author: '- Marie Curie',
        text: '"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.'    
    }
    this.newQuote = this.newQuote.bind(this)
  }

  newQuote() {
  const randomNumber = Math.floor(Math.random() * quoteArray.length);
  this.setState({
    author: quoteArray[randomNumber].author,
    text: quoteArray[randomNumber].text
  }
)}
  
  render() {
  return (
    <section>
        <div id="quote-box">
            <div id="text">
                {this.state.text}  
            </div>
            <div id="author">
                {this.state.author}
            </div>
            <button id="new-quote" onClick={this.newQuote}>
                New quote
            </button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22`${this.state.text}`" target="_top">
              <i class="fa fa-twitter"></i>
            </a>  
        </div>
    </section>
    )
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuoteMachine />
  </React.StrictMode>
);