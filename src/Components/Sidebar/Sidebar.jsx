// Sidebar.jsx
import React,{useState} from 'react';
import styles from './Sidebar.module.scss';
import arrowSquareRight from "../../assets/arrow-square-right.svg";
import CircleNumber from "../CircleNumber/CircleNumber.jsx";
import NumberBox from "../NumberBox/NumberBox.jsx";
import UpArrow from "../../assets/arrow-down.svg";
import TranslucentBar from "../TranslucentBar/TranslucentBar.jsx";
import Button from "../Button/Button.jsx";

const Sidebar = ({isSidebarVisible, setIsSidebarVisible}) => {
    const [isHidden, setIsHidden] = useState(false);
    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className={`${styles.sidebar} ${!isSidebarVisible ? `${styles.hidden}` : ''}`}>
            <div className={styles.ansAls}>
                <div className={styles.title}>
                    <p>Answer Analysis</p>
                    {!isSidebarVisible ? <img src={arrowSquareRight} onClick={() => setIsSidebarVisible(!isSidebarVisible)}/> : <img src={arrowSquareRight} className={styles.DownArrow} onClick={() => setIsSidebarVisible(!isSidebarVisible)}/>}
                </div>
                <div className={styles.inner}>
                    <div className={styles.heading}><p>Score Analysis</p></div>
                    <div className={styles.translucent}>
                        <div className={styles.circleNumber}>
                            <CircleNumber number={1} text={4.8}/>
                        </div>
                        <div className={styles.written}>
                            <p>Overall band score</p>
                            <div className={styles.inline}><strong>4.8/10</strong><small>(needs improvement)</small>
                            </div>
                        </div>
                    </div>
                    <div className={isHidden?`${styles.isHidden}`:''}>
                        <div className={styles.circleNumberScore}>
                            <div className={styles.group}>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={2} text={1.8}/>
                                    <p>Cohesion & Coherence</p>
                                </div>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={3} text={7.8}/>
                                    <p>Lexical Resource Analysis</p>
                                </div>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={4} text={5.8}/>
                                    <p>Grammatical Range</p>
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={5} text={1.8}/>
                                    <p>Handling if more than 3</p>
                                </div>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={6} text={7.8}/>
                                    <p>Handling if more than 3</p>
                                </div>
                                <div className={styles.innerGroup}>
                                    <CircleNumber number={7} text={5.8}/>
                                    <p>Handling if more than 3</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <p>Text score: 4.8 out of 10. This score represents the quality of writing in this document. You
                                can
                                increase it by addressing Grammarly&apos;s suggestions.</p>
                        </div>
                        <div className={styles.container2}>
                            <div className={styles.heading}>
                                <p>Cohesion & Coherence</p>
                                <NumberBox number={"6.0"} type={1}/>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={4}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={5}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                            <div className={styles.heading}>
                                <p>Lexical Resource Analysis</p>
                                <NumberBox number={"6.0"} type={2}/>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={4}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={5}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                            <div className={styles.heading}>
                                <p>Grammatical Range</p>
                                <NumberBox number={"6.0"} type={3}/>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={4}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                            <div className={styles.text}>
                                <NumberBox number={"6.0"} type={5}/>
                                <p>Sub part of coherence and cohesion</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.link} onClick={handleHidden}>
                            {isHidden ? <p>Show full analysis</p> : <p>Hide full analysis</p>}
                            {isHidden ? <img className={styles.DownArrow} src={UpArrow}/> : <img src={UpArrow}/>}
                        </div>
                    </div>
                    <div className={styles.heading}><p>Text Analysis</p></div>
                    <TranslucentBar number={"06"} type={1} text={"Common mistakes found"}/>
                    <TranslucentBar number={"08"} type={2} text={"Repetitive words found"}/>
                    <TranslucentBar number={"12"} type={3} text={"Suggestion for more effectiveness"}/>
                    <div className={styles.gapper}>
                        <div className={styles.heading}><p>Sharing and downloads</p></div>
                    </div>
                    <div className={styles.share}>
                        <Button type={"download"}/>
                        <Button type={"share"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;