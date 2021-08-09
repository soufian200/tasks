import styled from "styled-components";
import { Shadow } from "../mixins";
import colors from "../../constants/colors";

const Profile = styled.div`
    display:flex;
    align-items: center;
    padding: .3rem;
    margin-left: .7rem;
`;
const Pic = styled.div`
    width: 2.6rem;
    height: 2.6rem;
    background: #673ab7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .6rem;

    & h3{
        text-transform: capitalize;
        color: white;
        font-size: 1rem;
    }
`;
const Username = styled.h3`
    text-transform: capitalize;
    font-size: 1rem;
`;


const MenuContainer = styled(Shadow)`
    margin-top: 8rem;
    padding: 0rem;
    & ul{
        padding: 1rem;
        padding-top: 1rem;
        & li{
            & a{
                display: flex;
                align-items: center;
                padding: .5rem 3rem;
                padding-left: 0;
                margin-bottom: .1rem;
                font-weight: 600;
                cursor: pointer;
                

                &:hover{
                    color: ${colors.primary};
                    transition: .3s;
                }
                & span{
                    text-transform: capitalize;
                    margin-left: .5rem;
                    font-size: 1.2rem;
                    
                }

                & svg{
                    font-size: 1.4rem;
                }
            }
        }
    }
`;
export { MenuContainer, Profile, Pic, Username }