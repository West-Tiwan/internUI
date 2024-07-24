import React, { useState, useEffect, useRef } from 'react'
import styles from "./TextArea.module.scss";
import HoverWindow from '../HoverWindow/HoverWindow';

const TextArea = () => {
    const [text, setText] = useState([`In the year 2137, humanity had made incredible strides in space exploration. With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe. Elara was a seasoned astronaut, known for her courage and `
        ,
        ` in the face of unknown dangers. She had led countless missions, but none compared to the journey she was about to embark on.\n\n Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the `
        ,
        ` and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s `
        ,
        `.\n\n Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity.\nIn the year 2137, humanity had made incredible strides in space exploration. With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe. Elara was a seasoned astronaut, known for her courage and `
        ,
        ` in the face of unknown dangers. She had led countless missions, but none compared to the journey she was about to embark on.\n\n Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the `
        ,
        ` and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s `
        ,
        `. Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity.\n\n`])

    const [corrections, setCorrections] = useState(["detrination", "attention to scientists", "secrets with the hope of finding a new home for us", "detrination", "attention to scientists", "secrets with the hope of finding a new home for us", ""])

    const [style, setStyle] = useState([styles.red, styles.yellow, styles.blue, styles.red, styles.yellow, styles.blue, ""])
    const [visible, setVisible] = useState(false);
    const [shown, setShown] = useState("none");
    const [wordCount, setWordCount] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);

    const handleHidden = (e, index) => {
        const className = e.target.className;
        setShown(className);
        setVisible(true);
        setHoveredIndex(index);
    };

    let finalText = '';

    for (let i = 0; i < text.length; i++) {
        finalText = finalText + `<p>${text[i]}</p>` + `<p class=${style[i]}>${corrections[i]}</p>` + <HoverWindow type={style} hover={shown} setHover={setShown} />;
    }

    useEffect(() => {
        const countWords = (textArray) => textArray.join(' ').split(/\s+/).filter(Boolean).length;
        const countLetters = (textArray) => textArray.join(' ').replace(/\s/g, '').length;
        const countParagraphs = (textArray) => textArray.join('\n').split(/\n\n|\r\n\r\n/).filter(Boolean).length;

        setWordCount(countWords([...text, ...corrections]));
        setLetterCount(countLetters([...text, ...corrections]));
        setParagraphCount(countParagraphs([...text, ...corrections]));
    }, [text, corrections]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const elements = container.querySelectorAll(`.${styles.red}, .${styles.yellow}, .${styles.blue}`);
            elements.forEach(element => {
                element.addEventListener('mouseover', handleHidden);
            });
            return () => {
                elements.forEach(element => {
                    element.removeEventListener('mouseover', handleHidden);
                });
            };
        }
    }, [finalText, styles.red, styles.yellow, styles.blue]);

    const handleTextChange = (index, correctionText) => {
        const newCorrections = [...corrections];
        newCorrections[index] = correctionText[index];
        setCorrections(newCorrections);
        setVisible(false);
        setShown("none");
        setHoveredIndex(null);
      };

    return (
        <>
          <div className={styles.bar}>
            <div className={styles.heading}><p>Answered by you</p></div>
            <div className={styles.link}><pre>{wordCount} words     {letterCount} letters     {paragraphCount} paragraphs</pre></div>
          </div>
          <div ref={containerRef} className={styles.textarea}>
            {text.map((txt, i) => (
              <React.Fragment key={i}>
                <p>{txt}</p>
                <p
                  className={style[i]}
                  onMouseOver={(e) => handleHidden(e, i)}
                >
                  {corrections[i]}
                </p>
                {hoveredIndex === i && (
                  <HoverWindow
                    type={style}
                    hover={shown}
                    setHover={setShown}
                    visible={visible}
                    index={i}
                    handleTextChange={handleTextChange}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      );
    };
export default TextArea