import React, {useState} from 'react';
import styles from './App.module.scss'
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import UpArrow from "./assets/arrow-square-right.svg";
import arrowSquareRight from "./assets/arrow-square-right.svg";
import TextArea from "./Components/TextArea/TextArea.jsx";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
      <>
        <div className={styles.toggler} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <img src={UpArrow}/>
        </div>
        <div className={styles.title} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <p>Answer Analysis</p>
          {isSidebarVisible ? <img src={arrowSquareRight} onClick={() => setIsSidebarVisible(!isSidebarVisible)}/> : <img src={arrowSquareRight} className={styles.DownArrow} onClick={() => setIsSidebarVisible(!isSidebarVisible)}/>}
        </div>
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet"></link>
        <div className={`${styles.outer} ${isSidebarVisible ? `${styles.hidden}` : `${styles.notHidden}`}`}>
          <div className={styles.queAns}>
            <div className={styles.heading}><p>Question</p></div>
            <div className={styles.text}>
              <p>With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the
                far
                corners of the universe?</p>
            </div>
            <TextArea/>
          </div>
        </div>
        <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      </>
  )
}

export default App