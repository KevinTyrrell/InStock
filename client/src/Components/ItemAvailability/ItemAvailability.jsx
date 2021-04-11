import React, { Component } from "react";

export class ItemAvailability extends Component {
	state = {
		showQuantity: true,
		showError: this.props.errors,
		showErrors: this.props.testErrors,
	};

	componentDidMount(){
		this.setState({showQuantity: true})
	}

	componentDidUpdate(prevProps, prevState) {
		
		if (this.props.submitted !== prevProps.submitted) {
			this.setState({
				showQuantity: true,
				showError: !this.state.showError,
			});
		}

		if (this.props.testErrors !== prevProps.testErrors) {
			this.setState({
				showErrors: { ...this.props.testErrors },
			});
		}
	}

	render() {
		const toggleQuantity = (e) => {
			const { value } = e.target;


			this.setState({showQuantity: !this.state.showQuantity})
			/* value === "Out of Stock"
				? this.setState({
						showQuantity: false,
				  })
				: this.setState({
						showQuantity: true,
				  }); */
		};

		return (
			<section className='form__section'>
				<label className='section__title'>Item Availability</label>
				<label className='input__title' htmlFor='status'>
					Status
				</label>
				<fieldset className='status'>
					<input
						onChange={toggleQuantity}
						className='form__input'
						type='radio'
						name='status'
						value='In Stock'
						defaultChecked
					/>
					<label
						className='input__title-radio'
						htmlFor='instock'
						style={{ marginRight: "5.563rem" }}>
						In Stock
					</label>
					<input
						onChange={toggleQuantity}
						className='form__input'
						type='radio'
						name='status'
						value='Out of Stock'
					/>
					<label className='input__title-radio' htmlFor='outofstock'>
						Out of Stock
					</label>
				</fieldset>
				{this.state.showQuantity ? (
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className='input__title' htmlFor='quantity'>
							Quantity
						</label>
						<input
							className={
								this.state.showErrors.quantity
									? "form__input-radius error"
									: "form__input-radius"
							}
							type='number'
							placeholder='0'
							min='1'
							name='quantity'
						/>
						<label
							className='error__message'
							style={{
								display: this.state.showErrors.quantity ? "flex" : "none",
							}}
							htmlFor='quantity'>
							This field is required
						</label>
					</div>
				) : (
					<div style={{ display: "none" }} />
				)}
				<label className='input__title' htmlFor='warehouseName'>
					Warehouse
				</label>
				<select
					className={
						this.state.showErrors.warehouseName
							? "form__input-radius form__input-drop error"
							: "form__input-radius form__input-drop"
					}
					name='warehouseName'>
					<option value=''>Please Select</option>
					{this.props.warehouseList.map((warehouse, i) => {
						return (
							<option key={i} value={warehouse.name}>
								{warehouse.name}
							</option>
						);
					})}
				</select>
				<label
					className='error__message'
					style={{
						display: this.state.showErrors.warehouseName ? "flex" : "none",
					}}
					htmlFor='warehouseName'>
					This field is required
				</label>
			</section>
		);
	}
}

export default ItemAvailability;
