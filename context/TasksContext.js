import React, { useEffect, useState } from "react";
import * as _ from "lodash";
import { forEach } from "lodash";

export const TasksContext = React.createContext();


export default function TasksProvider({ children }) {
    // presist theme


    const LS_KEY = "tasks";
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState("");
    const [itemsSelected, setItemsSelected] = useState([]);
    const [added, setAdded] = useState(false);
    const unCheckedTasks = tasks.filter(i => !i.checked && i);
    const checkedTasks = tasks.filter(i => i.checked && i);

    /**
     * @event
     * Add task
     * */
    const addTask = (task, time) => {

        // push task to tasks
        setTasks(tasksDrafted => [...tasksDrafted, { id: Math.floor(Math.random() * 1000), task, time, checked: false }]);

        // notificate added is done
        setAdded(true)
        return true;
    }

    // Turn ids from [1,2] to [{id:1},{id:2}]
    const getSelectedIds = () => itemsSelected.map(i => ({ id: i }))

    // git diffrence betwwen tasks and tasks selected
    const getDiff = (arr) => _.differenceBy(arr, getSelectedIds(), "id");

    const clearIdsSelected = () => setItemsSelected([]);

    const updateTasks = t => {
        setTasks(t)
        setAdded(true)
    }


    /**
     * @event
     * Remove task
     * */
    const removeTask = (tasksArr, name) => {
        console.log(name)

        // console.log(tasksArr);
        if (name === "Search") {
            const filteredSearch = getDiff(tasksArr);
            console.log(filteredSearch)
            setSearch(filteredSearch)
        }

        const filteredTasks = getDiff(tasks);


        // console.log(filteredTasks)
        updateTasks(filteredTasks)
        clearIdsSelected()

    }


    const check = () => {

        const selected = getSelectedIds();
        const filteredTasks = getDiff(tasks);
        let interarr = _.intersectionBy(tasks, selected, 'id');
        interarr = interarr.map(i => ({ ...i, checked: true }));
        updateTasks([...filteredTasks, ...interarr])
        clearIdsSelected();

        setQuery("")

    }

    const clearChecks = () => {
        // Remove the checked tasks
        const unChecked = tasks.filter(i => !i.checked)
        updateTasks(unChecked);

    }



    useEffect(() => {
        // fetch tasks form local storage;
        const locaTasks = localStorage.getItem(LS_KEY);
        try {
            setTasks(JSON.parse(locaTasks) || [])
        } catch (ex) {
            localStorage.removeItem(LS_KEY)
        }
    }, [])

    useEffect(() => {
        // save task to local storage
        if (added) {
            // This prevents setting task to [] in the first render
            localStorage.setItem(LS_KEY, JSON.stringify(tasks));
            setAdded(false)

        }
    }, [tasks])



    return <TasksContext.Provider
        value={{
            tasks,
            setTasks,
            addTask,
            removeTask,
            check,
            setItemsSelected,
            itemsSelected,
            unCheckedTasks,
            checkedTasks,
            clearChecks,
            search,
            setSearch,
            query,
            setQuery
        }}>
        {children}
    </TasksContext.Provider>
}