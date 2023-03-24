import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    return (
         <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 '>
            <div className='col animate__animated animate__fadeIn'>
                <div className='card shadow mb-2'>
                    <div className='row no-gutters'>
                        <div className='col-4'>
                            <img src={heroImageUrl} className='card-img' alt={superhero} />
                        </div>
                        <div className='col-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>{superhero}</h5>
                                <p className='card-text'>{alter_ego}</p>
                                {
                                    (alter_ego !== characters) && (<p>{characters}</p>)
                                }
                                <p className='card-text'>
                                    <small className='text-muted'> {first_appearance}</small>
                                </p>
                                <Link to={`/hero/${id}`}>
                                    Mas...
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
