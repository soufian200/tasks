import AddNewTask from "../components/AddNewTask";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import main from "../styles/layouts/main";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png"
import Image from 'next/image';
import ThemeMode from "../components/ThemeMode";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 100vh;
`;

export default function Main({ children }) {
    const { theme } = useContext(ThemeContext);

    return <Container theme={theme}>
        <div>
            <div id={styles.logo}>
                <Image src={logo} alt="tasks" />
            </div>
        </div>
        <main className="body">
            <section >
                <Menu />
                <ThemeMode />
            </section>
            <section className="sec todos_body">
                <Nav />

                {/* <Tasks /> */}
                {children}
            </section>
            <section>
                <AddNewTask />
            </section>

            <style jsx>{main}</style>
        </main>
    </Container>
}