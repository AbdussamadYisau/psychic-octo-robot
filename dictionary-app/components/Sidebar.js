import { useState } from 'react';
import { BiChevronRight, BiSearch, BiHomeAlt, BiBarChartAlt2, BiBell, BiPieChartAlt, BiHeart, BiWallet, BiLogOut} from "react-icons/bi";


export default function Sidebar() {

  const [isOpen, setOpen] = useState(true);
  return (
    <>

    <nav className={`sidebar ${isOpen ? '' : 'close'}`} >
        <header>
            <div className="image-text">
                <span className="image">
         
                </span>

                <div className="text logo-text">
                    <span className="name">AY</span>
                    <span className="profession">Web developer</span>
                </div>
            </div>

            
            <i className='bx bx-chevron-right toggle' onClick={() => setOpen(!isOpen) }>
            <BiChevronRight />
            </i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box">
                    <i className='bx bx-search icon'>
                      <BiSearch />
                    </i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-home-alt icon' >
                              <BiHomeAlt />
                            </i>
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bar-chart-alt-2 icon' >
                              <BiBarChartAlt2 />
                            </i>
                            <span className="text nav-text">Revenue</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'>
                              <BiBell />
                            </i>
                            <span className="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-pie-chart-alt icon' >
                              <BiPieChartAlt />
                            </i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-heart icon' >
                              <BiHeart />
                            </i>
                            <span className="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' >
                              <BiWallet />
                            </i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="#">
                        <i className='bx bx-log-out icon' >
                          <BiLogOut />
                        </i>
                        <span className="text nav-text">Logout</span>
                    </a>
                </li>
                
            </div>
        </div>

    </nav>

    <section className="home">
        <div className="text">Dashboard Sidebar</div>
    </section>

    </>
  )
}
