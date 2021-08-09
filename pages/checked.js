import { useContext } from "react";
import Head from 'next/head'
import { AiOutlineClockCircle } from "react-icons/ai";
import styled from "styled-components";
import ActionBar from "../components/ActionBar";
import { TasksContext } from "../context/TasksContext";
import { ThemeContext } from "../context/ThemeContext";
import { Container, ListTasks, Msg } from "../styles/components/Tasks.style";


export default function Checked() {
    const { theme } = useContext(ThemeContext);
    const { checkedTasks } = useContext(TasksContext);

    return <>
        <Head>
            <title>Checked tasks</title>
        </Head>
        <ActionBar name="Checked" />
        <Container theme={theme}>
            {
                checkedTasks && checkedTasks.length === 0 ? <Msg>
                    <p>There are no tasks checked</p>
                </Msg> : <ListTasks theme={theme}>
                    {
                        checkedTasks.map(i => <li key={i.id}>

                            <div className="task">
                                <p style={{ color: "#888888", textDecoration: "line-through" }}> {i.task}
                                </p>
                                <div className="time">
                                    <AiOutlineClockCircle /> <span>{i.time.from} - {i.time.to}</span>
                                </div>
                            </div>
                        </li>)
                    }
                </ListTasks>
            }

        </Container>
    </>
}