import React from 'react';
import { Translate } from 'react-redux-i18n';

const Footer = () => (
      <div className="row">
        <div className="col-12 sectionSpacing">
          <img src="/logos/ReduxLogo.png" />
            <Translate value="details.ContactUs" />
        </div>
      </div>
);

export default Footer;
