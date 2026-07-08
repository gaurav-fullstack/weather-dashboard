export function formatDate(date) {
    return new Date(date * 1000).toLocaleString("en-IN");
}

export function validateInput(input) {
    if (!/^[A-Za-z\s]+$/.test(input)) {
        alert("Only letters and spaces are allowed");
        return false;
    } else
        return input;

}