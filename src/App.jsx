import './App.css'
import Model from './Components/Model';
import { useSnapshot } from 'valtio';
import { whole,initialData } from "./valtio";
import { materialMapping } from "./Static";
import Colorer from "./Components/Colorer"

function App() {
  const snap = useSnapshot(whole);

  const handleClick = () => {
    whole.current = null;
    window.location.reload();
  }
  return (
    <div className='canvascontainer'>
      { snap.current && 
      <div className='selection'>
        
          Selection  : {materialMapping[snap.current]}
          <br/>
          
          <button className='btn-reset' onClick={handleClick}>Reset</button>
      </div> }

      { snap.current && 
      <div className='materialChanger'>
        <div className='matrialChangeLabel'>
        {materialMapping[snap.current]}
        </div>
         
          <Colorer/>
      </div>
        }
        <Model/>
    </div>
  
  )
}

export default App
