
import * as Yup from 'yup';
const validMobile=new RegExp(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/);

export const validationSchema = Yup.object({
	name: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required Patient Name'),
  phone: Yup.string().required('Required Phone Number').matches(validMobile, 'Invalid Phone Number'),
    
  reason: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required Valid Reasone'),

});
