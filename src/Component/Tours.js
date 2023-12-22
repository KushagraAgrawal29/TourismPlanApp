import React from 'react'
import Card from './Card';

function Tours ({tours,removeTour}){
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        //...tour - cloning
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
    
}

export default Tours;