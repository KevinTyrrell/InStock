import React, { Component } from "react";
export class ItemDetails extends Component {

	state = {
		showError: this.props.errors
	};


	componentDidUpdate(prevProps, prevState) {

		if (this.props.submitted !== prevProps.submitted) {
			this.setState((currentState) => ({
				showError: !this.state.showError
			}));
		}

		if (this.props.errors !== prevProps.errors) {
			this.setState((currentState) => ({
				showError: !this.state.showError
			}));
		}
	}

	render() {
		return (
			<section className='form__section form__section-details'>
				<label className='section__title'>Item Details</label>
				<label className='input__title' htmlFor='itemName'>
					Item Name
				</label>
				<input
					className={this.state.showError ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Item Name'
					name='itemName'
					
				/>
				<label className="error__message" style={{ display: this.state.showError ? "flex" : "none" }} htmlFor='itemName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='description'>
					Description
				</label>
				<textarea
					style={{ resize: "none" }}
					className={this.state.showError ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Please enter a brief item description...'
					name='description'
					
				/><label className="error__message" style={{ display: this.state.showError ? "flex" : "none" }} htmlFor='description'>
					This field is required
				</label>
				<label className='input__title' htmlFor='category'>
					Category
				</label>
				<select className={this.state.showError ? 'form__input-radius form__input-drop error' : 'form__input-radius form__input-drop'} name='category' >
					<option value='' >Please Select</option>
					{this.props.categoryList.map((category, i) => {
						return (
							<option key={i} value={category}>
								{category}
							</option>
						);
					})}
				</select>
				<label className="error__message" style={{ display: this.state.showError ? "flex" : "none" }} htmlFor='category'>
					This field is required
				</label>
			</section>
		);
	}
}

export default ItemDetails;
