import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TasksContext } from "../context/TasksContext";
import { AiOutlineSearch } from "react-icons/ai"
import { SearchBox, Input } from "../styles/components/Search.style"
import { useRouter } from "next/router";

export default function Search() {

    const { theme } = useContext(ThemeContext);
    const { unCheckedTasks, setSearch, setQuery, query } = useContext(TasksContext);

    const router = useRouter()


    const handleOnChange = e => setQuery(e.target.value.toLowerCase());
    const redirectToTasks = () => router.push("/search");

    useEffect(() => {
        const matchedTasks = unCheckedTasks.filter(i => i.task.toLowerCase().includes(!query.trim() || query) && i);
        setSearch(matchedTasks)
    }, [query])

    return <SearchBox theme={theme}>
        <Input
            value={query}
            onInput={handleOnChange}
            onClick={redirectToTasks}
            type="search"
            placeholder="Search for task.." />
        <span >
            <AiOutlineSearch />
        </span>
    </SearchBox>

}