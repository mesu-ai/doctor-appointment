import React, { lazy } from 'react';
import HomePage from '../pages/homepage/HomePage';
const Appointment =lazy(()=>import('../pages/appointment/Appointment'));


 const routes=[
  {
		path: '/',
		exact: true,
		component: HomePage,
		name: 'HomePage',
		protected: false,
	},
  {
		path: '/appointment',
		exact: true,
		component: Appointment,
		name: 'Appointment',
		protected: false,
	},


]

export default routes;