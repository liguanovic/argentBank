import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../../Redux/actions';
import Account from '../../components/Account/Account';
import accountData from '../../Data/accountData.json';

import './Profile.css';

const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    console.log('User from state:', user);

    return (
        <main id="profile" className="main bg-dark">
            <header className="user">
                <h2>Welcome back<br />{user.firstName} {user.lastName}!</h2>
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