import {useState} from 'react';
import {auth} from '../FirebaseAuth';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // User created successfully, you can navigate or show a success message
            console.log('User created successfully');
            onClose(); // Close the popup after successful sign up
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h2 className="signup-title">Sign Up</h2>
                    <button className="close-button"
                        onClick={onClose}>
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit}
                    className="signup-form">
                    <div className="form-group">
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-input"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="form-input"/>
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
