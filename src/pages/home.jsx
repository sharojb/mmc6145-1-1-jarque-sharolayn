import styles from '../styles/home.module.css'
import Project from '../components/project'
import Footer from '../components/footer'
import animationImage from '../assets/animation.jpg'
import spImage from '../assets/sp.jpg'

export default function Home() {
  return (
    <body>
      <main>
        <h1 className={styles.placeholder}>Sharolayn Jarque</h1>
        <p>
          <em>Web Developer Extraordinaire</em>
        </p>
        <Project>
          <div>
            <h2>Project 1</h2>
            <div className='polaroid'>
              <img src={animationImage} alt='Animation created with CSS' />
              <div className='write'>
              <p>This was an individual project where I learned how to create animations using only CSS</p>
              </div>
            </div>
          </div>
          </Project>
          <Project>
          <div>
            <h2>Group Project</h2>
            <div className='polaroid'>
              <img src={spImage} alt='First Website with JavaScript' />
              <div className='write'>
              <p>This was a group project where we created a website learning how to implement JavaScript</p>
              </div>
            </div>
          </div>
        </Project>
      </main>
      <Footer />
    </body>

  )
}