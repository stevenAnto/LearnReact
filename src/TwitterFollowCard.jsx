export function TwitterFollowCard({children,formatUsername, userName, name, isFollowing}){
  const text = isFollowing ? 'Siguiendo':'seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button ':'tw-followCard-button'
  return (
    <article  className='tw-followCard' >
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">
          {text}
        </button>
      </aside>
    </article>
  )
}
