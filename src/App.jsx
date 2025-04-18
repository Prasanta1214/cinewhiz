import React, { useState } from 'react'
import "./App.css"

export default function App() {

  const [count, setCount] =useState(0)
  const[cssName, setCssName] = useState('selected')
  const [movie, setMovie] =useState([
    {
      name:'Aachari-Baa',
      image:"/aachari-baa.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Ameena",
      image:"/ameena.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Azaad',
      image:"/azaad.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Baby Jhon",
      image:"/baby-jhon.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Banabash',
      image:"/banabash.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Blindsided",
      image:"/blindsided.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Chhaava',
      image:"/chhaava.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Crazxy",
      image:"/crazxy.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Deva',
      image:"/deva.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Fateh",
      image:"/fateh.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Jaat',
      image:"/jaat.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Maidaan",
      image:"/maidaan.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:'Narsimha',
      image:"/narsimha.jpg",
      watchlist:"/unsave.png"
    },
    {
      name:"Phule",
      image:"/phule.jpg",
      watchlist:"/unsave.png"
    },
  ])

  const [selected ,setSelected] =useState([])


  const watchlistbtn=()=>{
    setCssName('visible')
   
  }


  const addToWatchList =(index)=>{
    if(movie[index].watchlist=='/save (1).png'){
      setCount(count-1)
      movie[index].watchlist='/unsave.png'
      setMovie([...movie])

      for(let i=0; i<selected.length;i++){
        if(selected[i].name== movie[index].name){
          selected.splice(i,1)
          setSelected([...selected])
        }
      }
    }else{
      setCount(count+1)
      movie[index].watchlist='/save (1).png'
      setMovie([...movie])
      setSelected([...selected,movie[index]])
    }
   
  }

  return (
    <>
    <div className='main'>
      <div className='header'>
        <img src="/logo.jpg" width="100px" />
        <button id='watch-list' onClick={watchlistbtn}>Watchlist &nbsp;{count}</button>
      </div>
      <hr />
      <br />
      <div className='body'>
      
        {movie.map((item,index)=>
        <div id='movie-card'key={index}>
        <img src={item.image} alt=""  height='150' />
        <div id='para'>
        <h3>{item.name}</h3>
        <img  src={item.watchlist} alt="" height='23px' onClick={()=>{addToWatchList(index)}}  />
        </div>
       </div>
        )}
      </div>
      <div className={cssName}>
        <h1 id='remove-btn'><img src="/remove.png"
         width="40" 
         
         onClick={()=>{setCssName('selected')}}/></h1>
         {selected.map((item,index)=>
          <div id='add-movie' key={index}>
            <img src={item.image} alt="" width="30" />
            <h3>{item.name}</h3>
          </div>
         )}
      </div>


    </div>
    </>
  )
}
