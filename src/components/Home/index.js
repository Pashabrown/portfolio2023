import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

import LogoTitle from '../../assets/images/istockphoto-184960039-170667a.jpg'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>ello</span>
            <br />
            <span className={`${letterClass} _13`}>T</span>
            <span className={`${letterClass} _14`}>here</span>
            <div>
              <br></br>
              Full Stack Engineer
            </div>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <h2>'LUV Developer / JavaScript Expert </h2>
            </h1>
        </div>
       
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
