import { useState } from 'react';
import Chatbot from './ChatBot';
import Button from './Button';

function ToggleChatbotButton() {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleClick = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div>
            <Button onClick={handleClick}>
                {showChatbot ? 'Chatbot' : 'Chatbot'}
            </Button>
            {showChatbot && <Chatbot />}
        </div>
    );
}

export default ToggleChatbotButton;
