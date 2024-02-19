import styled from 'styled-components'

export const TagBossInfo = styled.section`
    display: flex;
    justify-content: center;
`
export default TagBossInfo

export const Container = styled.div`
    margin: 1rem 2%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: rgba(0,0,0,.8);
    padding: 2rem 2%;
    border: 2px solid goldenrod;
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Playfair Display", serif;
    h1 {
        text-transform: uppercase;
        text-decoration: underline;
        text-decoration-color: goldenrod;
        text-underline-offset: .5rem;
        line-height: 3rem;
        font-family: "Kanit", sans-serif;
    }
    img {
        margin: 1rem 0;
        max-height: 20rem;
        max-width: 50rem;
    }
    span {
        font-style:oblique;
    }
    a {
        background-color: #fff;
        padding: .5rem 1rem;
        border-radius: 10px;
        width: 50%;
        max-width: 15rem;
        margin-top: 1.5rem;
        text-decoration: none;
        color: #000;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`
export const GeneralInfo = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    P {
        color: #ddd;
        strong {
            color: #fff;
        }
    }
`