import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import { WordNum } from './components/WordNum';
import { WordDecoration } from './components/WordDecoration';


function App(){
  return (
      <div className="App">
          <Router>
            {/* This is the path for home, which passes no props */}
              <Home path="/home"/>
            {/* This is the path for either an individual word or number and passes the prop value. */}
              <WordNum path ="/:value"/>
            {/* This is the path for word decoration, it passes props for word, text color, and background color */}
              <WordDecoration path = "/:word/:textColor/:bgColor"/>
          </Router>
      </div>
  )
}

export default App;
