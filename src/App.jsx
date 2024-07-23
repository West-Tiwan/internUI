import styles from './App.module.scss'
import React from 'react';
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import UpArrow from "./assets/arrow-square-right.svg";
import arrowSquareRight from "./assets/arrow-square-right.svg";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  return (
      <>
        <div className={styles.toggler} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <img src={UpArrow}/>
        </div>
        <div className={styles.title} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <p>Answer Analysis</p>
          <img src={arrowSquareRight}/>
        </div>
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet"></link>
        <div className={`${styles.outer} ${!isSidebarVisible ? `${styles.hidden}` : ''}`}>
          <div className={styles.queAns}>
            <div className={styles.heading}><p>Question</p></div>
            <div className={styles.text}>
              <p>With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the
                far
                corners of the universe?</p>
            </div>
            <div className={styles.bar}>
              <div className={styles.heading}><p>Answered by you</p></div>
              <div className={styles.link}><p>1075 word 1075 letters 4 paragraphs</p></div>
            </div>
            <div className={styles.textarea}>
              <div className={styles.text}>
                <p>In the year 2137, humanity had made incredible strides in space exploration. With advanced technology
                  and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the
                  universe. Elara was a seasoned astronaut, known for her courage and <span
                      className={styles.red}>determination</span> in the face of unknown dangers. She had led countless
                  missions, but none compared to the journey she was about to embark on.</p>
              </div>
              <div className={styles.text}>
                <p>Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal
                  red
                  moon had captured the <span className={styles.yellow}>attention of scientists</span> and adventurers
                  alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But
                  Clara&apos;s mission was different. She was sent to explore and document the planet&apos;s <span
                      className={styles.blue}>secrets, with the hope of finding a new home for humanity.</span> Eos was
                  a
                  mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had
                  captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while
                  others
                  were intrigued by its potential resources. But Elara&apos;s mission was different. She was sent to
                  explore and document the planet&apos;s secrets, with the hope of finding a new home for humanity.</p>
              </div>
              <div className={styles.text}>
                <p>In the year 2137, humanity had made incredible strides in space exploration. With advanced technology
                  and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the
                  universe. Elara was a seasoned astronaut, known for her courage and <span
                      className={styles.red}>determination</span> in the face of unknown dangers. She had led countless
                  missions, but none compared to the journey she was about to embark on.</p>
              </div>
              <div className={styles.text}>
                <p>Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal
                  red
                  moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty,
                  while others were intrigued by its potential resources. But Elara&apos;s mission was different. She
                  was
                  sent to explore and document the planet&apos;s <span className={styles.blue}>secrets, with the hope of finding a new home for humanity.</span> Eos
                  was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red
                  moon
                  had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while
                  others were intrigued by its potential resources. But Elara&apos;s mission was different. She was sent
                  to explore and document the planet&apos;s secrets, with the hope of finding a new home for humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      </>
  )
}

export default App

// < div
// className = {styles.ansAls} >
//     < div
// className = {styles.title} >
//     < p > Answer
// Analysis < /p>
// <img src={arrowSquareRight}/>
// </div>
// <div className={styles.inner}>
//   <div className={styles.heading}><p>Score Analysis</p></div>
//   <div className={styles.translucent}>
//     <div className={styles.circleNumber}>
//       <CircleNumber number={1} text={4.8}/>
//     </div>
//     <div className={styles.written}>
//       <p>Overall band score</p>
//       <div className={styles.inline}><strong>4.8/10</strong><small>(needs improvement)</small>
//       </div>
//     </div>
//   </div>
//   <div className={styles.circleNumberScore}>
//     <div className={styles.group}>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={2} text={1.8}/>
//         <p>Cohesion & Coherence</p>
//       </div>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={3} text={7.8}/>
//         <p>Lexical Resource Analysis</p>
//       </div>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={4} text={5.8}/>
//         <p>Grammatical Range</p>
//       </div>
//     </div>
//     <div className={styles.group}>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={5} text={1.8}/>
//         <p>Handling if more than 3</p>
//       </div>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={6} text={7.8}/>
//         <p>Handling if more than 3</p>
//       </div>
//       <div className={styles.innerGroup}>
//         <CircleNumber number={7} text={5.8}/>
//         <p>Handling if more than 3</p>
//       </div>
//     </div>
//   </div>
//   <div className={styles.container}>
//     <p>Text score: 4.8 out of 10. This score represents the quality of writing in this document. You
//       can
//       increase it by addressing Grammarly&apos;s suggestions.</p>
//   </div>
//   <div className={styles.container2}>
//     <div className={styles.heading}>
//       <p>Cohesion & Coherence</p>
//       <NumberBox number={"6.0"} type={1}/>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={4}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={5}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//     <div className={styles.heading}>
//       <p>Lexical Resource Analysis</p>
//       <NumberBox number={"6.0"} type={2}/>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={4}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={5}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//     <div className={styles.heading}>
//       <p>Grammatical Range</p>
//       <NumberBox number={"6.0"} type={3}/>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={4}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//     <div className={styles.text}>
//       <NumberBox number={"6.0"} type={5}/>
//       <p>Sub part of coherence and cohesion</p>
//     </div>
//   </div>
//   <div className={styles.link}>
//     <p>Hide full analysis</p>
//     <img src={UpArrow}/>
//   </div>
//   <div className={styles.heading}><p>Text Analysis</p></div>
//   <TranslucentBar number={"06"} type={1} text={"Common mistakes found"}/>
//   <TranslucentBar number={"08"} type={2} text={"Repetitive words found"}/>
//   <TranslucentBar number={"12"} type={3} text={"Suggestion for more effectiveness"}/>
//   <div className={styles.gapper}>
//     <div className={styles.heading}><p>Sharing and downloads</p></div>
//   </div>
//   <div className={styles.share}>
//     <Button type={"download"}/>
//     <Button type={"share"}/>
//   </div>
// </div>
// </div>