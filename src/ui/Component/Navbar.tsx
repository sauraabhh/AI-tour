import './Navbar.css' ;

interface NavbarProps {
    setPage: (page: string) => void;
}

function Navbar({ setPage }: NavbarProps) {
    return (
        <nav id='nav2'>
            <button id='button-2' onClick={() => setPage('About')}>ABOUT</button>
            <button id='button-2' onClick={() => setPage('InsideCity')}>INSIDE CITY</button>
            <button id='button-2' onClick={() => setPage('ExploreNearby')}>EXPLORE NEARBY</button>
            <button id='button-2' onClick={() => setPage('Adventures')}>ADVENTURES</button>
        </nav>
    );
}

export default Navbar;
