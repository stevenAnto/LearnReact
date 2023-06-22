export function TwitterFollowCard({formatUsername, userName, name, isFollowing}){
  return (
    <article  className='tw-followCard' >
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUsername}</span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}
