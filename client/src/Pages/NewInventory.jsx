import React, { Component } from 'react'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import ItemAvailability from '../Components/ItemAvailability/ItemAvailability'
import './NewInventory.scss'

export class NewInventory extends Component {
    render() {
        return (
            <div className="form">
                <h1 className="form__title">Add New Inventory Item</h1>
                <ItemDetails/>
                <ItemAvailability/>
                <div className="button__container">
                    <button className="button-cancel">Cancel</button>
                    <button className="button-submit">Add Item</button>
                </div>

            </div>
        )
    }
}

export default NewInventory
