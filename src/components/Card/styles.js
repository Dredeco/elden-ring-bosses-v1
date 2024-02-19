import styled from "styled-components";

export const TagCard = styled.div`
    background-color: rgba(0, 0, 0, .5);
    padding: .5rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-family: "Playfair Display", serif;
    img {
        width: 100%;
        min-height: 12rem;
    }
    h3 {
        text-transform: uppercase;
        margin: .4rem 0;
        text-decoration: underline;
        text-decoration-color: goldenrod;
        text-underline-offset: .3rem;
        font-family: "Kanit", sans-serif;
    }
    h4 {
        margin: 0;
        border: 0;
        padding: 0;
    }
    span {
        margin-bottom:.7rem;
    }
    a {
        text-decoration: none;
        color: #222;
        background-color: goldenrod;
        padding: .5rem 1rem;
        border-radius: 10px;
        border: 1px solid #444;
        text-transform: uppercase;
        font-weight: 700;
        width: 70%;
        transition: all .4s;

        :hover, :active {
            background-color: #222;
            color: #fff;
        }
    }
`