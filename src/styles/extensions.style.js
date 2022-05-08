import styled from 'styled-components';


export const ExtensionsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: darkgray;
    width: 90%;
`;

export const H3 = styled.h3`
    font-size: 200%;
    color: darkgray;
    text-decoration: underline;
`;

export const ArtDisplay = styled.div`
    word-spacing: 2px;
    width: 100%;
    font-size: 150%;
    border-radius: 20px;
    background: linear-gradient(
        to bottom,
        black,
        #282c34,
        black,
        #282c34,
        black
    );
    a {
        color: darkgray;
    }
`;

export const GamesDisplay = styled.div`
    display: float;
`;

export const ProgrammingDisplay = styled.div`
    display: float;
`;

export const BoxOne = styled.div`
    float: left;
    word-spacing: 2px;
    width: 45%;
    font-size: 100%;
    border-radius: 20px;
    background: linear-gradient(
        to bottom,
        black,
        #282c34,
        black,
        #282c34,
        black
    );
    padding: 2%;
`;

export const BoxTwo = styled.div`
    float: left;
    word-spacing: 2px;
    width: 45%;
    font-size: 100%;
    border-radius: 20px;
    background: linear-gradient(
        to bottom,
        black,
        #282c34,
        black,
        #282c34,
        black
    );
    margin-left: 2%;
    padding: 2%;
`;
