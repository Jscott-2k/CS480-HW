import React, { FC } from 'react';
import '../CobSoulMusicKeyFrames.css';
import '../CobSoulMusic.css';

interface CobSoulMusicHeaderDarkProps{

}

export default function CobSoulMusicHeaderDark(props:CobSoulMusicHeaderDarkProps){
    return( 
        <>
                    <div className="HW4Main-Header-Bar">
                        <h4>
                            <div>Cob's Company</div> <span> || Voted #1 for FREE Music - ALL available for <span className='HW4-RGB'>FREE!</span> || </span>
                        </h4>

                    </div>
        </>);
};