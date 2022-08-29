// Background Animation 

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})

// Container items 

let mS = ['Jan (01)', 'Feb (02)', 'Mar (03)', 'Apr (04)', 'May (05)', 'Jun (06)', 'Jul (07)', 'Aug (08)', 'Sep (09)', 'Oct (10)', 'Nov (11)', 'Dec (12)'];
let dat = new Date();
let curday = dat.getDate();
let curmon = dat.getMonth() + 1;
let curyear = dat.getFullYear();
let startyear = dat.getFullYear() - 105;
let endyear = dat.getFullYear();
function checkleapyear(datea) {
    if (datea.getYear() % 4 == 0) {
        if (datea.getYear() % 10 != 0) {
            return true;
        } else {
            if (datea.getYear() % 400 == 0) return true;
            else return false;
        }
    }
    return false;
}

function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}

function datediff(date1, date2) {
    let y1 = date1.getFullYear(),
        m1 = date1.getMonth(),
        d1 = date1.getDate(),
        y2 = date2.getFullYear(),
        m2 = date2.getMonth(),
        d2 = date2.getDate();
    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function calage() {
    let calday = document.birthday.day.options[document.birthday.day.selectedIndex].value;
    let calmon = document.birthday.month.options[document.birthday.month.selectedIndex].value;
    let calyear = document.birthday.year.options[document.birthday.year.selectedIndex].value;
    if (curday == "" || curmon == "" || curyear == "" || calday == "" || calmon == "" || calyear == "") {
        alert("please fill all the values..!!");
    } else {
        let curd = new Date(curyear, curmon - 1, curday);
        let cald = new Date(calyear, calmon - 1, calday);

        var diff = Date.UTC(curyear, curmon, curday, 0, 0, 0) - Date.UTC(calyear, calmon, calday, 0, 0, 0);
        let dife = datediff(curd, cald);
        document.birthday.age.value = dife[0] + " years " + dife[1] + " months and " + dife[2] + " days";
        let monleft = (dife[0] * 12) + dife[1];
        let secleft = diff / 1000 / 60;
        let hrsleft = (secleft / 60);
        let daysleft = (hrsleft / 24);
        document.birthday.months.value = monleft + " month";
        document.birthday.daa.value = daysleft + " days";
        document.birthday.hours.value = hrsleft + " hours";
        document.birthday.min.value = secleft + " minutes";
        document.birthday.sec.value = (secleft * 60) + " seconds";
        let as = parseInt(calyear) + dife[0] + 1;
        var diff = Date.UTC(as, calmon, calday, 0, 0, 0) - Date.UTC(curyear, curmon, curday, 0, 0, 0);
        let datee = diff / 1000 / 60 / 60 / 24;
        document.birthday.nbday.value = datee + " Days";
    }
}