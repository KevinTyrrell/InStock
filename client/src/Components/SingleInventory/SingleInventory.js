import axios from 'axios';
import React from 'react'
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import './SingleInventory.scss';

let URL = "/inventories/:itemId"

class SingleInventory extends React.Component {
    state = {
        data: []
    }

    componentDidMount () {
        const { match: { params } } = this.props
        axios.get(`/inventories/${params.itemId}`).then((response) => {
            this.setState({ data: response.data});
        })
    }
    render() {
        return (
        <section className="container">
            <div className="container__header">
                <img src={backArrow} alt="back arrow"/>
                <h1 className="container__title">Television</h1>
                <img className="container__editIcon" src={editIcon} alt="edit icon" />
            </div>
            <div className="container__border-bottom"></div>


    <div className="container__info">

        <div className="container__leftside">
            <h4 className="container__info-titles">ITEM DESCRIPTION:</h4>
            <p className="container__info-details">{this.state.data.description}</p>

            <h4 className="container__info-titles">CATEGORY:</h4>
            <p className="container__info-details">{this.state.data.category}</p>

        </div>
        

    <div>
        <div className="container__availability">
            <div>
                <h4 className="container__info-titles">STATUS:</h4>
                <p className="container__info-details container__stock">{this.state.data.status}</p>
            </div>
            <div className="container__quantity">
                <h4 className="container__info-titles">QUANTITY:</h4>
                <p className="container__info-details">{this.state.data.quantity}</p>
            </div>

        </div>

        <h4 className="container__info-titles">WAREHOUSE:</h4>
        <p className="container__info-details">{this.state.data.warehouseName}</p>
    </div>
    </div>
            </section>
        )
    }
}

export default SingleInventory;
