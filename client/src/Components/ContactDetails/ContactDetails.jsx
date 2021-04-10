import React, { Component } from 'react'

export class ContactDetails extends Component {
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
				<label className='section__title'>Contact Details</label>
				<label className='input__title' htmlFor='contactName'>
					Contact Name
				</label>
				<input
					className={this.state.showErrors.contactName ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Contact Name'
					name='contactName'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.contactName ? "flex" : "none" }} htmlFor='contactName'>
					This field is required
				</label>
				<label className='input__title' htmlFor='position'>
					Position
				</label>
				<input
					className={this.state.showErrors.position ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Position'
					name='position'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.position ? "flex" : "none" }} htmlFor='position'>
					This field is required
				</label>
				<label className='input__title' htmlFor='phoneNumber'>
					Phone Number
				</label>
				<input
					className={this.state.showErrors.phoneNumber ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Phone Number'
					name='phoneNumber'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.phoneNumber ? "flex" : "none" }} htmlFor='phoneNumber'>
					This field is required
				</label>
				<label className='input__title' htmlFor='email'>
					Email
				</label>
				<input
					className={this.state.showErrors.email ? "form__input-radius error" : "form__input-radius"}
					type='text'
					placeholder='Email'
					name='email'
					
				/>
				<label className="error__message" style={{ display: this.state.showErrors.email ? "flex" : "none" }} htmlFor='email'>
					This field is required
				</label>
			</section>
		);
	}
}

export default ContactDetails
