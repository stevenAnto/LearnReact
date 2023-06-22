import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  const formattedUserName = <span>@userName</span>
  return (
    <>
      <TwitterFollowCard
        formatUsername = {formattedUserName}
        isFollowing={true}
        userName="Esteven Calcinan"
        name="stevenAnto" />
      <TwitterFollowCard
        formatUsername = {formattedUserName}
        userName=" Heneyr Isas"
        name="ElImbetiable" />
      <TwitterFollowCard
        formatUsername = {formattedUserName}
        userName=" Antony Aco"
        name="Atn" />
    </>
  )
}
