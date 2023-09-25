import React from 'react';

export const ROOT = React.lazy(() => import('../component/home.js'));
export const ABOUT_US = React.lazy(() => import('../component/aboutus.js'));
export const CONTACT_US = React.lazy(() => import('../component/contactus.js'));
