const { NOT_FOUND, NOT_NULL, UNIQUE, UNKNOWN } = require('./code');

function httpErrorHandler(e, req, res, next) {
    const error = errorCatch(e);

    if (process.env.NODE_ENV === 'development') {
        console.log(error.errors);
    }
    return res.status(error.status).json({ success: false, errors: error.errors });
}





function errorCatch(e) {
    let status = 400;
    let errors = [];

    if (e.name !== undefined) {
        if (e.name === 'SequelizeValidationError' || e.name === 'SequelizeUniqueConstraintError') {

            if (e.name === 'SequelizeUniqueConstraintError') {
                for (let item of e.errors) {
                    errors.push({
                        code: UNIQUE,
                        message: UNIQUE,
                        data: {
                            field: item.path.replace('UNI_', ''),
                            value: item.value,
                        }
                    });
                }
            } else if (e.name === 'SequelizeValidationError') {
                for (let item of e.errors) {
                    if (item.message.includes('cannot be null')) {
                        item.message = NOT_NULL;
                    }
                    errors.push({
                        code: item.message,
                        message: item.message,
                        data: {
                            field: item.path,
                            value: item.value,
                        }
                    });
                }
            }
        } else if (e.name === 'ErrorException') {
            if (e.code === NOT_FOUND) {
                status = 404;
            }
            errors.push({
                code: e.code,
                message: e.message,
                data: e.errors
            });
        } else if (e.name === 'MulterError') {
            errors.push({
                code: e.code,
                message: e.toString(),
            });
        }
    }

    if (errors.length === 0) {
        status = 500;
        errors.push({
            code: UNKNOWN,
            message: e.message ? e.message : e.toString()
        });

    }
    return {
        status,
        errors
    }
}

module.exports = {
    httpErrorHandler,
    errorCatch
};