//Global Variables
var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","sagittarius","Capricorn"];
var messages = ["You will have a great time as an Aquarius", "Well...you'll have fun in general as a Pisces",
    "If you aren't Sophie Kato,then you haven't lived up to your full potential.", "You are a reliable person who is practical, stable, patient, and devoted; however, you are also stubborn and possessive. There is a lot of desirable qualities that you possess.", "You are in fact, because of your birthday, a Gemini",
    "Just like the people who think the earth is flat, you are Cancer","Leo is indeed one of the best because of the element of Fire, so much passion for their future and passionate to their loved ones.",
    "You are a Virgo, and Virgo just comes after Leo, so they aren't the best but a close 4th, behind Aries and Sagittarius", "The Libra are very indecisive just as many would naturally be but its okay, they are also fair-minded and very social which is great",
    "Scorpio, with the second best symbol, are very passionate and a true friend but are very. While they like truth and being right, which most people naturally would, they are also secretive and violent",
    "Sagittarius are very generous and idealistic with a great sense of humor, a wonderful person to be around. They are both lazy and energetic, looking to explore the world with curiosity and enthusiastic about it,however they are very impacient and promise more than they can deliver. Overall a wonderful sign",
    "Very responsible, self-controlled, and good mannered person; however, they are have some great weaknesses, they are unforgiving, a know-it-all, and very condescending, so maybe work on not being such an asshole."];
var zodiacSigns = ["Rat", "Ox", "Tiger", "Snake", "Rabbit","Dragon", "Horse","Goat","Monkey","Rooster","Dog","Pig"];


function onSubmit() {
//parseInt(); makes the string turn into a number. Words are made into numbers
//Place the () around the function of the parseInt(document.get...value);

    var month = parseInt(document.getElementById("month").value);  // "3" into 3
    var day = parseInt(document.getElementById("day").value);
    var name = document.getElementById("name").value;
    var year = parseInt(document.getElementById("birthday").value);
    var sign =  determineSign(day,month);
    document.getElementById("sign").innerHTML = determineSign(day, month);
    document.getElementById("birthyear").innerHTML = "Your Chinese zodiac sign is year of the " + birthYear(year);
    document.getElementById("message").innerHTML = nameAndMessage(name, sign) + determineHoroscope(sign);
    document.getElementById("image").innerHTML = "<img src='img/" + sign.toLowerCase() + ".jpg'>";

    console.log(day);
    console.log(determineSign(day,month));
    console.log(determineHoroscope(determineSign(day,month)));
    console.log(nameAndMessage(name));
    console.log(birthYear(year));

}


function determineSign(day, month) {
    // For Aquarius
    if (month == 1  && day >= 20 && day <= 31) {
        return signs[0];
    }
    if (month == 2 && day >= 1 && day <= 18) {
        return signs[0];
    }
    //For Pisces
    if (month == 2 && day >= 19 && day <= 29) {
        return signs[1];
    }
    if (month == 3 && day >= 1 && day <= 20) {
        return signs[1];
    }
    //For Aries
    if (month == 3 && day >= 21 && day <= 31) {
        return signs[2];
    }
    if (month == 4 && day >= 1 && day <= 19) {
        return signs[2];
    }
    //For Taurus
    if (month == 4 && day >= 20 && day <= 31) {
        return signs[3];
    }
    if (month == 5 && day >= 1 && day <= 20) {
        return signs[3];
    }
    // For Gemini
    if (month == 5 && day >= 21 && day <= 31) {
        return signs[4];
    }
    if (month == 6 && day >= 1 && day <= 20) {
        return signs[4];
    }
    //For Cancer
    if (month == 6 && day >= 21 && day <= 31) {
        return signs[5];
    }
    if (month == 7 && day >= 1 && day <= 22) {
        return signs[5];
    }
    //For Leo
    if (month == 7 && day >= 23 && day <= 31) {
        return signs[6];
    }
    if (month == 8 && day >= 1 && day <= 22) {
        return signs[6];
    }
    //For Virgo
    if (month == 8 && day >= 23 && day <= 31) {
        return signs[7];
    }
    if (month == 9 && day >= 1 && day <= 22) {
        return signs[7];
    }
    //For Libra
    if (month == 9 && day >= 23 && day <= 30) {
        return signs[8];
    }
    if (month == 10 && day >= 1 && day <= 22) {
        return signs[8];
    }
    // For Scorpio
    if (month == 10 && day >= 23 && day <= 31) {
        return signs[9];
    }
    if (month == 11 && day >= 1 && day <= 21) {
        return signs[9];
    }
    // For Sagittarius
    if (month == 11 && day >= 22 && day <= 30) {
        return signs[10];
    }
    if (month == 12 && day >= 1 && day <= 21) {
        return signs[10];
    }
    // For Capricorn
    if (month == 12 && day >= 22 && day <= 31) {
        return signs[11];
    }
    if (month == 1 && day >= 1 && day <= 19) {
        return signs[11];
    }
    return "You have input an invalid date";
}
//Reference Points
//            1, 2, 3,  4,5, 6, 7 ,8 ,9 ,10,11,12
// months = [31,28,31,30,31,30,31,31,30,31,30,31];
//["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","sagittarius","Capricorn"];

