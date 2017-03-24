import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

class Finca extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animales: [],
            nombre: '',
            codigo: '',
            nota: ''
        }
    }

    getConfig(){
        var config = {
            headers: {'farm': this.props.finca._id}
        };
        return config
    }

    deleteThisFarm() {
      alert(this.props.finca._id);
      Meteor.call('farms.remove', this.props.finca._id);
    }

    getPath(){
        return"/"+this.props.finca._id+"/animales"
    }

    // getAnimales() {
    //
    //     axios.get(ROOT_URL + "animals/" + this.props.fincas.id, this.getConfig())
    //         .then(response => {
    //             this.setState({
    //                 animales: response.data
    //             })
    //         })
    // }

    componentDidMount() {
        console.log("im finca");
        // this.getAnimales();
    }

    render() {
        return (
            <div className="col-md-4 placeholder text-center">
                <h2>{this.props.finca.name}</h2>
                {/*// <NavLink to={this.getPath()}>*/}
                {/*//     <button>*/}
                         {/*<img src="https://i.ytimg.com/vi/KHS-s_m5GRQ/hqdefault.jpg"*/}
                {/*//              className="center-block img-responsive img-circle"*/}
                {/*//              alt="Generic placeholder thumbnail"/>*/}
                {/*//     </button>*/}
                {/*</NavLink>*/}
                {/*<h4 className="text-muted">NumAnimales: {this.props.finca.animals.length}</h4>*/}
                {/*<NavLink to={this.getPath()}><button> lista de animales  </button> </NavLink>*/}
                <button onClick={this.deleteThisFarm.bind(this)}> ELIMINAR FINCA</button>
            </div>
        );
    }
}

export default Finca;
