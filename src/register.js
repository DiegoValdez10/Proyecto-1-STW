import React, { useState } from "react";
import "./register.scss";

function Register() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCircleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="conteiner">
            <div className="Tunned">
                <h1>STAY TUNED</h1>
            </div>
            <div className="texto"><p>Subscribe my newsletter and don’t miss any update on new products, promotions or even career events.</p></div>
            <div className="register-container">
                <div className="checkbox-container">
                    <div
                        className={`circle ${isChecked ? "clicked" : ""}`}
                        onClick={handleCircleClick}
                    ></div>
                    <p>I read and accept the privacy policy.</p>
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" required />
                    <button type="submit">Subscribe to newsletter</button>
                </div>
            </div>
        </div>
    );

}

export default Register;
