import { SignupDisplay, Disclaimer, Title, Form, LabelStyle,
LabelStyle2, LabelStyle3, LabelStyle4, LabelStyle5, Buttons } from '../styles/signup.style';
import '../styles/signup.css';

function Signup() {
    return (
        <SignupDisplay>
            <div className="footer">
                <Disclaimer>
                    <Title>Disclaimer:</Title>
                    <ol>
                        <li>
                            By signing up, you agree to and acknowledge that
                            Gawth3r may use your general information (username, discord tag, etc.)
                            as displayable content within the Discord and Website Extensions for use 
                            of contests, tournaments, or other aspects of the Website or Discord
                            Extension that Gawth3r may need to display your information. If you do 
                            not agree to this, then you may not sign up for this website.
                        </li>
                        <li>
                            By signing up, you agree to and acknowledge that you have read and
                            agreed to <a href="">Gawth3rs' Rules</a> and <a href="">Gawth3rs' Punishment Table</a>.
                            If you choose not to agree to these terms, then you may not sign up for this website.
                        </li>
                    </ol>
                </Disclaimer>
            </div>
            <div className="information">
                <Title><h3>Thanks For Joining Gawth3r!</h3></Title>
                <Form>
                    <form>
                        <div className="tooltip">Username Rules
                            <span className="tooltiptext">
                                Please keep your username simple. Do not use special
                                ALT-#### characters, or characters that would make it 
                                difficult to search for your user ID or discord tag.
                            </span>
                        </div>
                        
                        <span> | </span>

                        <div className="tooltip">How To Find DiscordID
                            <span className="tooltiptext">
                                To find your Discord ID: Open Discord, Find your name 
                                on the right side of any server you are in, then right 
                                click your name and click copy ID. If you do not see 
                                this option, then go into your settings, Advanced, and 
                                turn on Developer Mode then follow the steps at the 
                                beginning.
                            </span>
                        </div>

                        <span> | </span>

                        <div className="tooltip">Password Rules
                            <span className="tooltiptext">
                                Password Requirements:
                                <ul>
                                    <li>Minimum 8 Characters - Maximum 16 Characters</li>
                                    <li>At least 1 Number</li>
                                    <li>At least 1 Capitol Letter</li>
                                    <li>At least 1 Lowercase Letter</li>
                                    <li>At least 1 Special Character</li>
                                </ul>
                            </span>
                        </div>
                        
                        <br /><br />

                        <LabelStyle>
                            <label for="uname">Create A Username: </label>
                        </LabelStyle>
                        <input id="uname"></input><br />

                        <LabelStyle2>
                            <label for="discId">Enter Discord Tag: </label>
                        </LabelStyle2>
                        <input id="discId"></input><br />

                        <LabelStyle3>
                            <label for="pw">Create A Password: </label>
                        </LabelStyle3>
                        <input id="pw"></input><br />

                        <LabelStyle4>
                            <label for="pwc">Confirm Password: </label>
                        </LabelStyle4>
                        <input id="pwc"></input><br />

                        <LabelStyle5>
                            <label for="email">Enter Discord Email: </label>
                        </LabelStyle5>
                        <input id="email"></input><br />

                        <Buttons>
                            <input className="subCancel" type="submit" value="Cancel" onClick=""></input>
                            <input className="subSub" type="submit" value="Register" onClick=""></input>
                        </Buttons>
                    </form> 
                </Form>
            </div>
        </SignupDisplay>
    );
}

export default Signup;