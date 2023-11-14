import React, { useState } from 'react';
import './AdventurePage.css';

const AdventurePage = () => {
    const [stage, setStage] = useState(0);

    const handleOptionClick = (choice) => {
        switch (choice) {
            case 'talk':
                setStage(3);
                break;
            case 'leave':
                setStage(2);
                break;
            case 'pourVodka':
                setStage(4);
                break;
            case 'sus':
                setStage(5);
                break;
            case 'date':
                setStage(6);
                break;
            case 'sanmo':
                setStage(7);
                break;
            case 'horriblePerson':
                setStage(8);
                break;
            case 'getty':
                setStage(9);
                break;
            case 'movie':
                setStage(10);
                break;
            case 'question':
                setStage(11);
                break;
            case 'win':
                setStage(12);
                break;
            case 'playAgain':
                setStage(0);
                break;
            default:
                break;
        }
    };

    return (
        <div className="adventure-container">
            {stage === 0 && (
                <>
                    <h1 className="adventure-text">Your adventure starts here...</h1>
                    <button className="start-button" onClick={() => handleOptionClick('talk')}>Go</button>
                </>
            )}
            {stage === 2 && (
                <>
                    <h1 className="adventure-text">I guess it wasn't meant to be...</h1>
                    <button className="start-button" onClick={() => handleOptionClick('playAgain')}>Play Again?</button>
                </>
            )}
            {stage === 3 && (
                <>
                    <h1 className="adventure-text">You are at a Halloween party and see your friend talking to a guy.</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('pourVodka')}>Go talk to him</button>
                        <button onClick={() => handleOptionClick('leave')}>Leave the party</button>
                    </div>
                </>
            )}
            {stage === 4 && (
                <>
                    <h1 className="adventure-text">You start talking to him and find out his name is Jon. You...</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('date')}>Ask him to pour Malibu down your throat</button>
                        <button onClick={() => handleOptionClick('sus')}>Leave because J names are sus</button>
                    </div>
                </>
            )}
            {stage === 5 && (
                <>
                    <h1 className="adventure-text">You decided not to take a risk with a J name...</h1>
                    {/* Include additional text and options if necessary */}
                    <button className="start-button" onClick={() => handleOptionClick('playAgain')}>Play Again?</button>
                </>
            )}
            {stage === 6 && (
                <>
                    <h1 className="adventure-text">A little confused but aroused, he later asks you on a date. You...</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('leave')}>Flake because you don't want to get kidnapped</button>
                        <button onClick={() => handleOptionClick('sanmo')}>Agree to a date at the Santa Monica bluffs</button>
                    </div>
                </>
            )}
            {stage === 7 && (
                <>
                    <h1 className="adventure-text">The view is incredible. He tries to get you to hold his hand but you notice it's kind of sweaty...</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('getty')}>Hold it because you are a nice person</button>
                        <button onClick={() => handleOptionClick('horriblePerson')}>What the fuck?</button>
                    </div>
                </>
            )}
            {stage === 8 && (
                <>
                    <h1 className="adventure-text">You suck...</h1>
                    {/* Include additional text and options if necessary */}
                    <button className="start-button" onClick={() => handleOptionClick('playAgain')}>Play Again?</button>
                </>
            )}
            {stage === 9 && (
                <>
                    <h1 className="adventure-text">Your hands are wet, but it was worth it. Later, he asks you if you want to go to the Getty Villa. You...</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('leave')}>Middddddddd</button>
                        <button onClick={() => handleOptionClick('movie')}>Say yes :)</button>
                    </div>
                </>
            )}
            {stage === 10 && (
                <>
                    <h1 className="adventure-text">Such a joyous occasion, you think to yourself. How about spending the afternoon watching Dune at the Grove?</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('leave')}>Like no se</button>
                        <button onClick={() => handleOptionClick('question')}>Duneee :D</button>
                    </div>
                </>
            )}
            {stage === 11 && (
                <>
                    <h1 className="adventure-text">After driving you back, he asks if you want to be his lass. What say you?</h1>
                    <div className="options-container">
                        <button onClick={() => handleOptionClick('win')}>Ok</button>
                    </div>
                </>
            )}
            {stage === 12 && (
                <>
                    <h1 className="adventure-text">Good choice! You win!!!!11 :D</h1>
                    <div className="options-container">
                    <button className="start-button" onClick={() => handleOptionClick('playAgain')}>Play Again?</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdventurePage;
