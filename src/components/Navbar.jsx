import Link from "./Link";

const Navbar = () => {

    const fakeRoutes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/product/:id', name: 'Product Details' },
        { id: 3, path: '/user', name: 'User Profile', routes: [{ id: 4, path: '/user/profile', name: 'User Profile Page' }, { id: 5, path: '/user/settings', name: 'User Settings Page' }] },
        { id: 6, path: '/dashboard', name: 'Dashboard', private: true },
        { id: 7, path: '/blog', name: 'Blog List' }
      ];

      
    return (
        <ul className="flex gap-16">
          {
            fakeRoutes.map(fakeRoute => <Link key={fakeRoute.id} fakeRoute={fakeRoute}></Link>)
          }  
        </ul>
    );
};

export default Navbar;