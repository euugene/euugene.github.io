function  dateFilter(value, format = 'date') {    // filter to display date

    const options = {                                   // filter settings
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
    }
    console.log(value)
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}

export default dateFilter;
