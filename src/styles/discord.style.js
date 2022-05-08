import styled from 'styled-components';


export const DiscordDisplay = styled.div`
    display: flexbox;
    justify-content: center;
    flex-direction: column;
    color: darkgray;
    background: linear-gradient(
        to bottom,
        #282c34,
        black,
        #282c34,
        black
    );
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
`;

export const DiscordTitle = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 220%;
    text-align: center;
`;

export const AppLinks = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    a {
        color: darkgray;
    }
`;

export const TablesDescription = styled.p`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 170%;
    text-align: center;
`;

export const TablesContainer = styled.div`
    color: darkgray;
    width: 90%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid darkgray;
    padding: 1%;
`;

export const TableOne = styled.table`
    border: 5px solid #282c34;
    border-radius: 20px;
    margin-top: 2%;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(
        to bottom,
        black,
        #282c34,
        black,
        #282c34,
        black
    );
    caption {
        font-size: 180%;
    }
`;

export const TableTwo = styled.table`
    border: 5px solid #282c34;
    border-radius: 20px;
    margin-top: 2%;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    background: linear-gradient(
        to bottom,
        black,
        #282c34,
        black,
        #282c34,
        black
    );
    caption {
        font-size: 180%;
    }
`;

export const TH = styled.th`
    border: 5px solid #282c34;
    border-radius: 20px;
    font-size: 180%;
    margin-left: auto;
    margin-right: auto;
`;

export const TD = styled.td`
    border: 5px solid #282c34;
    border-radius: 20px;
    font-size: 150%;
    margin-left: auto;
    margin-right: auto;
    a {
        color: darkgray;
    }
`;