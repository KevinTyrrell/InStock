import React, { Component } from 'react'

export class WarehouseDetails extends Component {
	state = {
		showErrors: this.props.testErrors
	};


	componentDidUpdate(prevProps, prevState) {

		if (this.props.testErrors !== prevProps.testErrors ) {

			this.setState({
				showErrors: {...this.props.testErrors}
			})
		}
	}

	render() {
		return (
			<section className='form__section form__section-details'>
				<label className='section__title'>Warehouse Details</label>
				<label className='input__title' htmlFor='WarehouseName'>
					Warehouse Name
				</label>
				<input
					className={this.state.showErrors.WarehouseName ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Warehouse Name'
					name='WarehouseName'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.WarehouseName ? "flex" : "none" }} htmlFor='WarehouseName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='streetAddress'>
					Street Address
				</label>
				<input
					className={this.state.showErrors.streetAddress ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Street Address'
					name='streetAddress'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.streetAddress ? "flex" : "none" }} htmlFor='streetAddress'>
					This field is required
				</label>
				<label className='input__title' htmlFor='city'>
					City
				</label>
				<input
					className={this.state.showErrors.city ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='City'
					name='city'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.city ? "flex" : "none" }} htmlFor='city'>
					This field is required
				</label>
				<label className='input__title' htmlFor='country'>
					Country
				</label>
				<input
					className={this.state.showErrors.country ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Country'
					name='country'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.country ? "flex" : "none" }} htmlFor='country'>
					This field is required
				</label>
			</section>
		);
	}
}

export default WarehouseDetails
