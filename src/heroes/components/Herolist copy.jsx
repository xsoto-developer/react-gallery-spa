import React, { useMemo } from 'react'
import { getHerosByPlubisher } from '../helpers'
import { HeroCard } from './HeroCard';
import './HeroList.css'

export const Herolist = ({ publisher }) => {
    const heroes = useMemo(() =>getHerosByPlubisher(publisher), [publisher]);

    return (
        <div className='row'>
            {heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
}
