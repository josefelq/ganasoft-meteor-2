import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Finca from './Finca';
import {Farms} from '../api/fincas.js';
import ReactDOM from 'react-dom';


class Fincas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fincas: []
        }
    }

    handleSubmit(event) {
      event.preventDefault();

      // Find the text field via the React ref
      const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

      Meteor.call('farms.insert', text);

      // Clear form
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    componentDidMount() {
        console.log("hola");
        // this.getFincas();
    }

    render() {
        if (Meteor.userId()) {
            return (
                <div className="container-fluid col-md-10">

                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>

                        <input type="text" ref="textInput" placeholder="Type to add new farms"/>

                    </form>
                    <div className="row placeholders">
                        {console.log(this.props.fincas)}
                        {/*{console.log(this.props.currentUser)}*/}
                        {this.props.fincas.map((finca, index) => <Finca key={index} finca={finca}/>)}
                    </div>

                </div>
            );
        } else {
            return (
                <div>
                    You must be logged in to view your farms!!!
                </div>
            );

        }

    }

}
Fincas.propTypes = {
    fincas: PropTypes.array.isRequired,
    currentUser: PropTypes.object
};
export default createContainer(() => {
    Meteor.subscribe('farms');
    return {
        fincas: Farms.find({owner: Meteor.userId()}).fetch(),
        currentUser: Meteor.user()
    };

}, Fincas);
