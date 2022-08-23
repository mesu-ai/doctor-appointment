import { lazy } from 'react';
import Calender from '../pages/appointment/Calender';
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
  {
		path: '/calender',
		exact: true,
		component: Calender,
		name: 'Calender',
		protected: false,
	},


]

export default routes;