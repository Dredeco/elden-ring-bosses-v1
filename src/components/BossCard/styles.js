import styled from "styled-components"

export const BossesSection = styled.section`
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    margin: 1rem 2%;
    max-width: 1280px;
`

export const BossesList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 426px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const TagBossCard = styled.li`
    background-color: #000;
    padding: .5rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid gold;
    border-radius: 10px;
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
        :hover, :active {
            background-color: #222;
            color: #fff;
        }
    }
`