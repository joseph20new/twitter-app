import React from 'react';
import { Translate } from 'react-redux-i18n';
import Tweet from './Tweet';
import { formattedName, fetchPersonName } from '../../../actions/common/utilities';

const buildTweetHeader = (nameCode) => {
    const personName = formattedName(fetchPersonName(nameCode));
    const title = personName.length > 0 ? `${personName} Tweets` : 'Choose a Person to get the tweets.';

    return <div className="alert alert-success" role="alert">
        < div className = "row" >
            <div className="col-12">
                {title}
            </div>
        </div >
      </div >
};

const buildTweetBody = tweetsData => {
    let tweetBody = [];
    
    for (let index in tweetsData.tweets) {
        const tweet = tweetsData.tweets[index];
        tweetBody.push(< Tweet key={index} tweetId={index} tweet={tweet} img={tweetsData.imgUrl} nameCode={tweetsData.code} />);
    }  

    return tweetBody;
}

const TweetContainer = props => {
    const tweetHeaderDiv = buildTweetHeader(props.tweets.code);
    const tweetBodyDiv = buildTweetBody(props.tweets);

  return (
    <div className="segmentsList">
          {tweetHeaderDiv}
          {tweetBodyDiv}
    </div>
  );
};

export default TweetContainer;
