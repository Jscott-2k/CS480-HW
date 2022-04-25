import React, { FC, useEffect, useState } from 'react';
import { Progress } from 'semantic-ui-react';

import '../CobSoulMusic.css';

interface CobSoulMusicAdProgressTimerDarkProps{
    initalTime:number,
    updateTick:number,
    onFinish:()=>void
}

export default function CobSoulMusicAdProgressTimerDark(props:CobSoulMusicAdProgressTimerDarkProps){
    const [timeLeft, setTimeLeft] = useState(props.initalTime);
    console.log("Updated " + timeLeft);
    useEffect(() => {
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           props.onFinish();
           setTimeLeft(-1);
        }
    
        // exit early when we reach 0
        if (timeLeft<0) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
            return;
        }, props.updateTick);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

      return (
        <>  
                    <span>Please Wait Until the Video is Finished!</span>
        <div className='HW4-LowContrast'>

        Time Left: {(()=>{
           return timeLeft > 0 ? <>{timeLeft}</> : <>None</>
        })()}</div>
            <Progress percent={ 100* (( (props.initalTime - timeLeft) / props.initalTime)) } indicating />
        </>  
      );
};