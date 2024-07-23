import React, { useState, useEffect } from 'react'
import styles from "./TextArea.module.scss";
import HoverWindow from '../HoverWindow/HoverWindow';

const TextArea = () => {
    const [text, setText] = useState("In the year 2137, humanity had made incredible strides in space exploration. With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe. Elara was a seasoned astronaut, known for her courage and deterination in the face of unknown dangers. She had led countless missions, but none compared to the journey she was about to embark on.\n\nEos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity.\n\nEos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity.\nIn the year 2137, humanity had made incredible strides in space exploration. With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe. Elara was a seasoned astronaut, known for her courage and determination in the face of unknown dangers. She had led countless missions, but none compared to the journey she was about to embark on.\n\nEos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity. Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon had captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while others were intrigued by its potential resources. But Elara\'s mission was different. She was sent to explore and document the planet\'s secrets, with the hope of finding a new home for humanity.\n\n")

    const [wordCount, setWordCount] = useState(0);
    const [letterCount, setLetterCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [hover, setHover] = useState(false);

    const paragraphs = text.split('\n\n');

    const handleHover = () => {
        setHover(hover => !hover);
    }

    const renderParagraph = (paragraph) => {
        const words = paragraph.split(' ');
        return words.map((word, index) => {
            const hoverClass1 = (word === 'deterination') ? `${styles.red} ${styles.hov}` : '';
            const hoverClass2 = (word === 'attention') ? `${styles.yellow} ${styles.hov}` : '';
            const hoverClass3 = (word === "secrets, with the hope of finding a new home for humanity.") ? `${styles.blue}` : '';
            const combinedClasses = `${hoverClass1} ${hoverClass2} ${hoverClass3} ${styles.text}`.trim();
            return (
                <div className={styles.textGroup}>
                    {(combinedClasses !== `${styles.text}`) ? <span key={index} className={combinedClasses} onClick={handleHover}>{word}{' '}</span> : 
                    <span key={index} className={combinedClasses}>{word}{' '}</span>}
                    {(combinedClasses.split(' ')[0] == `${styles.red}`) ? <HoverWindow type={"spelling"} hover={hover} setHover={handleHover}/> : ''}
                    {(combinedClasses.split(' ')[0] == `${styles.yellow}`) ? <HoverWindow type={"correctness"} hover={hover} setHover={handleHover}/> : ''}
                </div>
            );
        });
    };

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const countWords = (text) => text.split(/\s+/).filter(Boolean).length;
        const countLetters = (text) => text.replace(/\s/g, '').length;
        const countParagraphs = (text) => text.split(/\n\n|\r\n\r\n/).filter(Boolean).length;

        setWordCount(countWords(text));
        setLetterCount(countLetters(text));
        setParagraphCount(countParagraphs(text));
    }, [text]);

    return (
        <>
            <div className={styles.bar}>
                <div className={styles.heading}><p>Answered by you</p></div>
                <div className={styles.link}><p>{wordCount} words {letterCount} letters {paragraphCount} paragraphs</p></div>
            </div>
            <div className={styles.textarea}>
                <div className={styles.text}>
                    {paragraphs.map((paragraph, index) => (
                        <div key={index} className={styles.textGroup}>
                            {renderParagraph(paragraph)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TextArea


// <div className={styles.text}>
//     <p>In the year 2137, humanity had made incredible strides in space exploration. With advanced
// technology
// and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the
// universe. Elara was a seasoned astronaut, known for her courage and <span
// className={styles.red}>determination</span> in the face of unknown dangers. She had led
// countless
// missions, but none compared to the journey she was about to embark on.</p>
// </div>
// <div className={styles.text}>
//     <p>Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and
//         colossal
//         red
//         moon had captured the <span className={styles.yellow}>attention of scientists</span> and
//         adventurers
//         alike. Many were drawn to its beauty, while others were intrigued by its potential resources.
//         But
//         Clara&apos;s mission was different. She was sent to explore and document the planet&apos;s <span
//             className={styles.blue}>secrets, with the hope of finding a new home for humanity.</span> Eos
//         was
//         a
//         mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red
//         moon
//         had
//         captured the attention of scientists and adventurers alike. Many were drawn to its beauty, while
//         others
//         were intrigued by its potential resources. But Elara&apos;s mission was different. She was sent
//         to
//         explore and document the planet&apos;s secrets, with the hope of finding a new home for
//         humanity.
//     </p>
// </div>
// <div className={styles.text}>
//     <p>In the year 2137, humanity had made incredible strides in space exploration. With advanced
//         technology
//         and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the
//         universe. Elara was a seasoned astronaut, known for her courage and <span
//             className={styles.red}>determination</span> in the face of unknown dangers. She had led
//         countless
//         missions, but none compared to the journey she was about to embark on.</p>
// </div>
// <div className={styles.text}>
//     <p>Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and
//         colossal
//         red
//         moon had captured the attention of scientists and adventurers alike. Many were drawn to its
//         beauty,
//         while others were intrigued by its potential resources. But Elara&apos;s mission was different.
//         She
//         was
//         sent to explore and document the planet&apos;s <span className={styles.blue}>secrets, with the hope of finding a new home for humanity.</span> Eos
//         was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal
//         red
//         moon
//         had captured the attention of scientists and adventurers alike. Many were drawn to its beauty,
//         while
//         others were intrigued by its potential resources. But Elara&apos;s mission was different. She
//         was
//         sent
//         to explore and document the planet&apos;s secrets, with the hope of finding a new home for
//         humanity.
//     </p>
// </div>