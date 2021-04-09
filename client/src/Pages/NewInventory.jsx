import React, { Component } from 'react'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import ItemAvailability from '../Components/ItemAvailability/ItemAvailability'
/*images*/
import ArrowBack from "../InStock Assets/Icons/arrow_back-24px.svg"
import './NewInventory.scss'

export class NewInventory extends Component {
    render() {
        return (
            <div className="form">
            <div className="title__container-section">
                <img className="icon" src={ArrowBack} alt="Back Arrow" style={{marginRight:".75rem"}} />
                <h1 className="form__title">Add New Inventory Item</h1>
                </div>
                <ItemDetails/>
                <ItemAvailability/>
                <div className="button__container">
                    <button className="button button-cancel">Cancel</button>
                    <button className="button button-submit">+ Add Item</button>
                </div>

            </div>
        )
    }
}

export default NewInventory
