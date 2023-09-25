import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurRoutes from './Routes';
import * as Routers from './Routers';
function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<div></div>} >
                <Routes>
                <Route path={OurRoutes.ROOT} element={<Routers.ROOT />} />
                <Route path={OurRoutes.ABOUT_US} element={<Routers.ABOUT_US />} />
                </Routes>
            </Suspense>
        </Router>
    )
}
export default AppRouter