import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryFilter, baseGames } from '../features/gamesSlice'

export default function CategoriesSide() {
    const [categories, setCategories] = useState([])
    const allGames = useSelector(baseGames)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:3001/categories', { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                setCategories(res)
            })
    }, [])

    // handle filter wi
    const handleCategoryFilter = (id)=>{
        dispatch(CategoryFilter(allGames.filter(category=>category.categoryIds.some(item=>item == id))))
    }

  return (
    <div>
            <h1>Categories</h1>
            <hr className="solid"></hr>
           {
            categories.map((category, index)=>(
                <p onClick={()=>{handleCategoryFilter(category.id)}} key={index}>{category.name}</p>))
           }

    </div>
  )
}
