import { PlatForms } from './Platform_data'
import Kipon from "../images/kipon_avatar.jpg"
import Robotrix from "../images/robotrix_avatar.jpg"
import Treasure from "../images/treasure_avatar.jpg"
import PrimayBg from "../images/background_home_2.jpg"
import KiponBg from "../images/background_kipon_1.jpg"
import RobotrixBg from "../images/background_robotrix_1.jpg"
import TreasureBg from "../images/background_treasure_2.jpg"
import MainImage from "../images/home_1.jpg"
import SubImage from "../images/home_2.jpg"
import OurGameImage from "../images/home_3.jpg"
import JoinOurImage from "../images/home_4.jpg"
import * as ROUTES from '../constants/routes'

export const homeData = {
    header: {
        title: "Made to Be Played",
        text: "The Very Best in Mobile Gaming",
        platForms: PlatForms,
        listGames: [
            {
                title: "Kipon",
                path: ROUTES.KIPON,
                text: "Casual - Free",
                img: KiponBg,
                avatar: Kipon,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                ’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Robotrix",
                path: ROUTES.ROBOTRIX,
                text: "RPG - Free",
                img: RobotrixBg,
                avatar: Robotrix,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Treasure Box",
                path: ROUTES.TREASURE,
                text: "Adventure - Free",
                img: TreasureBg,
                avatar: Treasure,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
        ],
    },
    about: {
        title: "About Tripo",
        subtitle: "Your Source for Mobile Entertainment",
        description: `I'm a paragraph.
        Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        aboutImages: [
            {
                img: MainImage,
                alt: "MainPhoto",
                className: "main-image"
            },
            {
                img: SubImage,
                alt: "SubPhoto",
                className: "sub-image"
            }
        ]
    },
    ourGames: {
        title: "Our Games",
        description: `I'm a paragraph. Click here to add your own text and edit me.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        img: OurGameImage
    },
    joinTeam: {
        title: "Join Our Team",
        subtitle: "It takes the world's best talent to change the game.",
        background: PrimayBg,
        img: JoinOurImage
    }
}
