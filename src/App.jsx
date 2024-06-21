import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Tesla',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        isFollowing: true
    },
    {
        userName: 'spacex',
        isFollowing: false
    },
    {
        userName: 'DanteNico1087',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map((user) => {
                    const {
                        userName,
                        name,
                        isFollowing,
                    } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}