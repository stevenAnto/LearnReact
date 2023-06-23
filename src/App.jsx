import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
  {
    userName :'midudiv',
    name : 'Migue Angel Dura',
    isFollowing : true
  },
  {
    userName :'pheralb',
    name : 'Henery Galvez Quilla',
    isFollowing : false
  },
  {
    userName :'pacoGedn',
    name : 'paco Gestino',
    isFollowing : true
  },
  {
    userName :'TMChein',
    name : 'Taiwne Chenillo',
    isFollowing : false
  },
  {
    userName :'Pequenia Saltaria',
    name : 'Hola k Ase',
    isFollowing : false
  }
]

users.map(user=>{
  const {userName, name, isFollowing}=user
  console.log(userName,name,isFollowing)

})



export function App(){
  return (
    <section className='App'>
      {
        users.map(user => {
          {/*destructuracion*/}
          const {userName, name, isFollowing}=user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsfollowing={isFollowing}
              name={name}>
            </TwitterFollowCard>
          )

        }
        )
      }
    </section>
  )
}
