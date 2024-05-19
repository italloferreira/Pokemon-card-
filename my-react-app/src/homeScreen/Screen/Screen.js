import React, { useState } from 'react';
import './Screen.css';

function FirstScreen() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div>
          
          {isVisible && <div className="screen" onClick={handleClick}>
      
        
      <div>
          {isVisible && <h1 onClick={handleClick} className="txt">PASSE O MAUSE EM CIMA DAS CARTAS PARA ELAS GIRAREM</h1>}
      </div>
        
        <div>
          {isVisible && <button onClick={handleClick} className="btn">Ok</button>}
        </div>

        </div>}
      </div>
    </>
  );
}

export default FirstScreen;
