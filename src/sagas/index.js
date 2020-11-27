import tweetData from '../json/tweetData.json';

import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTweets() {
   // const tweets = yield fetch('https://api.twitter.com/2/tweets/search/recent?query=from:realDonaldTrump&tweet.fields=id,source,text,author_id,created_at', {
   //                 method: 'GET',
   //     headers: {
   //         'authorization': 'OAuth',
   //         'oauth_consumer_key': 'CONSUMER_API_KEY',
   //         'oauth_nonce': 'OAUTH_NONCE',
   //         'oauth_signature': 'OAUTH_SIGNATURE',
   //         'oauth_signature_method': 'HMAC-SHA1',
   //         'oauth_timestamp': 'OAUTH_TIMESTAMP',
   //         'oauth_token': 'ACCESS_TOKEN',
   //         'oauth_version': '1.0'
   //     }}).then(response => response.json());

    // hardcoding from json as I dont want to authenticate Twitter api with my consumer key, id and password.
    yield put({ type: "TWEETS_RECEIVED", json: tweetData });
}
function* actionWatcher() {
    yield takeLatest('GET_TWEETS', fetchTweets)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}