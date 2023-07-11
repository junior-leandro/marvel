import styled from "styled-components";

export const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    width: 40vw;
    min-width: 355px;
    max-width: 650px;
    padding-left: .9em;
    background-color: #f2f2f2;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 6px 2px var(--shadow);
    font-size: 20px;
    
    & input {
        flex: 1;
        background-color: transparent;
        border: none;
        font-size: 20px;
        padding: .5em 1em .5em .3em;

        &::placeholder {
            color: #000000;
            font-size: 20px;
        }
    }

    & svg {
        font-size: 24px;
        margin-right: .5em;
    }

    @media (max-width: 430px) {
        min-width: 280px;
        width: 100%;

    }
`