import React from 'react'
import { useState, useEffect } from 'react';
import Loader from './Loader';


const apiKey = 'l5EhAsWjR5kKl0gXVU5m2ajLlJGvUpeI'
const Giphy = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        const getWeather = async() => {
            setIsError(false);
            setIsLoading(true)
            
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`)
                const data = await response.json()

                
                console.log(data)
                setData(data.data)

            }
            catch (err) {
                setIsError(true)
                console.log(err)
            }

            setIsLoading(false)
      }
      getWeather();
    }, [])
      
    
    const renderGifs = () => {
        if(isLoading) {
            return <Loader />
        }
        return data.map(el => {
            return(
                <div key={el.id} className='gif'>
                    <img src= {el.images.fixed_height.url} alt='gifs'/>
                </div>
            )
        })
    }

    return (
        <div>
            {renderGifs()}
        </div>
    )
} 

export default Giphy
