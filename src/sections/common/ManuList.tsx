import React from 'react';
import { BLOG_LINKS, HOME_LINKS, PAGES_LINKS, SERVICES_LINKS, SHOP_LINKS } from '../../contents/nav/nav';
import { Link } from 'react-router';
const ManuList: React.FC = () => {
    return (
        <ul className="main-menu__list">
            <li className="dropdown">
                <a href="#">Home</a>
                <ul>
                    {
                        HOME_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>
            <li className="dropdown">
                <a href="#">Pages</a>
                <ul>
                    {
                        PAGES_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                    {
                        SERVICES_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#">Shop</a>
                <ul>
                    {
                        SHOP_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#">Blog</a>
                <ul>
                    {
                        BLOG_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}
export default ManuList;