import React from 'react';
import { Link, useLocation } from 'react-router';
import moreIcon from "../../assets/images/icon/services-details-more-services-icon.png";
interface Service {
    name: string;
    link: string;
}
const services: Service[] = [
    { name: "Digital Marketing", link: "/inner/digital-marketing" },
    { name: "Web Design & Development", link: "/inner/web-design-development" },
    { name: "Search Engine Optimization", link: "/inner/search-engine-optimization" },
    { name: "Design & Branding", link: "/inner/design-and-branding" },
    { name: "App Development", link: "/inner/app-development" },
]
const ServicesList: React.FC = () => {
    const PathName = useLocation().pathname;
    return (
        <ul className="services-details__more-services-list list-unstyled">
            {services.map((item: Service, i) => (
                <li key={i} className={item?.link === PathName ? "active" : ""}>
                    <div className="icon">
                        <img src={moreIcon} alt={item.name} />
                    </div>
                    <p>
                        <Link to={item?.link}>{item.name}</Link>
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;