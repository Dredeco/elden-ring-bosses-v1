import styled from "styled-components";

export const TagHeader = styled.header`
    width: 100%;
    padding: 2rem 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
        text-transform: uppercase;
        font-weight: 700;
    }
    ul {
        margin-top: 1rem;
        list-style: none;
        display: flex;
        gap: 1rem;
        font-size: 1.6rem;

        li {
            background-color: #222;
            padding: .5rem 2rem;
            cursor: pointer;
            border-radius: 10px;
            border: 1px solid #ccc;

            :hover {
                background-color: goldenrod;
                color: #222;
                transition: all .5s;
            }
        }
    }
`