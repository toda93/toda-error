module.exports = (function() {
    function ErrorException(code, errors = []) {
        this.name = 'ErrorException';
        this.message = typeof errors === 'string' ? errors : this.code
        this.code = code;
        this.errors = errors;
    }
    return ErrorException;
})();