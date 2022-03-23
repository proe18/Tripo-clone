import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqual, setIsEqual] = useState(false)
    const [isParam, setIsParam] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef('')
    const pathRoute = useRef(pathname)
    const timerID1 = useRef(0)
    const timerID2 = useRef(0)

    const getElement = useCallback(el => {
        if (el === 'Games') return listGameElement.current
        if (el === 'Contact') return contactElement.current
    }, [])

    const handleScroll = param => {
        if (param) {
            setIsParam(true)
            if (param === 'Games') setIsActive(false)
            if (param === 'Contact') setIsActive(true)
            paramRef.current = param
        } else {
            setIsActive(undefined)
            setIsEqual(true)
        }
        if (pathname !== ROUTES.HOME) setIsShow(false)
        pathRoute.current = pathname
    }

    useEffect(() => {
        //scroll the page without parameter
        if (window.scrollY > 0 && isEqual) {
            window.scrollTo(0, 0)
            setIsEqual(false)
        }

        //scroll the page with parameter
        if (pathname === ROUTES.HOME && isParam) {
            // console.log(pathRoute.current);
            if (pathRoute.current !== pathname) window.scrollTo(0, 0)

            timerID2.current = setTimeout(() => {
                const element = getElement(paramRef.current)
                const position = element?.getBoundingClientRect().top + window.scrollY
                const options = {
                    left: 0,
                    top: paramRef.current === 'Games'
                        ? Math.floor(position - 90)
                        : Math.floor(position - 60),
                    behavior: 'smooth'
                }
                window.scrollTo(options)
                setIsParam(false)
            }, 500)
        }

        if (pathname === ROUTES.HOME) {
            timerID1.current = setInterval(() => setIsActive(window.scrollY >= 4296), 300)
        }

        const handleReload = () => {
            if (window.scrollY > 0) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        }

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID1.current)
            clearTimeout(timerID2.current)
        }
    }, [pathname, isEqual, isParam, getElement])

    const [isShow, setIsShow] = useState(false)
    // const [isShowElements, setIsShowElements] = useState(false)
    const homeAboutHeading = useRef('home-about-heading')
    const homeOurGamesHeading = useRef('home-ourgames-heading')
    const homeOurGamesContent = useRef('home-ourgames-content')
    const homeJoinTeamHeading = useRef('home-jointeam-heading')
    const imageAbout = useRef('image-about')
    const imageJoinTeam = useRef('image-joinTeam')
    const topHomeElements = useRef([])
    const activeHomeElement = useRef({})

    const getTopElements = useCallback(elements => {
        if (typeof elements === 'object') {
            return elements?.map(el => Math.floor(el?.getBoundingClientRect().top + window.scrollY))
        }
    }, [])
    // console.log(isShow);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setIsShow(true)
            const homeElements = [
                homeAboutHeading.current,
                imageAbout.current,
                homeOurGamesHeading.current,
                homeOurGamesContent.current,
                homeJoinTeamHeading.current,
                imageJoinTeam.current
            ]
            topHomeElements.current = getTopElements(homeElements)
            // console.log(topHomeElements.current);
        }, 500)

        const handleScroll = () => {
            topHomeElements.current.forEach((top, index) => {
                let topElement = top - 200
                if (window.scrollY >= topElement) {
                    // Object.assign(activeHomeElement.current, {[index]: true})
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerID)
        }

    }, [pathname, getTopElements])

    const value = {
        isActive,
        listGameElement,
        contactElement,
        homeAboutHeading,
        homeOurGamesHeading,
        homeOurGamesContent,
        homeJoinTeamHeading,
        imageAbout,
        imageJoinTeam,
        isShow,
        activeHomeElement,
        handleScroll
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }