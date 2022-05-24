import React from 'react';

const Header = () => {
    const [ showMobileNav, setShowMobileNav ] = React.useState<boolean>(false);

    return (
        <nav className="relative container mx-auto p-6 items-center">
            <div className="flex items-center justify-between">
                <div className="pt-2 md:flex md:space-x-3 md:items-center">
                    <img src="/assets/favicon-32x32.png" alt="" />
                    <h1 className="hidden md:flex text-2xl">Elenco</h1>
                </div>


                <button
                    id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none"
                    onClick={() => setShowMobileNav((prev) => !prev)}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

                <div className="hidden md:flex space-x-4 items-center">
                    <a className="hover:text-gray-500 md:flex space-x-3 items-center" href="#">
                        Home
                    </a>
                    <a className="hover:text-gray-500 md:flex space-x-3 items-center" href="#">
                        Todo
                    </a>
                    <a className="hover:text-gray-500 md:flex space-x-3 items-center" href="#">
                        Contact us
                    </a>
                    <a className="hover:text-gray-500 md:flex space-x-3 items-center" href="#">
                        Language
                        <img className="md:pl-1 h-2" src="/assets/down-filled-triangular-arrow.png" />
                    </a>
                </div>

                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="hover:opacity-75 p-3 px-6 bg-red-500 text-white rounded-full baseline">Import Tasks</a>
                </div>
            </div>
            
            <div className="md:hidden">
                <div
                id="menu"
                className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                >
                <a href="#">Send Money</a>
                <a href="#">Receive Money</a>
                <a href="#">Contact us</a>
                <a href="#">Language</a>
                <a href="#">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Header