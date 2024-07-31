import React from 'react';

import './Account.css';

const Account = ({ title, amount, description }) => {
    return (
        <section id="account">
            <header>
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </header>
            <button className="transaction-button">View transactions</button>
        </section>
    )
}

export default Account

