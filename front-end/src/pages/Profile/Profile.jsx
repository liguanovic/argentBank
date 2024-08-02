import Account from '../../components/Account/Account';
import accountData from '../../Data/accountData.json';

import './Profile.css';

const Profile = () => {
    return (
        <main id="profile" className="main bg-dark">
            <header className="user">
                <h2>Welcome back<br />User Name</h2>
                <button>Edit Name</button>
            </header>
            {accountData.map((account, index) =>
                < Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            )}
        </main>
    );
};

export default Profile