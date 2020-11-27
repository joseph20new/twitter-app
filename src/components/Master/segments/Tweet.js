import React from 'react';
import { Translate } from 'react-redux-i18n';
import { getTweetNumber, getTweetTitle } from '../../../actions/common/utilities';

const Tweet = props => {
  const tweetId = getTweetNumber(props.tweetId);
  const tweetTitle = getTweetTitle(tweetId);

  return (
    <div className="Leg legsCollapse show">
      <div className="card  bg-light mb-3 border-primary mb-3">

        <div className="card-header">
          <div className="row">
            <div className="col-2">
                {tweetTitle}
            </div>
            <div className="col-2 offset-10">
              <button
                className="btn btn-sm btn-dark btn-block btnToggle"
                data-toggle="collapse"
                data-target={`#legCollapse${props.tweetId}`}
                aria-expanded="false"
                aria-controls="collapseExample">
                <Translate value="details.Expand" />
              </button>
            </div>
          </div>
        </div>


        <div className="card-body show" id={`legCollapse${props.tweetId}`}>
            <div className="row">
                <div className="col-2">
                    <img className="tweetImage" src={props.img} alt="No image"/>
                </div>
                <div className="col-10">
                    {props.tweet}
                </div>
            </div>
        </div>

      </div>
    </div>

  );
};

export default Tweet;
