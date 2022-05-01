import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='grey'>
        <img src = './images/proctor-vision-logo.png' alt= 'proctor-logo' className='logo'/>
      <h1>Welcome aboard <br></br>  
        to the future in the making<br></br>  
        You've become a part of it!</h1>
        <Link to="/Login">
        <button className='btn'>
          Continue {">"}
        </button>
        </Link>
        
      </div>{/* grey End*/}
    </div> 
  );
}

export default App;
