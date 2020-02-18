//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [second, setSecond] = useState(0);
  //const [tens, setTens] = useState(0);
  //const [minute, setMinute] = useState(0);
  //const [tenMinute, setTenMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  //const [quarter, setQuater] = useState(1);

  useEffect(()=> {

    if (isRunning) {
      const id = setInterval(()=> {
        setSecond(second => second + 1);
      }, 1000);
      return () => clearInterval(id);
    }
    return undefined;
  }, [isRunning]);  


  

  const homeTeam = 'Bears';
  const awayTeam = 'Rhinos';

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:{second}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=> setHome(home + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={()=> setHome(home + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={()=> setAway(away + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={()=> setAway(away + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="awayButtons">
          {isRunning ? (
            <button onClick={()=> setIsRunning(false)} className="awayButtons__touchdown">Stop Clock</button>
          ) : (
            <button onClick={()=> setIsRunning(true)} className="awayButtons__touchdown">Run Clock</button>
          )} 
          
        </div>
        {/* <div className="awayButtons">
          <button onClick={()=> setQuater(quarter + 1)} className="awayButtons__touchdown">Quarter up</button>
          <button onClick={()=> setQuater(quarter - 1)} className="awayButtons__touchdown">Quarter down</button>
        </div> */}
      </section>

    </div>
  );
}

export default App;
