import React, { Component } from "react";
export class ItemDetails extends Component {
	render() {
		return (
			<section className='form__section form__section-details'>
				<label className='section__title'>Item Details</label>
				<label className='input__title' htmlFor='itemName'>
					Item Name
				</label>
				<input
					className='form__input-radius c-error c-validation'
					type='text'
					placeholder='Item Name'
					name='itemName'
					required
				/>
				<label className='input__title' htmlFor='description'>
					Description
				</label>
				<textarea
					style={{ resize: "none" }}
					className='form__input-radius'
					type='text'
					placeholder='Please enter a brief item description...'
					name='description'
					required
				/>
				<label className='input__title' htmlFor='category'>
					Category
				</label>
				<select className='form__input-radius form__input-drop' name='category' required>
					<option value='' >Please Select</option>
					{this.props.categoryList.map((category, i) => {
						return (
							<option key={i} value={category}>
								{category}
							</option>
						);
					})}
				</select>
			</section>
		);
	}
}

export default ItemDetails;
