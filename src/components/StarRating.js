import React from 'react'

const StarRating = ({rating , handleRating}) => {       
            function stars(x){
            var star =[];
            for(let i = 0 ; i < 5 ;i++){
                if(i <= x){
                    star.push(<span onClick={()=>handleRating(i)} style={{color:'gold',fontSize:'20px'}}>🟊</span>);
                }
                else star.push(<span onClick={()=>handleRating(i)} style={{color:'black',fontSize:'20px'}}>🟊</span>);
            }
            return star
        }
        return <div>{stars(rating)}</div>
}

export default StarRating
