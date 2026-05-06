export function getCurrentDateTimeString(): string {
    const now = new Date();
    return now.toLocaleDateString().replaceAll('.', '_') + '__' + now.toLocaleTimeString().replaceAll(':', '_');
}

export function getNowMMDDYYYY(): string {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}