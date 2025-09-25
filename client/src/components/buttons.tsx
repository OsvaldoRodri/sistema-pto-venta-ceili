import React from 'react';
import '../styles/buttons.css';


type ButtonProps = {
    children: React.ReactNode;
};

function ButtonPrimary({ children }: ButtonProps) {
    return (
        <button className="primary">{children}</button>
    );
}
export default ButtonPrimary;