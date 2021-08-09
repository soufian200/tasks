import { useContext } from "react"
import { TasksContext } from "../context/TasksContext";
import { ThemeContext } from "../context/ThemeContext"
import { Container, ListTasks, Msg } from "../styles/components/Tasks.style";
import Task from "./Task";


export default function Tasks() {

    const { theme } = useContext(ThemeContext);
    const { unCheckedTasks, itemsSelected, setItemsSelected } = useContext(TasksContext);


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
        <Container theme={theme}>
            {
                unCheckedTasks && unCheckedTasks.length === 0 ? <Msg>
                    <p>There are no tasks</p>
                </Msg> : <ListTasks theme={theme}>
                    {
                        unCheckedTasks.map(i => !i.checked && <Task key={i.id} i={i}
                            handleOnCheck={handleOnCheck}
                        />)
                    }
                </ListTasks>
            }

        </Container>
    </>

}