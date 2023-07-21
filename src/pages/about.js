import linkedin_logo from "../img/linkedinlogo.svg";
import tiktok_logo from "../img/TikToklogo.svg";
const About = () => {
    return (
        <>
            <br />
            <h1 id="section_name">About</h1>
            <h5>For more information, please feel free to check our social medias :</h5>

            <div id="contact">
                <a href="https://www.linkedin.com/in/tindoori-labs-62498523a/">
                    <img src={linkedin_logo} /></a>
            </div>
            <br />
            <div id="contact">
                <a href="https://www.tiktok.com/@tindoori">
                    <img src={tiktok_logo} alt="tiktoklogo" />
                </a>
            </div>
            <br />
            <br />

        </>

    );

}
export default About;