import React from 'react';
import { Translate } from 'react-redux-i18n';

const Header = () => (
    <div>
        <div className="row">
            <div className="col-12">
                <div className="alert alert-primary" role="alert">
                    Notes<br/>
                    1. Choose any person to load tweets.<br />
                    2. Data has been generated from local json as I do not want to authenticate Twitter with my consumer key , id , access token. <br />
                    3. You might not see request in network as I have commented the twitter api in sagas. Everything has been configured to a point call is amde to Twitter. <br />
                    4. Language can be switched between English and French
                </div>
            </div>
        </div>
      <div className="row">
        <div className="col-12 sectionSpacing">
          <img src="/logos/ReduxLogo.png" />
                <Translate value="details.TwitterApp" />
        </div>
      </div>
   </div>
);

export default Header;
