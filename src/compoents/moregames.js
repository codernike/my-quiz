import React, { Component } from 'react'

export default class moregames extends Component {
  render() {
    const person =[
        {title:'Pokemon Ash gray Download || cheat codes',url:'/games/',description:'Pokemon Ash gray Download as well as cheat codes of game',imgurl:'https://img.pokemoncoders.com/wp-content/uploads/2018/09/bpg-pokemon-ash-gray.png'},
        {title:'Pokemon Fire red Download || cheat codes',url:'/games/',description:'Pokemon fire red Download as well as cheat codes of game',imgurl:'https://assets-prd.ignimgs.com/2022/01/31/pokemon-firered-button-crop-1643616703712.jpg'},
        {title:'Pokemon Ash version Download || cheat codes ',url:'/games/',description:'Pokemon Ash versionDownload as well as cheat codes of game',imgurl:'https://www.pokeharbor.com/wp-content/uploads/2021/05/picsart-05-27-01-16-46_1-2.png'}, 
        {title:'Pokemon sinnoh legacy Download || cheat codes ',url:'/games/',description:'Pokemon Sinnoh legacy Download as well as cheat codes of game',imgurl:'https://images-na.ssl-images-amazon.com/images/I/91FGGnUq6EL.jpg'},
        {title:'Pokemon kalos Download || cheat codes',url:'/games/',description:'Pokemon Kalos Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/65c0233e01a5488bc410d5515bc22aad.png'},
        {title:'Pokemon Last fire red Download || cheat codes',url:'/games/',description:'Pokemon Last fire red Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/Pokemon-The-Last-Fire-Red.png'},
        {title:'Pokemon Emerald Download || cheat codes',url:'/games/emerald',description:'Pokemon Emerald Download as well as cheat codes of game',imgurl:'https://m.media-amazon.com/images/I/510BNCVM1NL.jpg'},
        {title:'Pokemon Sors Download || cheat codes',url:'/games/',description:'Pokemon Sors Download as well as cheat codes of game',imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLW63m_LuaW8YefOPadP3AsdThIcds2qFQ&usqp=CAU'},
        {title:'Pokemon dark realm Download || cheat codes',url:'/games/',description:'Pokemon dark realm Download as well as cheat codes of game',imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7XYJexCSzhp4EygKgWuam1F5vr0zVYCUGg&usqp=CAU'},
      ]
     
    return (
        <>
    <div class="container mx-auto lg:my-2">
   <h2 class="text-3xl font-medium title-font text-gray-900 my-10 text-center"> Best Games</h2>
   <div class="flex flex-wrap">
   {person.map((element)=>(
  
       <div class="lg:p-4 md:w-1/3 flex justify-center">
           <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg"><img class="w-full" src={element.imgurl} alt="Tailwind Course In Hindi"/>
               <div class="px-6 py-4 lg:h-52"><span class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">pokemon</span>
                   <div class="title-font text-lg font-medium text-gray-900 mb-3"><a href="/emerald ">{element.title}</a></div>
                   <p class="text-gray-700 text-base">{element.description} </p>
               </div>
               <div class="px-6 pt-4 pb-2"><a href ={element.url}class="inline-block bg-purple-800 rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-purple-600 cursor-pointer">Download</a></div>
           </div>
      </div>
   ))} 
       
       
   </div>
</div>
            
     </>
    )
  }
}
