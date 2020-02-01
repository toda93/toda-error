module.exports = (function () {
    function ErrorException(code, errors = []) {
        if (errors === void 0) { errors = []; }
        this.name = 'ErrorException';
        this.message = code;
        this.code = code;
        this.errors = errors;
    }
    return ErrorException;
})();

