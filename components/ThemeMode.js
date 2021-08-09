import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { Shadow } from "../styles/mixins";


const Mode = styled(Shadow)`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Swticher = styled.div`
    width: 3rem;
    height: 1.2rem;
    background: ${({ switched }) => switched ? "#2196f3" : "#fff"} ;
    position: relative;
    border-radius: 2rem;
    border: solid .01rem #2196f3;
    transition: .3s;
    cursor: pointer;
    :before{
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: ${({ switched }) => switched ? "#fff" : "#2196f3"};
        border-radius: 50%;
        top: 50%;
        left: ${({ switched }) => switched ? "1.8rem" : ".1rem"};
        transform: translateY(-50%);
        transition: .3s;
    }
`;

export default function ThemeMode() {
    const { theme, switchTheme, mode } = useContext(ThemeContext);

    return <Mode theme={theme}>
        <p>Switch Mode</p>
        <Swticher onClick={switchTheme} switched={!mode} />
    </Mode>
}