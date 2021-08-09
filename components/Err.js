import styled from "styled-components";
import { BiErrorAlt } from "react-icons/bi"

const Error = styled.p`
    color: red;
    font-size: .7rem;
    margin-bottom: .2rem;
    display: flex;
    align-items:center;

    & svg{
        font-size: 1rem;
        margin-right: .3rem
    }
`;
export default function Err({ msg }) {
    return <Error><BiErrorAlt />{msg}</Error>
}