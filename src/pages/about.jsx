import styles from '../styles/home.module.css'
import Description from '../components/description'
import Footer from '../components/footer'

export default function About() {
    return (
        <body>
            <main>
                <h1 className={styles.placeholder}>About Me</h1>
                <Description />
            </main>
            <Footer />
        </body>
    )
} 