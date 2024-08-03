import './App.css'
import Model from './Components/Model';
import { useSnapshot } from 'valtio';
import { whole,initialData } from "./valtio"

function App() {
  const snap = useSnapshot(whole);

  const handleClick = () => {
    whole.current = null;
  }
  return (
    <div className='canvascontainer'>
      { snap.current && 
      <div className='selection'>
        
          Selection  : {snap.current}
          <br/>
          
          <button className='btn-reset' onClick={handleClick}>Reset</button>
      </div> }
        <Model/>
    </div>
  
  )
}

export default App
