const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
}

const setYear = () => {
    const footer_year = $('#year');
    footer_year.text(getYear());
}

$(document).ready(() => {
    setYear();
});