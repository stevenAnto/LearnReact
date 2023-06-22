import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  return (
    <>
      <TwitterFollowCard
        isFollowing={true}
        userName="Esteven Calcinan"
      >Miguel Angel duran
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName=" Heneyr Isas"
      >Esteven Antonio
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing
        userName=" Antony Aco"
      >
        Gustavo Ordonez
      </TwitterFollowCard>
    </>
  )
}
