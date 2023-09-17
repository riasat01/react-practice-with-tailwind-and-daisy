import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const fakeRoutes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/product/:id', name: 'Product Details' },
        { id: 3, path: '/user', name: 'User Profile', routes: [{ id: 4, path: '/user/profile', name: 'User Profile Page' }, { id: 5, path: '/user/settings', name: 'User Settings Page' }] },
        { id: 6, path: '/dashboard', name: 'Dashboard', private: true },
        { id: 7, path: '/blog', name: 'Blog List' }
    ];


    return (
        <div className="">
            <div onClick={() => setOpen(!open)} className="text-2xl lg:hidden">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            </div>
            <ul className={`absolute lg:relative top-6 lg:top-0 duration-1000 ${open === true ? `left-8` : `-left-28`} lg:left-0 lg:flex lg:gap-16`}>
                {
                    fakeRoutes.map(fakeRoute => <Link key={fakeRoute.id} fakeRoute={fakeRoute}></Link>)
                }
            </ul>
        </div>

    );
};

export default Navbar;