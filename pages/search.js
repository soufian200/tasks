import { useContext } from "react";
import Head from 'next/head'
import ActionBar from "../components/ActionBar";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import { ThemeContext } from "../context/ThemeContext";
import { Container, ListTasks, Msg } from "../styles/components/Tasks.style";

export default function Search() {


    const { theme } = useContext(ThemeContext);
    const { query, search, itemsSelected, setItemsSelected } = useContext(TasksContext);

    // console.log("search :", search)

    const handleOnCheck = (id) => {

        const isExist = itemsSelected.findIndex(i => i === id);
        if (isExist !== -1) {
            // remove id
            setItemsSelected(ids => ids.filter(i => i !== id))
        } else {
            setItemsSelected(ids => [...ids, id]);
        }
    }



    return <>
        <Head>
            <title>Search for tasks</title>
        </Head>
        <ActionBar name="Search" tasksArr={search} type="search" />
        <Container theme={theme}>
            {
                search && search.length === 0 ? (!query.trim() ? <Msg>
                    <p>Search for tasks</p>
                </Msg> : <Msg>
                    <p><b style={{ color: "red" }}>{query}</b> Not Found</p>
                </Msg>) : <ListTasks theme={theme}>
                    {
                        search.map(i => !i.checked && <Task key={i.id} i={i}
                            handleOnCheck={handleOnCheck}
                        />)
                    }
                </ListTasks>
            }
        </Container>
    </>
}