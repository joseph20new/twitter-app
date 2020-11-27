import English from '../../json/locales/en.json';
import French from '../../json/locales/fr.json';
import Person from '../../json/person.json';

const locales = {
    en: English,
    fr: French
};

export const getLocales = () => {
    return locales;
};

export const fetchPersonName = code => {
    let finalName;
    if (code) {
        for (let person in Person) {
            if (code === Person[person].code) {
                finalName = Person[person].title;
            }
        }
    }
    return finalName;
};

export const formattedName = name => {
    if (name) {
      return `${name}'s`
    }
    return '';
};

export const getTweetNumber = tweetNumber => {
    return parseInt(tweetNumber) + 1;
};

export const getTweetTitle = tweetNumber => {
    return `Tweet #${tweetNumber}`;
};

export const filterTweets = tweetData => {
    let filteredTweets = {};
    if (tweetData) {
        filteredTweets = tweetData.tweets;
    }

    return filteredTweets;
};