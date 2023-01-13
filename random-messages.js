/* Main script */

/* Message component storage */
const months = ['January', 'March', 'May', 'July', 'August', 'October', 'December',
                'April', 'June', 'September', 'November',
                'February'];

const causesOfDeath = ['natural causes', 'lightning strike', 'unicorn attack', 'meteor strike', 'lightsaber', 'T-Rex'];

/* Random date generation */
const randYear = () => 2024 + Math.floor(Math.random()*50);

const randMonth = () => Math.floor(Math.random()*12);

const randDay = (month, year) => {
    let leap = false;
    let day = 0;
    if (year%4 == 0) {
        leap = true;
    }
    if (month == 11) {
        if (leap) {
            day = Math.floor(Math.random()*29);
        } else {
            day = Math.floor(Math.random()*28);
        }
    } else if (month > 6) {
        day = Math.floor(Math.random()*30);
    } else {
        day = Math.floor(Math.random()*31);
    }
    return day+1;
}

const getDate = () => {
    let year = randYear();
    let month = randMonth();
    let day = randDay(month, year);
    return [year, months[month], day];
}

