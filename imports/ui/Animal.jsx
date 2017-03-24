/**
 * Created by Juan on 05/03/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "https://ganasoft-api.herokuapp.com/";

class Animal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animales: [],
            nombre: '',
            codigo: '',
            nota: ''
        }
    }

    componentDidMount() {
        console.log("hola");
        this.getAnimales();
    }
    getConfig() {
        var config = {
            headers: {'farm': this.props.params.idfinca}
        };
        return config
    }

    getPath() {
        return "/" + this.props.params.idfinca + "/animales"
    }

    getAnimales() {

        axios.get(ROOT_URL + "animals?farm="+this.props.params.idfinca )
            .then(response => {
                console.log(ROOT_URL + "animals?farm="+this.props.params.idfinca );
                this.setState({
                    animales: response.data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.animales.map((animal, index)=>
                    <div key ={index} className="panel panel-info col-md-3">
                        <div className="panel-heading">
                            <h3 className="panel-title"> ID: {animal.numero}</h3>
                        </div>
                        <div className="col-md-4">
                            <img alt="User Pic" src={animal.foto}
                                 className="img-circle img-responsive"/>
                        </div>
                        <div className="col-md-9">
                            <div className=" col-md-9 col-lg-9 ">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>Especie:</td>
                                        <td> {animal.especie}</td>
                                    </tr>
                                    <tr>
                                        <td>Raza:</td>
                                        <td>{animal.raza}</td>
                                    </tr>

                                    <tr>
                                        <td>Genero:</td>
                                        <td>{animal.sexo}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                )}
            </div>

        );
    }


}
export default Animal;

