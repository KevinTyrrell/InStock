import React, { Component } from 'react'

export class WarehouseDetails extends Component {
	state = {
		showErrors: this.props.Errors
	};


	componentDidUpdate(prevProps, prevState) {

        if (this.props.submitted !== prevProps.submitted) {
			this.setState({
				showQuantity: true,
			});
		}

		if (this.props.Errors !== prevProps.Errors ) {

			this.setState({
				showErrors: {...this.props.Errors}
			})
		}
	}

	render() {
		return (
			<section className='form__section form__section-details'>
				<label className='section__title'>Warehouse Details</label>
				<label className='input__title' htmlFor='warehouseName'>
					Warehouse Name
				</label>
				<input
					className={this.state.showErrors.warehouseName ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Warehouse Name'
					name='warehouseName'
					defaultValue={this.props.currentWarehouse ? this.props.currentWarehouse.name : ''}
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.warehouseName ? "flex" : "none" }} htmlFor='warehouseName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='address'>
					Street Address
				</label>
				<input
					className={this.state.showErrors.address ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Street Address'
					name='address'
					defaultValue={this.props.currentWarehouse ? this.props.currentWarehouse.address : ''}
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.address ? "flex" : "none" }} htmlFor='address'>
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
					defaultValue={this.props.currentWarehouse ? this.props.currentWarehouse.city : ''}
					
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
					defaultValue={this.props.currentWarehouse ? this.props.currentWarehouse.country : ''}
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.country ? "flex" : "none" }} htmlFor='country'>
					This field is required
				</label>
			</section>
		);
	}
}

export default WarehouseDetails
