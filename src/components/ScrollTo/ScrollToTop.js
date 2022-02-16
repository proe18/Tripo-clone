import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation()
    useLayoutEffect(() => window.scrollTo(0, 0), [pathname])
    return children
}

export default ScrollToTop