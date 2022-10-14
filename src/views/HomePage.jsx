import React from 'react'
import CategoriesSide from '../components/CategoriesSide'
import GamesList from '../components/GamesList'
import Header from '../components/Header'


export default function HomePage() {
    
    return (
        <div className='mx-3 mt-3'>
            <Header />
<div className="flex">
    <div className="w-4/5">
    <GamesList />
    </div>
<div className="w-1/5">
    <CategoriesSide />
</div>

</div>
          
        </div>
    )
}
