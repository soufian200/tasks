
const setItem = (ls, key, value) => {
    // ls.setItem(key, value)
    console.log("key: ", key)
    console.log("tasks: ", tasks)
}

const getItem = (key) => {
    console.log("get ", key)
}

const removeItem = (key) => {
    console.log("remove", key)
}

export { setItem, getItem, removeItem };