import tweetData from '../../json/tweetData.json';

export function getTweetsReducer1(state = tweetData, action) {
    const origin = 'f2m673';
    const destination = 'f25dvk';
    const date = '2020-12-12';//this.state.date;
   // const pollingParameter = this.state.isPolling ? '/poll' : '';
   // const indexParameter = this.state.isPolling && this.state.pollingCounter > 1 ? `?index=${this.state.departures.length}` : '';
    const fetchData = fetch(`https://napi.busbud.com/x-departures/${origin}/${destination}/${date}`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/n',
            'X-Busbud-Token': 'PARTNER_BaASYYHxTxuOINEOMWq5GA'
        }
    })
    return state;
}

export const getTweetsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TWEETS':
            return { ...state, loading: true };
        case 'TWEETS_RECEIVED':
            return { ...state, tweets: action.json, loading: false }
        default:
            return state;
    }
};