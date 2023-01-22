import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='container'>
      <header>
        <div>
          <a className='logo' href="/">
            <strong>Sharolayn Jarque</strong>
          </a>
        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
     </div>
  )
}