import styled from "styled-components";

const Shadow = styled.div`
    box-shadow: 0 .3rem .6rem #00000016;
    background-color: #fff;
    padding: 1rem;
    border-radius: .4rem;
    // transition: .5s;
    background: ${({ theme }) => theme.bg};
`;

const Hr = styled.hr`{
    border: 0;
    height: .01rem;
    background-color: ${({ theme }) => theme.background};
    margin: .2rem 0;
    // transition: 1s;
  }`

const Center = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export { Shadow, Hr, Center };