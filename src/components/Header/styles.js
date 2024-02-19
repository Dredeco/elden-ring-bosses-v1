import styled from "styled-components";

const TagHeader = styled.header`
    width: 100%;
    padding: 2rem 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        gap: 1rem;
    }

    > div > button {
        font-size: 1.2rem;
        position: relative;
        top: 1rem;
        background-color: rgba(0, 0, 0, .8);
        padding: .5rem 2rem;
        color: goldenrod;
        border: 1px solid #ccc;
        z-index: 10;
        cursor: pointer;
        border-radius: 10px;
        transition: all .4s;
        font-family: "Kanit", sans-serif;

        :hover {
            background-color: goldenrod;
            color: #222;
        }
    }

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
export default TagHeader