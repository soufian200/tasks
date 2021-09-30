import styled, { css } from "styled-components";
import { Shadow } from "../mixins";
import colors from "../../constants/colors"

const AddNewContainer = styled(Shadow)`
    margin-top: 8rem;
    max-width: 16rem;
`;

const Title = styled.h4`
    text-transform: capitalize;
    margin-bottom: 1rem
`;
const Form = styled.form`
    width: 100%;
    & input{
        width: 100%;
        background: ${({ bg }) => bg};
        padding: 1rem;
        border: 0;
        outline: 0;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        border-radius: .4rem;
    }
`;

const AddBtn = styled.button`
    padding: 1rem;
    width: 100%;
    background: ${colors.primary};
    opacity: ${({ disabled }) => disabled ? .6 : 1};
    border: 0;
    outline: 0;
    border-radius: .4rem;
    text-transform: capitalize;
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
    
    transition: .4s;

    ${({ disabled }) => !disabled && css`
    &:hover{
        background: ${colors.hoverPrimary};
        cursor: pointer;
    }
    `}
`;





export { AddNewContainer, Title, Form, AddBtn, };