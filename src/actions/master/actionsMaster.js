import { setLocale } from 'react-redux-i18n';

export const changeLanguageAction = event => {
  return (dispatch, getState) => {
      dispatch(setLocale(event.target.value));
  };
}

export const getTweets = () => ({
    type: 'GET_TWEETS',
});
