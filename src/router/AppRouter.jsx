import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


import { DCPage, MarvelPage } from '../heroes/pages'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { HeroesRoutes } from '../heroes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                {/* <Route path="marvel" element={<MarvelPage />} /> */}
                {/* <Route path="dc" element={<DCPage />} /> */}

                {/* opcion #1 */}
                <Route path="login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                {/* opcion #2 */}
                {/* <Route path="login/*" element={
                    <PublicRouter>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRouter>
                } /> */}

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRoutes />
                    </PrivateRouter>
                } />
                {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
                {/* <Route path="login" element={<LoginPage />} /> */}
            </Routes>
        </>
    )
}
