function verify (password) {
    if(password === null) {
    return 'Password rejected' 
    }
    const conditions = [
        password.length < 8,
        !/[A-Z]/.test(password), // Reject if no uppercase letter
        !/\d/.test(password) // Reject if no digit
    ];
    
    if (conditions.some((condition) => condition)) {
        return 'Password rejected'
    }
    return 'Password accepted';
}

module.exports = verify;