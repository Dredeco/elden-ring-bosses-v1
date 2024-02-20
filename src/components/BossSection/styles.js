import styled from "styled-components"

export const BossSectionMain = styled.section`
    width: 100vw;
    height: fit-content;
    margin-top: 26px;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > button { 
        margin: 2rem 0;
        background-color: goldenrod;
        padding: 1rem .5rem;
        font-size: 1.2rem;
        border-radius: 10px;
        transition: all .4s;

        &:hover {
            background-color: #222;
            color: #fff;
            border: 1px solid goldenrod;
        }
    }
`

export const BossSectionContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    max-width: 1280px;
    padding: 1rem 2%;
    border: 2px solid goldenrod;
    background-color: rgba(22, 22, 22, .8);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > div {
        margin-top: 1rem;
        width: 400px;
        height: 400px;
        max-width: 32%;
        min-width: 32%;
    }
`