import styled from "styled-components";
import { Center, Shadow } from "../mixins";

const Container = styled(Shadow)`
    width: 100%;
    max-width: 40rem;
    min-width: 20rem;
`;

const ListTasks = styled.ul`
    & li{
        display: flex;
        margin-bottom: 1rem;
        align-items: center;

        & .task{
            padding: 1rem;
            font-size: 1rem;
            font-weight: bold;
            text-transform: capitalize;
            margin-left: 1rem;
            border-radius: .3rem;
            background: ${({ theme }) => theme.muted};
            border: solid .01rem ${({ theme }) => theme.border};
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            & > .time{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                    margin-top: 2rem;

                & >svg{
                    font-size: 1.3rem
                    
                }
                & span{
                    margin-left: .3rem;
                    font-size: .8rem
                }
            }
        }
    }
`;

const Msg = styled(Center)`
    padding: 2rem;

    & > p{
        color: #7e7e7e;
    }
`;

export { Container, ListTasks, Msg }