import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  const addAt = (userName) => '@${userName}'
  return (
    <>
    <TwitterFollowCard isFollowing={true} userName="Esteven Calcinan" name="stevenAnto" />
    <TwitterFollowCard userName=" Heneyr Isas" name="ElImbetiable" />
    <TwitterFollowCard userName=" Antony Aco" name="Atn" />
    </>
  )
}
