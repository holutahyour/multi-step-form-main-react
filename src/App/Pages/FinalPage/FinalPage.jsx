import React from "react";
import "./FinalPage.css";

function FinalPage() {
  return (
    <div className="final-page">
      <div>
        <img src="images/icon-thank-you.svg" alt="thank you" className="final-page__icon"/>
        <h1 className="final-page__header">Thank you!</h1>
        <p className="final-page__details">
          Thanks for confirming your subscription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default FinalPage;
