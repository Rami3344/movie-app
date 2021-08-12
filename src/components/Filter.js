import React from 'react'
import StarRating from './StarRating'

const Filter = ({search,handleSearch,searchRating,handleRating}) => {
    return (
        <div className="header-container">
            <h1>MovieFlix</h1>
            <div className="search-container">
            <input className="inp" type="text" value={search} onChange={handleSearch}/>
            <p>rating</p>
            <StarRating rating ={searchRating} handleRating={handleRating} />
            </div>
            
        </div>
    )
}

export default Filter
