import React from 'react'
import ReactDOM from 'react-dom';
import News from './News'
import './styles.css';
import Listings from './Listings'



export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  constructor(props) {
    super(props);

    this.state = { }
      
  }

  componentDidMount() {




  }
  
  render(){
    return (
          <div>
            <div class="navbar">
              <span>
                <img src="/electron.png" alt="" />&nbsp;
                <span class="title"><b>electrification</b></span> <span class="subtitle">EV News & The world's first electric vehicle marketplace</span>
                <a class="AppButton title time" href="https://itunes.apple.com/us/app/id1445602414" target="blank">Get the App</a>
              </span>
            </div>
            


            <div class="container">


              <div class="news">
                <News />
              </div>

              <div class="listings">
                  <Listings />
              </div>

            </div>




          </div>
    )
  }




}








ReactDOM.render(<App />, document.getElementById('root'));



