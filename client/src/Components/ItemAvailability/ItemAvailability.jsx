import React, { Component } from "react";

export class ItemAvailability extends Component {
	//FIXME: Radio button logic

	state = {
		showQuantity: true,
	};

	render() {
		const hideQuantity = (e) => {

			if (this.state.showQuantity) {

				this.setState((currentState) => ({
					showQuantity: !currentState.showQuantity,
				}));
				
			}
		};

		const showQuantity = (e) => {

			if (!this.state.showQuantity) {

				this.setState((currentState) => ({
					showQuantity: !currentState.showQuantity,
				}));
				
			}
		};

		return (
			<section className='form__section'>
				<label className='section__title'>Item Availability</label>
				<label className='input__title' htmlFor='status'>
					Status
				</label>
				<fieldset className='status'>
					<input onClick={showQuantity}
						className='form__input'
						type='radio'
						name='status'
						id='instock'
						value='In Stock'
					/>
					<label
						className='input__title-radio'
						htmlFor='instock'
						style={{ marginRight: "5.563rem" }}>
						In Stock
					</label>
					<input
						onClick={hideQuantity}
						className='form__input'
						type='radio'
						name='status'
						id='instock'
						value='Out of Stock'
					/>
					<label className='input__title-radio' htmlFor='outofstock'>
						Out of Stock
					</label>
				</fieldset>
                { this.state.showQuantity ? (<div style={{display:"flex", flexDirection: "column" }}>
				<label className='input__title' htmlFor='quantity'>
					Quantity
				</label>
				<input
					className='form__input-radius'
					type='text'
					placeholder='0'
					name='quantity'
				/></div>) : (<div style={{display: "none"}}>
				<label className='input__title' htmlFor='quantity'>
					Quantity
				</label>
				<input
					className='form__input-radius'
					type='text'
					placeholder='0'
					name='quantity'
				/></div>) }
				<label className='input__title' htmlFor='warehouse'>
					Warehouse
				</label>
				<div className='select'>
					<select className='form__input-radius' name='warehouse'>
						<option value='Please Select'>Please Select</option>
						{this.props.warehouseList.map((warehouse, i) => {
							return (
								<option key={i} value={warehouse.name}>
									{warehouse.name}
								</option>
							);
						})}
					</select>{" "}
				</div>
			</section>
		);
	}
}

export default ItemAvailability;
