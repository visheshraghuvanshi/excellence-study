import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../FirebaseAuth";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Reset() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        try {
            await sendPasswordResetEmail(auth, emailVal);
            alert("Check your email for password reset instructions");
            navigate("/");
        } catch (err) {
            alert(err.code);
        }
    };

    return (
        <div className="Reset">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" />
                <button type="submit">Reset</button>
            </form>
        </div>
    );
}

export default Reset;