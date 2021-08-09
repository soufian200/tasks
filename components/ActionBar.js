import { useContext } from "react";
import { BsCheckAll, } from "react-icons/bs";
import { FiTrash, } from "react-icons/fi";
import { BiSelectMultiple, } from "react-icons/bi";
import { TasksContext } from "../context/TasksContext";
import { Bar, H1, Btns, Select, Btn, ClearBtn } from "../styles/components/ActionBar.style";




export default function ActionBar({ name, tasksArr }) {

    const {
        itemsSelected,
        setItemsSelected,
        clearChecks,
        removeTask,
        unCheckedTasks,
        checkedTasks,
        check } = useContext(TasksContext);
    /**
     * Toggle between select all & select none
     * */
    const handleSelectionToggle = () => {
        // select none
        if (itemsSelected.length === tasksArr.length) return setItemsSelected([])

        // select all
        setItemsSelected(tasksArr.map(task => task.id));
    }



    return <Bar>
        <H1>{name}</H1>
        {name === "Checked" && checkedTasks.length > 0 && <ClearBtn onClick={clearChecks}>clear</ClearBtn>}

        {
            itemsSelected.length > 0 && <Btns>
                <Select>
                    <span>{itemsSelected.length} Selected</span>
                </Select>
                <Btn onClick={handleSelectionToggle}>
                    <BiSelectMultiple />
                    <span>select {itemsSelected.length === tasksArr.length ? "none" : "all"}</span>
                </Btn>
                <Btn onClick={check}>
                    <BsCheckAll />
                    <span>check</span>
                </Btn>
                <Btn onClick={() => removeTask(tasksArr)}>
                    <FiTrash />
                    <span>remove</span>
                </Btn>

            </Btns>
        }

    </Bar>

}