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
        <section>
            <div>
                <img src={backArrow} alt="back arrow"/>
                <h1>Television</h1>
                <img src={editIcon} alt="edit icon" />
            </div>

            <h4>ITEM DESCRIPTION:</h4>
            <p>{this.state.data.description}</p>

            <h4>CATEGORY:</h4>
            <p>{this.state.data.category}</p>

        <div>
            <div>
                <h4>STATUS:</h4>
                <p>{this.state.data.status}</p>
            </div>
            <div>
                <h4>QUANTITY:</h4>
                <p>{this.state.data.quantity}</p>
            </div>

        </div>

        <h4>WAREHOUSE:</h4>
        <p>{this.state.data.warehouseName}</p>

            </section>
        )
    }
}

export default SingleInventory;
