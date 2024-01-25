import Link from "next/link"
import Head from "next/head"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Counter from "@/components/Counter"
import Login from "@/components/Login"

export default function Home(){
    return (
    <div className={styles.container}>

        {/*
        <Head>
            <title>Mi pagina web</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>

        
        <nav className={styles.navbar}>
            <a href="/" className={styles.navbarBrand}>Home 🏠</a>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <a href="/pages/ayuda" className={styles.navLink}>Ayuda</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/pages/sesion" className={styles.navLink}>Sesion</a>
                </li>
            </ul>
        </nav>

        
        <div className={styles.content}>
            <h1 className={styles.hola}>Hola Mundo</h1>
            <div className={styles.content}>
            <h2>Antonio de Jesus Serrano Hernandez</h2>
            <h3>TI02SM-22</h3>
        </div>
        </div>

    <Footer /> */}

        {/* <Counter /> */}

        <Login onClose={undefined} />
        
    </div>
    )
}