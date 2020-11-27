import React, {Component} from 'react';
import { connect } from 'react-redux';

import MasterSideBar from './sideBar/MasterSideBar';
import TweetContainer from './segments/TweetContainer';
import { getTweets } from '../../actions/master/actionsMaster';
import { filterTweets } from '../../actions/common/utilities';

class MasterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: {}
        };

        this.onPersonChange = this.onPersonChange.bind(this);
        this.props.getTweets();
    }

    componentDidMount = () => {
        //this.props.getTweets();
       //this.setState({ tweets: this.props.tweets[0] });
    }

    onPersonChange = person => {
        if (person === 'dt') {
            this.setState({ tweets: this.props.tweets[0] });
        } else {
            this.setState({ tweets: this.props.tweets[1] });
        }
    };

    render() {
        return (
            <div className="busApp">
                <div className="row">

                    <div className="col-4">
                        <MasterSideBar onPersonChange={this.onPersonChange}/>
                    </div>

                    <div className="col-8">
                        <TweetContainer tweets={this.state.tweets}/>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        tweets: filterTweets(state.getTweetsReducer)
    };
}

const mapDispatchToProps = {
    getTweets: getTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterApp);
