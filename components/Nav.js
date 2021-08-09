import styles from "../styles/components/Nav.module.scss"
import Search from './Search';

export default function Nav() {
    return <nav id={styles.nav}>
        <Search />
    </nav>
}