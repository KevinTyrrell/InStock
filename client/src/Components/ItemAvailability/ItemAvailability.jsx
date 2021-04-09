import React, { Component } from 'react'
import axios from 'axios'
import './ItemAvailability.scss'

export class ItemAvailability extends Component {

    state = {
        warehouseList: [],
        categoryList: []
    }

componentDidMount() {
    
    axios.get("/warehouses")
    .then( (response) => {
        
        this.setState({warehouseList: [...response.data] })
            
    
    })
    
}
    render() {
        return (
        <section className="form__section">
            <label className="section__title">Item Availability</label>
                <label className="input__title" htmlFor="status">Status</label>
            <fieldset className="stock">
                    <input className="form__input" type="radio" name="instock" id="instock" value="In Stock" />
                    <label className="input__title-radio" htmlFor="instock" style={{marginRight: "5.563rem"}}>In Stock</label>
                    <input className="form__input" type="radio" name="outstock" id="instock" value="Out of Stock" />
                    <label className="input__title-radio" htmlFor="outofstock">Out of Stock</label>
            </fieldset>
            <label className="input__title" htmlFor="quantity">Quantity</label>
                <input className="form__input-radius" type="text" placeholder="0" name="quantity" />
            <label className="input__title" htmlFor="warehouse">Warehouse</label>
            <select className="form__input-radius" name="warehouse">
            <option value="Please Select">Please Select</option>
            {this.state.warehouseList.map( warehouse => {
                        return (<option value={warehouse.name}>{warehouse.name}</option>)
                    })}
            </select>
        </section>
        )
    }
}

export default ItemAvailability
