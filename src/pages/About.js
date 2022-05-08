import { AboutContainer, AboutTitle, AboutSubtitle, AboutBackStory,
MemberContainer, MainContainer, Member, Title, Intro } from '../styles/about.style';

function About() {
    return(
        <MainContainer>
            <AboutContainer>
                <div className="about-container">
                    <AboutTitle>
                        <div id="ab-title">
                            <h1>The Backstory To Gawth3r</h1>
                        </div>
                    </AboutTitle>
                    <AboutSubtitle>
                        <div id="ab-subtitle">
                            <h3>Did You Know?</h3>
                            <p>
                                Gawth3r originally started out as
                                <a
                                href="https://github.com/shellbyy0124?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                                >ButtlerBot
                                </a>
                            </p>
                        </div>
                    </AboutSubtitle>
                    <AboutBackStory>
                        <div id="back-story">
                            <p>
                            Yep! Gawth3r was once known as Buttlerbot. Buttlerbot came about
                            back around the year 2019 with my best friend, Chris. We were chilln'
                            one day and I was watching him program and found it to be quite interesting.
                            I started asking questions, and what different things did plus I would name
                            things and bet that he couldn't do it. Boy..he sure could, haha! I decided at
                            that point that I wanted to learn how to do this. The first thing I had to
                            decide on was, "What is something you can bring to the table that someone else
                            already hasn't?" -Chris. I told him that I use discord and wondered if the bots
                            were just simply premade, and you got them from the website or were they created
                            by people like he and i? He replied that we could make one ourselves, so then the
                            adventure began. To fast-forward a bit, though, he tried to get me to understand
                            that mastering the basics was a very important building-block, but I refused to
                            listen. After numerous hours of begging for help, pissing people off, getting pissed
                            off, throwing my computer across the room....you get the point, I had finally
                            started understanding the code and how it worked, but it was just with building a
                            discord bot. Outside of the discord python library, I couldn't tell you, or show you, 
                            how to do anything. However, I digress. After much struggle with trying to figure out 
                            who and what I wanted my bot to be I decided I wanted to make him my own type of smart 
                            assistant that worked within the discord platform. Multiple, Multiple repositories later,
                            I switched gears and started working ButtlerBot from being a discord assistant to being 
                            an at-home assistant like Alexa, Google, and Amazon. It was going alright for a while, but 
                            then my work environment became corrupt and I just couldn't bring myself to re-construct
                            the project. So then I took a break from coding, played some video games, and now we
                            (Chris and I) are back to bring you the best platform available to any and all members
                            within the discord community, and more.
                            </p>
                        </div>
                    </AboutBackStory>
                </div>
            </AboutContainer>
            <MemberContainer>
                <div className="member-container">
                    <Title>
                        <h3>KasMek's Programming Team - Gawth3r Division</h3>
                    </Title>
                    <Member>
                        <div className="member">
                            <Title>
                                <h3>Mekasu Renae<br />
                                    The Owner and CEO/CFO Of Gawth3r, and KasMek's Programming Team
                                </h3>
                            </Title>
                            <Intro>
                                <p>
                                    As one of the Owners and CEO's of Gawth3r, I find it a privilege to serve the
                                    community by bringing them one of the most well-rounded, all-inclusive platforms 
                                    that impliments functions, commands, games, and more for every category of life
                                    that a person can fit in. With Gawth3r's primary concern being Cyber Security and 
                                    Software Development, we strive to bring you the best as we are in the process of 
                                    developing the community a React Framework driven website, Discord Platform Integration,
                                    GTA-V FiveM Mods using the QBCore-Framework, and more! The best place to reach me
                                    for any questions/concerns about Gawth3r's Public Code, then please<span> </span> 
                                    <a href="https://github.com/mekasu0124/mekasu0124.github.io/issues">click here</a>.

                                </p>
                                <p>
                                    Links:<br />
                                    <a href="https://www.github.com/mekasu0124">GitHub</a><span> | </span>
                                    <a href="https://www.linkedin.com/in/shellbyy-lisenby-368523200/">LinkedIn</a><span> | </span>
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a>
                                </p>
                            </Intro>
                        </div>
                    </Member>
                    <Member>
                        <div className="member">
                            <Title>
                                <h3>KataReborn<br />
                                    The Owner and CEO/CTO of Gawth3r, and KasMek's Programing Team
                                </h3>
                            </Title>
                            <Intro>
                                <p>Enter Self-Bio Here</p>
                                <p>
                                    Links:<br />
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a><span> | </span>
                                    <a href="">Empty</a>
                                </p>
                            </Intro>
                        </div>
                    </Member>
                </div>
            </MemberContainer>
        </MainContainer>
    );
}

export default About;
