import "../css/content.css";
import { useState } from "react";

const Home = () => {

    const [email, setEmail] = useState(" hhhh");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The email you entered was: ${email}`);
    }

    return (
        <>
            {
                /*
      <div className="homeContent">
                    <div id="home_div" className="email_div">
                        <span className="email_span">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
    
                                    id="email-input"
                                    placeholder="tindoori@tindoooori.com" />
                                <input id="email-submit-button" type="submit" value="Subscribe" />
                            </form>
                        </span>
                    </div>
                    <hr />
    
                </div>
                */
            }

        </>

    );
}
export default Home;