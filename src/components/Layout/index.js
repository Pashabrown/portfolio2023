import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'
import Home from '../Home'
import Home2 from '../Home2'
import Sidebar from '../Sidebar/'
 import Devskill from  "../Devskill/Devskill"
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <span className="tags top-tags" onClick={faDeaf} Link="portfolio"><Devskill/></span>
      <Sidebar />

        
        <span className="tags bottom-tags">
        <Home2 />
        <Home />
          
          <br />
          <span className="bottom-tag-html">&lt;/div&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
