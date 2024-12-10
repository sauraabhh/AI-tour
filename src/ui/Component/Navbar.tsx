import React from 'react';

interface NavbarProps {
    setPage: (page: string) => void;
}

function Navbar({ setPage }: NavbarProps) {
    return (
        <nav>
            <button onClick={() => setPage('About')}>About</button>
            <button onClick={() => setPage('InsideCity')}>Inside City</button>
            <button onClick={() => setPage('ExploreNearby')}>Explore Near By</button>
            <button onClick={() => setPage('Adventures')}>Adventures</button>
        </nav>
    );
}

export default Navbar;
