import { useContext, useEffect } from "react"
import { AiOutlineClockCircle } from "react-icons/ai";
import { TasksContext } from "../context/TasksContext";

const Task = ({ i, handleOnCheck }) => {
    const { itemsSelected } = useContext(TasksContext);
    return <li>
        <input
            type="checkbox"
            checked={itemsSelected.findIndex(selectedId => selectedId === i.id) !== -1 ? true : false}
            value={i.id}
            onChange={(e) => handleOnCheck(i.id)} />
        <div className="task">
            <p>
                {i.task}
            </p>
            <div className="time">
                <AiOutlineClockCircle /> <span>{i.time.from} - {i.time.to}</span>
            </div>
        </div>
    </li>
}

export default Task;