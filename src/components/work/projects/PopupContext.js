import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};

export const PopupProvider = ({ children }) => {
    const [activePopup, setActivePopup] = useState(null);

    const showPopup = (popupId, message, duration = 2000) => {
        setActivePopup({ id: popupId, message });
        setTimeout(() => {
            setActivePopup(null);
        }, duration);
    };

    const hidePopup = () => {
        setActivePopup(null);
    };

    const isPopupVisible = (popupId) => {
        return activePopup?.id === popupId;
    };

    return (
        <PopupContext.Provider value={{
            showPopup,
            hidePopup,
            isPopupVisible,
            activePopup
        }}>
            {children}
        </PopupContext.Provider>
    );
}; 