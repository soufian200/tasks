import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { ThemeContext } from "../context/ThemeContext";
import { AddNewContainer, Title, Form, AddBtn, } from "../styles/components/AddNewTask.style";
import Err from "./Err";


export default function AddNewTask() {

    const { theme, } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [fromErr, setFromErr] = useState(false)
    const [toErr, setToErr] = useState(false)
    const { addTask, } = useContext(TasksContext);

    /**
     * validate hrs
     * @params hr & name
     * @return [int]
     * */
    const checkHr = (hr, name = "from") => {

        // e.g. hr "08:00"
        // split to arr
        let arrhr = hr.split(":");
        // convert from str to int & check if pos
        arrhr = arrhr.map(hr => { if (Number(hr) > -1) return Number(hr) })
        let isValid = arrhr.length === 2 &&
            hr.length === 5 &&
            arrhr[0] >= 0 &&
            arrhr[0] <= 23 &&
            arrhr[1] >= 0 &&
            arrhr[1] <= 59
            ? true : false;

        if (name === "from") {
            if (!isValid) {
                setFromErr(true)
                return false
            }
            setFromErr(false)
        } else {
            if (!isValid) {
                setToErr(true)
                return false
            }
            setToErr(false)
        }
        return arrhr;
    }

    /**
    * when user click add btn
    * @param event
    * */
    const handleAddNewTask = (e) => {
        e.preventDefault();

        const fromArr = checkHr(fromValue, "from");
        const toArr = checkHr(toValue, "to");

        // Validate Inputs
        if (fromArr && toArr) {

            if (fromArr.length === 2 && toArr.length === 2 && fromArr[0] > toArr[0]) {
                return setToErr(true);
            } else if (fromArr[0] === toArr[0]) {
                if (fromArr[1] > toArr[1]) return setToErr(true);
            } else setToErr(false)

            const isAdded = addTask(inputValue, { from: fromValue, to: toValue });
            // clean inputs
            if (isAdded) {
                setInputValue("");
                setFromValue("");
                setToValue("");
            }
        }
    }


    /**
     * when user start typing
     * @param event
     * */
    const handleOnChange = e => setInputValue(e.target.value);
    const handleOnFromValChange = e => setFromValue(e.target.value)
    const handleOnToValChange = e => setToValue(e.target.value)




    return <>
        <AddNewContainer theme={theme}>
            <Title>new task</Title>
            <Form bg={theme.muted} onSubmit={handleAddNewTask}>
                <input autoComplete="off" name="task" value={inputValue} onChange={handleOnChange} type="text" placeholder="Enter new task" />
                {fromErr && <Err msg="Not valid" />}
                <input autoComplete="off" name="from" value={fromValue} onChange={handleOnFromValChange} type="text" placeholder="From e.g. 08:00" />
                {toErr && <Err msg="Not valid" />}
                <input autoComplete="off" name="to" value={toValue} onChange={handleOnToValChange} type="text" placeholder="To e.g. 09:00" />
                {/* <button type="submit" >click me</button> */}
                <AddBtn type="submit" disabled={!inputValue.trim() || !fromValue.trim() || !toValue.trim()} >add</AddBtn>
            </Form>
        </AddNewContainer>
    </>
}