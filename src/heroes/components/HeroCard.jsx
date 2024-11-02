import React from 'react'
import { Link } from 'react-router-dom';
import './HeroCard.css';

const CharacterByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters) ?  <></> : <p>{characters}</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    
    return (
        <div className='hero-card animate__animated animate__fadeIn'>
            <div className='hero-card-image'>
                <img src={heroImageUrl} alt={superhero} />
            </div>
            <div className='hero-card-body'>
                <h5 className='hero-card-title'>{superhero}</h5>
                <p className='hero-card-text'>{alter_ego}</p>
                <CharacterByHero characters={characters} alter_ego={alter_ego} />
                <p className='hero-card-text'>
                    <small className='text-muted'>{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`} className="hero-card-link">
                    Más...
                </Link>
            </div>
        </div>
    );
}
