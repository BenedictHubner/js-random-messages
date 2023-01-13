/* Main script */

/* Message component storage */
const months = ['January', 'March', 'May', 'July', 'August', 'October', 'December',
                'April', 'June', 'September', 'November',
                'February'];

const causesOfDeath = ['natural causes', 'a lightning strike', 'a unicorn attack', 'a meteor strike', 'a lightsaber', 'a T-Rex'];

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

/* Message maker */
const dayToString = day => {
    let str = day.toString();
    if (day == 1 || day == 21 || day == 31) {
        str += 'st';
    } else if (day == 2 || day == 22) {
        str += 'nd';
    } else if (day == 3 || day == 23) {
        str += 'rd';
    } else {
        str += 'th';
    }
    return str;
}

const date = getDate();
const cause = causesOfDeath[Math.floor(Math.random()*causesOfDeath.length)];

date[2] = dayToString(date[2]);

const message = 
`I know the number of the sand and the measure of the sea.
I understand the speech of the dumb and hear the voiceless.
Beware this day: ${date[2]} ${date[1]} ${date[0]}.
For on that fateful date, you shall face death in the guise of ${cause}.`;

console.log(message);