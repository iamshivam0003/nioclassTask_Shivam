import './css/App.css';
import {MathJaxContext} from 'better-react-mathjax';
import MainScreen from './components/MainScreen';
function App() {
  return (
    <MathJaxContext >
    <MainScreen/> 
   </MathJaxContext>
   
  );
}

export default App;


// renderMode={ "post"}