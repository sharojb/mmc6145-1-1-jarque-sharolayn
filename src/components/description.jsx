import { Link } from 'react-router-dom'
import meImage from '../assets/me.jpg'

export default function Description() {
  return (
    <div className='polaroid'>
      <img src={meImage} alt='Me and my pupdaughter' />
      <p>I am a Web Designer eager to learn! I'm passionate about designing software that is human-friendly, clear, purposeful, easy to use, and aesthetically pleasing. I've worked with a variety of clients, I love shaping and crafting on-screen experiences.</p>

    </div>
  )
}