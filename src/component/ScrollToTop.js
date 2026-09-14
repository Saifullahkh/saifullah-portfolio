import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto' // Use auto for instant jump or smooth for transitions
        });
    }, [pathname]);

    return null;
}
