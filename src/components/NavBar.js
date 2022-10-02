import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

export default function NavBar({navCtrol}) {
    return (
        <Menu className={`nav ${navCtrol?"navbar_hi":"navbar_gone"}`}
            mode="vertical"
        >
            <Menu.Item className='nav_title' key="tableware"><NavLink to='/tableware'>Tableware</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/cookware"><NavLink to='/cookware'>Cookware</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/home-accessories"><NavLink to='/home-accessories'>Home Accessories</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/lighting"><NavLink to='/lighting'>Lighting</NavLink></Menu.Item>
            <Menu.Item className='nav_title' key="/furniture"><NavLink to='/furniture'>Furniture</NavLink></Menu.Item>
            
        </Menu>
    );
}