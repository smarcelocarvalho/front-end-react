import styled from 'styled-components';

export const MoviesContainer = styled.section`

    padding: 10px;
    background: gray;
    margin: 30px;
    border: 1px solid black;
    border-radius: 10px;

    ul {
        list-style: none;
        text-decoration: none;

        a:link {
            color: black;
            text-decoration: none;
        }
        a:visited {
            color: blue;
        }
        a:hover {
            background: green;
        }

    }
`;
