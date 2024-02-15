const { default: styled } = require("styled-components");

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    input {
        width: 70%;
        max-width: 500px;
        height: 2rem;
        padding-left: .5rem;
        border-radius: 8px;
    }
`