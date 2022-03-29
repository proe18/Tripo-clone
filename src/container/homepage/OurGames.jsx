import { useContext } from 'react'
import { OurGames } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'

const OurGamesContainer = ({ data }) => {
    const { homeOurGamesHeading, homeOurGamesContent } = useContext(ScrollContext)
    const { listGameElement } = useContext(NavbarContext)

    return (
        <OurGames ref={listGameElement}>
            <OurGames.Wrapper>
                <OurGames.Heading ref={homeOurGamesHeading}>
                    <OurGames.Title>{data.title}</OurGames.Title>
                    <OurGames.Text>{data.text}</OurGames.Text>
                </OurGames.Heading>
                <OurGames.Background ref={homeOurGamesContent}>
                    {data.games.map((game, index) =>
                        <OurGames.Game key={index}>
                            <OurGames.Heading>
                                <OurGames.Wrap>
                                    <OurGames.Avatar src={game.avatar} alt={game.title} />
                                </OurGames.Wrap>
                                <OurGames.Info>
                                    <OurGames.Title>{game.title}</OurGames.Title>
                                    <OurGames.Text>{game.text}</OurGames.Text>
                                </OurGames.Info>
                            </OurGames.Heading>
                            <OurGames.Description>{game.description}</OurGames.Description>
                            <OurGames.PlatForms>
                                {game.platForms.map((platform, index) =>
                                    <OurGames.Link key={index}>
                                        <OurGames.Image src={platform.img} alt={platform.alt} />
                                    </OurGames.Link>
                                )}
                            </OurGames.PlatForms>
                        </OurGames.Game>
                    )}
                    <OurGames.Image src={data.img} alt='' />
                </OurGames.Background>
            </OurGames.Wrapper>
        </OurGames>
    )
}

export default OurGamesContainer