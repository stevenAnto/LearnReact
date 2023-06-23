import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  const [name, setName] = useState('Esteven')
  return (
    <>
      <TwitterFollowCard
        initialIsfollowing={true}
        userName= {name}
      >Miguel Angel duran
      </TwitterFollowCard>
      <TwitterFollowCard
        initialIsfollowing={false}
        userName=" Heneyr Isas"
      >Esteven Antonio
      </TwitterFollowCard>
      <TwitterFollowCard
        initialIsfollowing
        userName=" Antony Aco"
      >
        Gustavo Ordonez
      </TwitterFollowCard>
      <button onClick={()=>setName('pedromichael')}>Cambio Nombre</button>
    </>
  )
}
