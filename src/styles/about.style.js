import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2%;
    color: darkgray;
    text-align: center;
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
`;

export const AboutContainer = styled.div`
    display: flexbox;
    justify-content: center;
    flex-direction: column;
    color: darkgray;
    text-align: center;
    background: linear-gradient(
        to bottom,
        #282c34,
        black,
        #282c34
    );
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
`;

export const AboutTitle = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    font-size: 180%;
`;

export const AboutSubtitle = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 180%;
`;

export const AboutBackStory = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 150%;
`;

export const MemberContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: darkgray;
    background: linear-gradient(
        to bottom,
        #282c34,
        black,
        #282c34
    );
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
`;

export const Member = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: darkgray;
    background: linear-gradient(
        to bottom,
        #282c34,
        black,
        #282c34
    );
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h3`
    font-size: 150%;
    width: 90%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Intro = styled.p`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 150%;
    a {
        color: darkgray;
    }
`;