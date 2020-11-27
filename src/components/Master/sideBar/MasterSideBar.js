import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actsMaster from '../../../actions/master/actionsMaster';
import { Translate } from 'react-redux-i18n';

class MasterSideBar extends Component {
    constructor(props) {
      super(props);

      this.changePerson = this.changePerson.bind(this);
    }

    changePerson = event => {
        this.props.onPersonChange(event.target.value);
    };

   render() {

    return (

        <div className="detailsbox sticky-top ">

        <div className="card bg-info">
                <div className="card-header text-white">
            <div className="row">

              <div className="col-12">
                <h6><Translate value="details.ControlPanel" /></h6>
              </div>
            </div>
          </div>

          <div className="card-body show text-white" id="detailsBoxCollapse">

            <div className="row">
                <div className="col-8">
                            <label htmlFor="fromCity"><Translate value="details.ChooseLanguage" /></label>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                        onChange={this.props.changeLanguageHandler}
                            >

                        <option value='en'>--Select--</option>
                        {this.props.langs.map(lang => (<option key={lang.code} value={lang.code}>{lang.title}</option>))}
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                            <label htmlFor="departDate"><Translate value="details.ChoosePerson" /></label>
                    <select
                        className="form-control"
                        onChange={this.changePerson}
                            >
                                <option value='dt'>--Select--</option>
                                {this.props.persons.map(person => (<option key={person.code} value={person.code}>{person.title}</option>))}
                    </select>
                </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

const mapStateToProps = state => {
    return {
        langs: state.getLanguagesReducer,
        persons: state.getPersonReducer
    };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    changeLanguageHandler: actsMaster.changeLanguageAction
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MasterSideBar);
