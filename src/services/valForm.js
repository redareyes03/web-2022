export default function validateField(val, params = []) {
    if (val == ' ') return 'default';
    return (val.trim() != '' && params.every((val) => val === true)) ? 'success' : 'error';
}

export function validateBool(val) {
    if(val.trim() != '') return true
    return false
}