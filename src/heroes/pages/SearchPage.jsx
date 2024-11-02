import React from 'react'
import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import './SearchPage.css'

export const SearchPage = () => {

    const navegate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;

    const onSearchSubmit = (event) => {
        event.preventDefault(); /// para evitar el full refresh      
        navegate(`?q=${searchText}`)
    }

    return (
        <div className='search-page'>
            <h1>SearchPage</h1>
            <hr />
            <div className='row'>
                <div className="col-md-5 search-form">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text"
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange} 
                        />
                        <button className='btn btn-outline-primary mt-1'>Search</button>
                    </form>
                </div>
                <div className="col-md-6 results-section">
                    <h4>Results</h4>
                    <hr />
                    <div 
                        className='alert alert-primary animate__animated animate__fadeIn'
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search a hero
                    </div>
                    <div 
                        className='alert alert-danger animate__animated animate__fadeIn'
                        style={{ display: showError ? '' : 'none' }}
                    >
                        No hero with <b>{q}</b>
                    </div>
                    <div className="col-md-10 results-grid">
                        {
                            heroes.map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
