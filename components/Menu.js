import { useContext } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineOrderedList } from "react-icons/ai";
import { BsCheckAll, } from "react-icons/bs";
import { MenuContainer, Profile, Pic, Username } from "../styles/components/Menu.style";
import { ThemeContext } from "../context/ThemeContext";
import { Hr } from "../styles/mixins";
import colors from "../constants/colors";

export default function Menu() {
    const { theme } = useContext(ThemeContext)
    const router = useRouter();

    const LINKS = [
        {
            id: 1,
            link: "tasks",
            href: "/tasks",
            Icon: AiOutlineOrderedList
        },
        {
            id: 2,
            link: "checked",
            href: "/checked",
            Icon: BsCheckAll
        },
    ]
    return <>
        <MenuContainer theme={theme}>
            <Hr theme={theme} />
            <ul>
                {
                    LINKS.map(i => <li key={i.id} className="item">
                        <Link href={i.href} >
                            <a style={{ color: router.asPath === i.href && colors.primary }}>

                                <i.Icon />
                                <span>{i.link}</span>
                            </a>
                        </Link>
                    </li>)
                }
            </ul>
        </MenuContainer>
    </>
}