function determineHoroscope(message) {
    //Aquarius
    if (message == signs[0]) {
        return messages[0];
    }
    //Pisces
    if (message == signs[1]) {
        return messages[1];
    }
    //Aries
    if (message == signs[2]) {
        return messages[2];
    }
    //Taurus
    if (message == signs[3]) {
        return messages[3];
    }
    //Gemini
    if (message == signs[4]) {
        return messages[4];
    }
    //Cancer
    if (message == signs[5]) {
        return messages[5];
    }
    //Leo
    if (message == signs[6]) {
        return messages[6];
    }
    //Virgo
    if (message == signs[7]) {
        return messages[7];
    }
    //Libra
    if (message == signs[8]) {
        return messages[8];
    }
    //Scorpio
    if (message == signs[9]) {
        return messages[9];
    }
    //Sagittarus
    if (message == signs[10]) {
        return messages[10];
    }
    //Capricorn
    if(message == signs[11]){
        return messages[11];
    }
    return "You have input an invalid date";
}


// Rat: 2008, 1996, 1984, 1972, 1960
// Ox: 2009, 1997, 1985, 1973, 1961
// Tiger: 2010, 1998, 1986, 1974, 1962
// Rabbit: 2011, 1999, 1987, 1975, 1963
// Dragon: 2012, 2000, 1988, 1976, 1964
// Snake: 2013, 2001, 1989, 1977, 1965
// Horse: 2014, 2002, 1990, 1978, 1966
// Goat: 2015, 2003, 1991, 1979, 1967
// Monkey: 2016, 2004, 1992, 1980, 1968
// Rooster: 2017, 2005, 1993, 1981, 1969
// Dog: 2018, 2006, 1994, 1982, 1970
// Pig: 2019, 2007, 1995, 1983, 1971


function nameAndMessage(name, sign){
    if(name){
        return "Hello " + name + " ,you are a " + sign + " and a ";
    }
}
//

// Find the chinese zodiac sign for birth year
function birthYear(year){
    // var i = 1950;
    if(year == 1950|| year == 1950+ 12 || year == 1950+ 24 ||year == 1950+ 36 || year == 1950 + 48 ||year == 1950+ 60 ||year == 1950+ 72){
        return zodiacSigns[2];
    }
    if(year == 1951 || year == 1951+ 12 ||year ==  1951+ 24 ||year ==  1951+ 36 ||year ==  1951+ 48 ||year ==  1951+ 60 || year == 1951+ 72){
        return zodiacSigns[4];
    }
    if(year == 1952 || year == 1952+ 12 ||year ==  1952+ 24 || year == 1952+ 36 || year == 1952+ 48 || year == 1952+ 60 || year == 1952+ 72){
        return zodiacSigns[5];
    }
    if(year == 1953 || year == 1953+ 12 || year == 1953+ 24 || year == 1953+ 36 || year == 1953+ 48 || year == 1953+ 60 || year == 1953+ 72){
        return zodiacSigns[3];
    }
    if(year == 1954 || year == 1954+ 12 || year == 1954+ 24 || year == 1954+ 36 ||year ==  1954+ 48 || year == 1954+ 60 || year == 1954+ 72){
        return zodiacSigns[6];
    }
    if(year == 1955 || year == 1955+ 12 || year == 1955+ 24 || year == 1955+ 36 || year == 1955+ 48 || year == 1955+ 60 || year == 1955+ 72){
        return zodiacSigns[7];
    }
    if(year == 1956 || year == 1956+ 12 || year == 1956+ 24 || year == 1956+ 36 || year == 1956+ 48 || year == 1956+ 60 || year == 1956+ 72){
        return zodiacSigns[8];
    }
    if(year == 1957 || year == 1957+ 12 || year == 1957+ 24 || year == 1957+ 36 || year == 1957+ 48 || year == 1957+ 60 || year == 1957+ 72){
        return zodiacSigns[9];
    }
    if(year == 1958 || year == 1958+ 12 ||year ==  1958+ 24 || year == 1958+ 36 || year == 1958+ 48 || year == 1958+ 60 || year == 1958+ 72){
        return zodiacSigns[10];
    }
    if(year == 1959 || year == 1959+ 12 ||year ==  1959+ 24 || year == 1959+ 36 || year == 1959+ 48 || year == 1959+ 60 || year == 1959+ 72){
        return zodiacSigns[11];
    }
    if(year == 1960 || year == 1960+ 12 ||year ==  1960+ 24 || year == 1960+ 36 || year == 1960+ 48 || year == 1960+ 60 || year == 1960+ 72){
        return zodiacSigns[0];
    }
    if(year == 1961 || year == 1961+ 12 || year == 1961+ 24 || year == 1961+ 36 || year == 1961+ 48 || year == 1961+ 60 || year == 1961+ 72){
        return zodiacSigns[1];
    }
}
