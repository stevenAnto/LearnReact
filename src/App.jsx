import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  const formatUsername= (userName)=> `@${userName}`
  return (
    <>
      <TwitterFollowCard formatUsername={formatUsername} isFollowing={true} userName="Esteven Calcinan" name="stevenAnto" />
      <TwitterFollowCard formatUsername={formatUsername} userName=" Heneyr Isas" name="ElImbetiable" />
      <TwitterFollowCard formatUsername={formatUsername} userName=" Antony Aco" name="Atn" />
    </>
  )
}
