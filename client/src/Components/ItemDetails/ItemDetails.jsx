import React, { Component } from "react";
export class ItemDetails extends Component {

	state = {
		showRequired: false
	};



	componentDidUpdate(prevProps, prevState) {

		if(this.props.showQuantity !== prevProps.showQuantity ){

			     this.setState((currentState) => ({
				showQuantity: true,
				
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
					className={this.props.error ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Item Name'
					name='itemName'
					
				/>
				<label className="error__message" style={{ display: !this.props.error ? "none" : "inline"}} htmlFor='itemName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='description'>
					Description
				</label>
				<textarea
					style={{ resize: "none" }}
					className={this.props.error ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Please enter a brief item description...'
					name='description'
					
				/><label className="error__message" style={{ display: !this.props.error ? "none" : "inline"}} htmlFor='description'>
					This field is required
				</label>
				<label className='input__title' htmlFor='category'>
					Category
				</label>
				<select className={this.props.error ? 'form__input-radius form__input-drop error' : 'form__input-radius form__input-drop'} name='category' >
					<option value='' >Please Select</option>
					{this.props.categoryList.map((category, i) => {
						return (
							<option key={i} value={category}>
								{category}
							</option>
						);
					})}
				</select>
				<label className="error__message" style={{ display: !this.props.error ? "none" : "inline"}} htmlFor='category'>
					This field is required
				</label>
			</section>
		);
	}
}

export default ItemDetails;
