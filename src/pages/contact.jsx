import styles from '../styles/home.module.css'
import Footer from '../components/footer'

export default function Contact() {
    return (
    <body>
      <h1 className={styles.placeholder}>Contact page</h1>
        <p>If you'd like to get in touch with me, here's a bunch of social links:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/sharolayn-jarque-534108190/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/sharojb" target="_blank">Github</a></li>
        </ul>
      <Footer />
    </body>
    )
  }