import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ItemDetails.scss'

export class ItemDetails extends Component {

    render() {
        return (
        <section className="form__section form__section-details">
            <label className="section__title">Item Details</label>
            <label className="input__title" htmlFor="item_name">Item Name</label>
                <input className="form__input-radius" type="text" placeholder="Item Name" name="item_name" />
            <label className="input__title" htmlFor="item_description">Description</label>
                <textarea style={{ resize: "none" }} className="form__input-radius" type="text" placeholder="Please enter a brief item description" name="item_name" />
            <label className="input__title" htmlFor="category">Category</label>
                <select className="form__input-radius" name="category">
                    <option value="Please Select" />
                </select>
        </section>
        )
    }
}

export default ItemDetails
