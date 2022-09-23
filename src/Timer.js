import './App.css';
import React,{ useState, useRef } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const Start = () =>{
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(()=> {
      setTimer((timer) => timer+1)
    },100)
  }

  const Pause = () =>{
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  
  const Resume = () =>{
    setIsPaused(true)
    countRef.current = setInterval(() => {
    setTimer((timer) => timer + 1)
  }, 1000)
  }

  const Reset = () =>{
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div>
      
      <h3>React Stopwatch</h3>
      <div>
        <div className='stopwatch-card'>
          <p>{formatTime()}</p>
          <p>Jam : Menit : Detik</p>
        </div>
        <div className='button-container'>
          <button className="style-start" onClick={Start}>Start</button>
          <button className="style-pause" onClick={Pause}>Pause</button> 
          {/* <button onClick={Resume}>Resume</button> */}
          <button className="style-reset" onClick={Reset}>Reset</button>
        </div>
      </div>

      {/* Task2 */}
      <div className='container-shape'>
        <div className='container'>
        <div className='container-column'>

          <div className='container-top'>
            <div className='sequere'/>
            <div className='rectenggel'/>
          </div>
          <div className='container-top'>
            <div className='sequere-border'/>
            <div className='oval'/>
          </div>

          </div>

          <div className='sequere-green'/>

        </div>
        
        
        <div className='green-rectenggel'/>
        
        

      </div>
    
    </div>
  )
}

export default Timer
