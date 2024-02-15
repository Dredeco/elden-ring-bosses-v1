const { default: styled } = require("styled-components");

export const Container = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,.7);
    height: 100vh;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    p {
        font-size: 1.6rem;
    }
`