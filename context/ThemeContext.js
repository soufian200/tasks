import React, { useEffect, useState } from "react";

export const themes = {
    light: {
        text: '#262626',
        background: '#eee',
        bg: "fff",
        primary: '#0cf',
        secondary: '#09c',
        muted: '#f4f4f4',
        border: "#e7e7e7"
    },
    dark: {
        text: '#fff',
        background: '#262626',
        bg: "#404040",
        primary: '#2196f3',
        secondary: '#09c',
        muted: '#505050',
        border: "#565656"
    },
};

export const ThemeContext = React.createContext();


export default function ThemeProvider({ children }) {
    // presist theme

    const [theme, setTheme] = useState(true);

    const switchTheme = () => {
        setTheme(!theme);
        localStorage.setItem("theme", theme ? "dark" : "light")
    };

    useEffect(() => {
        var ls = window.localStorage;
        const mode = ls.getItem("theme");

        if (mode === "light") {
            setTheme(true);
        } else if (mode === "dark") {
            setTheme(false)
        } else {
            ls.setItem("theme", "light")
            setTheme(true);
        }

        // switch (mode) {
        //     case null || "light":
        //         ls.setItem("theme", "light")
        //         setTheme(true);
        //         break
        //     case "dark":
        //         setTheme(false)
        //         break;
        // }

    }, [])

    return <ThemeContext.Provider value={{ mode: theme, theme: theme ? themes.light : themes.dark, switchTheme }}>
        {children}
    </ThemeContext.Provider>
}