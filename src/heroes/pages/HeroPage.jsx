import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import './HeroPage.css'


export const HeroPage = () => {
  const { id, ...rest } = useParams();

  const navegate = useNavigate();
  const hero = useMemo(() => getHeroById(id), [id])
  const onNavigateBack = () => {
    navegate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }


  return (
    <div className='hero-page row mt-5'>
      <div className="hero-page-image">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
          style={{ width: '100%', borderRadius: '12px' }} // Ancho completo y bordes redondeados para consistencia
        />
      </div>
      <div className="hero-page-details">
        <h3 className="hero-page-title">{hero.superhero}</h3>
        <ul className='list-group list-group-flush hero-page-list'>
          <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'> <b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'> <b>First appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
}
