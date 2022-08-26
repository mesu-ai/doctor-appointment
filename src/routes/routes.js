import { lazy } from 'react';
import HomePage from '../pages/homepage/HomePage';
const PatientDetails = lazy(()=>import('../pages/patientDetails/PatientDetails'));
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
		path: '/home',
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
		path: '/patient-details',
		exact: true,
		component: PatientDetails,
		name: 'PatientDetails',
		protected: false,
	},
  


]

export default routes;