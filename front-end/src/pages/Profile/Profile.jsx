import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProfile, editUsername } from '../../Redux/actions';
import Account from '../../components/Account/Account';
import accountData from '../../Data/accountData.json';

import './Profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [editing, setEditing] = useState(false);
    const [newuserName, setNewuserName] = useState('');

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    useEffect(() => {
        setNewuserName(user.userName || '');
    }, [user]);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(editUsername({ userName: newuserName }));
        setEditing(false);
    };

    const handleCancel = () => {
        setNewuserName(user.userName || '');
        setEditing(false);
    };

    return (
        <main id="profile" className="main bg-dark">
            {!editing ? (
                <header className="user">
                    <h2>Welcome back<br />{user.firstName} {user.lastName}!</h2>
                    <button onClick={() => setEditing(true)}>Edit Name</button>
                </header>
            ) : (
                <section className='edit'>
                    <h2>Edit user info</h2>
                    <fieldset>
                        <label htmlFor="newuserName">User Name: </label>
                        <input
                            type="text"
                            id="newuserName"
                            placeholder="Enter New userName"
                            value={newuserName}
                            onChange={(e) => setNewuserName(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            value={user.firstName || ''}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            value={user.lastName || ''}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <form>
                        <button type="submit" onClick={handleSave} className='save-button'>Save</button>
                        <button type="button" onClick={handleCancel} className='cancel-button'>Cancel</button>
                    </form>
                </section>
            )}

            {accountData.map((account, index) =>
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            )}
        </main>
    );
};

export default Profile;
