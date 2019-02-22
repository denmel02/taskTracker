import {EMAIL_REGEXP, PASSWORD_REGEXP} from '../constants';

const isEmailValid = (email, isEmptyValid = false) => (isEmptyValid && !email) || EMAIL_REGEXP.test(email);

const isPasswordValid = (password) => PASSWORD_REGEXP.test(password);

export default (type, value, isEmptyValid = false) => {
    switch (type) {
    case 'email':
        return isEmailValid(value, isEmptyValid);
    case 'password':
        return isPasswordValid(value);
    default:
        return true;
    }
};
