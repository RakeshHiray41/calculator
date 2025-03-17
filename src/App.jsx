import { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonGroup from './components/ButtonGroup'; 

function App() {
  const [calVal, setCalVal] = useState("");  
  const onButtonClick = (buttonText)=>{
    if(buttonText === "C"){
      setCalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result); 

    }
  
  else{
    const newDispalayValue = calVal + buttonText;
    setCalVal(newDispalayValue); 
    console.log(newDispalayValue);
  }

  }

  return (
    <>
      <div className={styles.calculator}>
        <Display displayvalue={calVal} />
        <ButtonGroup onButtonClick={onButtonClick} />  
      </div>
    </>
  );
}

export default App;
