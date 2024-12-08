import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    onClickEvent: () => void;
    type?: "button" | "submit";
}

export const Button : React.FC<ButtonProps> = ({ children, disabled = false, onClickEvent, type ="button" }) => {
    return (
        <button
            className="cool-button"
            type={type}
            disabled={disabled}
            onClick={onClickEvent}
        >
            {children}
        </button>
    );
}
