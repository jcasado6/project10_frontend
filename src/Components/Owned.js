import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


const Shoe = props => (
    <tr>
        <td>{props.shoe.name}</td>
        <td>{props.shoe.brand}</td>
        <td>{props.shoe.model}</td>
        <td>{props.shoe.retail_price}</td>
        <td>{props.shoe.release_date}</td>
        <img scr={props.shoe.img} alt='img'></img>
        <td>
            <Link to={ "/edit/" + props.shoe._id}>Edit</Link>
        </td>
    </tr>
)


class Owned extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoeData: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8000/owned/')
            .then(res => {
                this.setState({ shoeData: res.data });
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    
    render() {
        let list = this.state.shoeData.map(shoe => {
            return <Shoe shoe={shoe} key={shoe.id}/>
        })
    
        return (
            <div>
                <h3>Owned</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Retail Price</th>
                            <th>Release Date</th>
                            <th>Image</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Owned;