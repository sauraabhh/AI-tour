import { useState } from 'react';
import Chatbot from './ChatBot';

function ToggleChatbotButton() {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleClick = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
            </button>
            {showChatbot && <Chatbot />}
        </div>
    );
}

export default ToggleChatbotButton;
