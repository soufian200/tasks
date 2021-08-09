import styled from "styled-components";
import { Shadow } from "../mixins";

const SearchBox = styled(Shadow)`
    display: flex;
    padding: 0 1rem;
    align-items: center;
    width: 35rem;

    & span{
        // color: #000;
        font-size: 1rem;
        padding-left: 1rem;
        border-left: solid .1rem #727171;

        & svg{
            color: #727171;
            font-size: 1.1rem;
        }
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    background-color: transparent;
    outline: 0;
    border: none;
`;
export { SearchBox, Input }