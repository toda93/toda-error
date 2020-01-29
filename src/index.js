import ErrorException from './ErrorException';
import {httpErrorHandler, errorCatch} from './handle';

export {
	ErrorException,
	httpErrorHandler,
	errorCatch
};



export const NOT_FOUND = 'NOT_FOUND';
export const UNKNOWN = 'UNKNOWN';
export const DATA_LOAD_FAILED = 'DATA_LOAD_FAILED';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';
export const SIGNATURE = 'SIGNATURE';
export const RECAPTCHA = 'RECAPTCHA';
export const PERMISSION = 'PERMISSION';
export const PASSWORD_FAILED = 'PASSWORD_FAILED';
export const USER_NOT_FOUND = 'USER_NOT_FOUND';
export const USER_BLOCKED = 'USER_BLOCKED';
export const FILE_EMPTY = 'FILE_EMPTY';
export const FILE_TYPE = 'FILE_TYPE';
export const UNIQUE = 'UNIQUE';
export const NOT_EXISTS = 'NOT_EXISTS';
export const EMAIL_FORMAT = 'EMAIL_FORMAT';
export const JSON_FORMAT = 'JSON_FORMAT';
export const SLUG_FORMAT = 'SLUG_FORMAT';
export const PHONE_NUMBER_FORMAT = 'PHONE_NUMBER_FORMAT';
export const INT_FORMAT = 'INT_FORMAT';
export const NOT_EMPTY = 'NOT_EMPTY';
export const NOT_NULL = 'NOT_NULL';
export const EXISTS_ITEMS = 'EXISTS_ITEMS';

