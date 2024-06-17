export function TwitterFollowCard({ userName, name, isFollowing }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-logo' src={` https://unavatar.io/twitter/${userName}`} alt="Logo de DigiTools" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <p className='tw-followCard-description'>@{userName}</p>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}