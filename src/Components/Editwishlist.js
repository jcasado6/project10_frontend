import React, { Component } from 'react';
import axios from 'axios';


class Editwishlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " ",
            brand: " ",
            model: " ",
            retail_price: " ",
            release_date: " ",
            img: " ",
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeRetailPrice = this.onChangeRetailPrice.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteBrew = this.deleteBrew.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/wishlist/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    brand: res.data.brand,
                    model: res.data.model,
                    retail_price: res.data.retail_price,
                    release_date: res.data.release_date,
                    img: res.data.img,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeName(evt) {
        this.setState({
            name: evt.target.value
        })
    }

    onChangeModel(evt) {
        this.setState({
            model: evt.target.value
        })
    }
    onChangeBrand(evt) {
        this.setState({
            retail_price: evt.target.value
        })
    }
    onChangeRetailPrice(evt) {
        this.setState({
            release_date: evt.target.value
        })
    }
    onChangeReleaseDate(evt) {
        this.setState({
            retail_price: evt.target.value
        })
    }
    onChangeImg(evt) {
        this.setState({
            img: evt.target.value
        })
    }
   

    onSubmit(evt) {
        evt.preventDefault()
        const edit = {
            name: this.state.name,
            brand: this.state.brand,
            model: this.state.brand,
            retail_price: this.state.retail_price,
            release_date: this.state.release_date,
            img: this.state.state,
        }
        console.log(edit)
        axios.post('http://localhost:8000/wishlist/' + this.props.match.params.id, edit)
            .then(res => console.log(res.data))
        this.props.history.push('/wishlist');
    }

    deleteBrew(evt) {
        evt.preventDefault()
        const destroy = {
            name: this.state.name,
            brand: this.state.brand,
            model: this.state.brand,
            retail_price: this.state.retail_price,
            release_date: this.state.release_date,
            img: this.state.state,
        }
        console.log(this.props.match.params.id)
        axios.delete('http://localhost:8000/wishlist/' + this.props.match.params.id, destroy)
            .then(res => console.log(res.data))
        this.props.history.push('/wishlist');
    }


    render() {
        return (
            <div>
                <h3 align="center">Update Wishlist</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>

                    <div className="form-group">
                        <label>Brand: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Retail Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeRetailPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Release Date: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.release_date}
                            onChange={this.onChangeReleaseDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Img: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.img}
                            onChange={this.onChangeImg}
                        />
                    </div>
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Wishlist" className="btn btn-primary" />
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Delete Wishlist" className="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this shoe?')) this.deleteBrew(e) }} />

                    </div>
                </form>
            </div>
        )
    }
}

export default Editwishlist