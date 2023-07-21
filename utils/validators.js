module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {}
    if (username.trim() === '') {
        errors.username = 'Username mustn\'t be empty'
    }
    if (username.trim() === '') {
        errors.username = 'Email mustn\'t be empty'
    } else {
        const regEx = '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$'
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address.'
        }
    }
    if (password === '') {
        errors.password = ''
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password must match'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

// 1:03:36