import styles from '../styles/home.module.css'
import Work from '../components/work'
import Footer from '../components/footer'

export default function Contact() {
    return (
      <body>
        <main>
        <h1 className={styles.placeholder}>Let's Work Together</h1>
        <Work />
        </main>
        <Footer />
      </body>
    )
  }