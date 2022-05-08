import { MainContainer, WelcomeContainer, InformationContainer, PlatformName, PlatformSubName, PlatformDescription,
NewsletterContainer, InnerLeftContainer, InnerMiddleContainer, InnerRightContainer,
AnnouncementsContainer, UpdateContainer, Title, ReviewContainer } from '../styles/home.style';

{/*
    TRY TO FIGURE OUT HOW TO GET ANNOUNCEMENTS, NEWSLETTERS, REVIEWS, AND UPDATES INTO A
    CAROUSEL OR SLIDESHOW INSTEAD OF HAVING THEM SHOW AS IS ON SITE.
 */}

function Home() {
    return (
        <MainContainer>
            <WelcomeContainer>
                <div className="welcome-container">
                    <PlatformName>
                        <div id="plat-name">
                            <h1>Gawth3r Platform</h1>
                        </div>
                    </PlatformName>
                    <PlatformSubName>
                        <div id="plat-sub-name">
                            <h3>
                                A Place For Everyone
                                ~ For The People
                                ~ By The People
                            </h3>
                        </div>
                    </PlatformSubName>
                    <PlatformDescription>
                        <div id="plat-desc">
                            <p>
                                Hi and Welcome! Here on the home page, you can obtain access
                                to all of our content by clicking the <i>Join Us</i> button at
                                the top of the page, and sign up to become a member. We also
                                encourage you to join our discord so that you can stay current 
                                with our latest bot, website, game, and programming events and 
                                updates plus chat with other members across the globe! We even have
                                sections for members to be able to ask questions and further their 
                                knowledge, post useful resource links, and more. Also, with a dedicated 
                                support section (and staff), we will be able to bring you more adequate 
                                support with members from various parts of the community readily available
                                (when online) to help you with your latest bug, or issue! So come join us 
                                and be apart of something bigger and better  
                            </p>
                        </div>
                    </PlatformDescription>
                </div>
            </WelcomeContainer>
            {/* 
                CREATE RECURSION TO AUTO FILL EACH CAROUSEL WITH EACH DIVS
                INFORMATION AS IT'S INPUT INTO THE DATABASE. ARRAYS.LENGTH = N.DB.REQUEST
             */}
            <InformationContainer>
                <AnnouncementsContainer>
                    <div className="announcement-container">
                        <Title>
                            <h3>Announcements</h3>
                        </Title>
                        <InnerLeftContainer>
                            <div className="announcement-list">
                                <h1>Announcement InnerLeftDiv</h1>
                            </div>
                        </InnerLeftContainer>
                        <InnerMiddleContainer>
                            <div className="announcement-list">
                                <h1>Announcement InnerMidDiv</h1>
                            </div>
                        </InnerMiddleContainer>
                        <InnerRightContainer>
                            <div className="announcement-list">
                                <h1>Announcement InnerRigDiv</h1>
                            </div>
                        </InnerRightContainer>
                    </div>
                </AnnouncementsContainer>
                <NewsletterContainer>
                    <div className="newsletter-container">
                        <Title>
                            <h3>Newsletters</h3>
                        </Title>
                        <InnerLeftContainer>
                            <div className="newsletter-list">
                                <h1>Newsletter InnerLeftDiv</h1>
                            </div>
                        </InnerLeftContainer>
                        <InnerMiddleContainer>
                            <div className="newsletter-list">
                                <h1>Newsletter InnerMidDiv</h1>
                            </div>
                        </InnerMiddleContainer>
                        <InnerRightContainer>
                            <div className="newsletter-list">
                                <h1>Newsletter InnerRigDiv</h1>
                            </div>
                        </InnerRightContainer>
                    </div>
                </NewsletterContainer>
                <ReviewContainer>
                    <div className="reviews-container">
                        <Title>
                            <h3>Reviews</h3>
                        </Title>
                        <InnerLeftContainer>
                            <div className="review-list">
                                <h1>Review InnerLeftDiv</h1>
                            </div>
                        </InnerLeftContainer>
                        <InnerMiddleContainer>
                            <div className="review-list">
                                <h1>Review InnerMidDiv</h1>
                            </div>
                        </InnerMiddleContainer>
                        <InnerRightContainer>
                            <div className="review-list">
                                <h1>Review InnerRigDiv</h1>
                            </div>
                        </InnerRightContainer>
                    </div>
                </ReviewContainer>
                <UpdateContainer>
                    <div className="update-container">
                        <Title>
                            <h3>Updates</h3>
                        </Title>
                        <InnerLeftContainer>
                            <div className="update-list">
                                <h1>Update InnerLeftDiv</h1>
                            </div>
                        </InnerLeftContainer>
                        <InnerMiddleContainer>
                            <div className="update-list">
                                <h1>Update InnerMidDiv</h1>
                            </div>
                        </InnerMiddleContainer>
                        <InnerRightContainer>
                            <div className="update-list">
                                <h1>Update InnerRigDiv</h1>
                            </div>
                        </InnerRightContainer>
                    </div>
                </UpdateContainer>
            </InformationContainer>
        </MainContainer>
    );
}

export default Home;