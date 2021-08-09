import styled from "styled-components";
import colors from "../../constants/colors";

const Bar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
`;
const H1 = styled.h1``;
const Btns = styled.div`
    display: flex;
    align-items: center;
`;
const Select = styled.div``;
const Btn = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    transition: .3s;
    padding: .2rem .6rem;
    border-radius: 5rem;
    color: #7e7e7e;
    
    & > span{
        margin-left: .2rem;
        text-transform: capitalize;
    }

    &:hover{
        cursor: pointer;
        opacity: .7;
    }
`;

const ReverseTasks = styled.div`
    padding: .4rem;
    background: #ddd;
    border-radius: .4rem;
    transition: .3s;
    :hover{
        cursor: pointer;
        background: #ccc;
    }
`;

const ClearBtn = styled.button`
    padding: .6rem 2rem;
    text-transform: capitalize;
    border-radius: 0.4rem;
    border: 0;
    background: ${colors.primary};
    color: #fff;
    cursor: pointer;
    transition: .3s;

    &:hover{
        background: ${colors.hoverPrimary};
    }

`;

export { Bar, H1, Btns, Select, Btn, ReverseTasks, ClearBtn }