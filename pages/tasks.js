import { useContext } from "react";
import Head from 'next/head'
import TasksComponent from "../components/Tasks"
import ActionBar from "../components/ActionBar";
import { TasksContext } from "../context/TasksContext";

export default function Tasks() {

    const { unCheckedTasks } = useContext(TasksContext);


    return <>
        <Head>
            <title>Welcome to tasks</title>
        </Head>
        <ActionBar name="Tasks" tasksArr={unCheckedTasks} />
        <TasksComponent />
    </>




}