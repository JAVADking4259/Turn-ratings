const yup = require('yup');

const addUserSchema = yup.object().shape({
    fullName: yup.string().required('full name is required'),
    password: yup.string().required('please enter your password because password is required'),
    email: yup.string().email().required('please enter your email')

});
const registerSchema = yup.object().shape({
    fullName: yup.string().required('full name is required'),
    password: yup.string().required('please enter your password because password is required'),
    email: yup.string().email().required('please enter your email')

});
const loginSchema = yup.object().shape({
    email: yup.string().email().required('please enter your email'),
    password: yup.string().required('please enter your password because password is required'),
});
const barbers = yup.object().shape({
    barberName: yup.string().required('لطفا نام پیرایشگاه خودرا وارد نمایید'),
    address: yup.string().required('لطفا آدرس پیرایشگاه خودرا وارد نمایید')
});
module.exports = { addUserSchema, registerSchema, loginSchema,barbers };