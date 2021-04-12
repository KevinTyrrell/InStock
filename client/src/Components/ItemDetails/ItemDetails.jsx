import React, { Component } from "react";
export class ItemDetails extends Component {

	state = {
		showErrors: this.props.Errors
	};


	componentDidUpdate(prevProps, prevState) {


		if (this.props.Errors !== prevProps.Errors ) {

			this.setState({
				showErrors: {...this.props.Errors}
			})
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
					className={this.state.showErrors.itemName ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Item Name'
					name='itemName'
					value={this.props.currentItem ? this.props.currentItem.itemName : ''}
				/>
				<label className="error__message" style={{ display: this.state.showErrors.itemName ? "flex" : "none" }} htmlFor='itemName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='description'>
					Description
				</label>
				<textarea
					style={{ resize: "none" }}
					className={this.state.showErrors.description ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Please enter a brief item description...'
					name='description'
					value={this.props.currentItem ? this.props.currentItem.description : ''}
					
				/><label className="error__message" style={{ display: this.state.showErrors.description ? "flex" : "none" }} htmlFor='description'>
					This field is required
				</label>
				<label className='input__title' htmlFor='category'>
					Category
				</label>
				<select className={this.state.showErrors.category ? 'form__input-radius form__input-drop error' : 'form__input-radius form__input-drop'} name='category' value={this.props.currentItem ? this.props.currentItem.category : ''} >
					<option value='' >Please Select</option>
					{this.props.categoryList.map((category, i) => {
						return (
							<option key={i} value={category}>
								{category}
							</option>
						);
					})}
				</select>
				<label className="error__message" style={{ display: this.state.showErrors.category ? "flex" : "none" }} htmlFor='category'>
					This field is required
				</label>
			</section>
		);
	}
}

export default ItemDetails;
