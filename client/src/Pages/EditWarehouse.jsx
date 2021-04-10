import React, { Component } from "react";
import axios from "axios";
import WarehouseDetails from "../Components/WarehouseDetails/WarehouseDetails";
import ContactDetails from "../Components/ContactDetails/ContactDetails";

/*images*/
import ArrowBack from "../InStock Assets/Icons/arrow_back-24px.svg";

export class EditWarehouse extends Component {
	state = {
		submitted: false,
        Errors: {
            warehouseName: false,
            streetAddress: false,
            city: false,
            country: false,
			contactName: false,
            position: false,
            phoneNumber: false,
            email: false
        }
	};

	componentDidMount() {

		//Initial api calls to generate category and warehouse list
		axios
			.get("/warehouses")
			.then((response) => {
				
			})
			.catch((err) => {
				console.log(err);
			});


		axios
			.get("/inventories")
			.then((response) => {
			
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {

		//Submit Form logic with validation
		const submitHandler = (e) => {
			e.preventDefault();
            

			const {
				warehouseName,
                    streetAddress,
                    city,
                    country,
                    contactName,
                    position,
                    phoneNumber,
                    email
			} = e.target;

				//If any fields are empty
    if( warehouseName.value === '' || streetAddress.value === '' || city.value === '' || country.value === '' || contactName.value === '' || position.value === '' || phoneNumber.value === '' || email.value === '' ) {
			//Set error flags according to form inputs
		this.setState({Errors: {
			warehouseName: warehouseName.value === '' ? true : false,
            streetAddress: streetAddress.value === '' ? true : false,
            city: city.value === '' ? true : false,
            country: country.value === '' ? true : false,
			contactName: contactName.value === '' ? true : false,
            position: position.value === '' ? true : false,
            phoneNumber: phoneNumber.value === '' ? true : false,
            email: email.value === '' ? true : false
		}})
			
            
        }else {

			//Create new Item object
				const newItem = {
					warehouseName: warehouseName.value,
            streetAddress: streetAddress.value,
            city: city.value,
            country: country.value,
			contactName: contactName.value,
            position: position.value,
            phoneNumber: phoneNumber.value,
            email: email.value
				};

                console.log(newItem);

				axios.post("/something", newItem)
				.then(response =>
					console.log(response.data) )
				.catch(err => {console.error(err)})

                this.setState({Errors: {
                    warehouseName: false,
                    streetAddress: false,
                    city: false,
                    country: false,
                    contactName: false,
                    position: false,
                    phoneNumber: false,
                    email: false
                }})

				//Set submitted state to true to push to components to reset
				this.setState({submitted: true})
				//Reset Form
				e.target.reset();
			}
		};

		return (
			<form onSubmit={submitHandler} className='form'>
				<div className='title__container-section'>
					<img
						className='icon'
						src={ArrowBack}
						alt='Back Arrow'
						style={{ marginRight: ".75rem" }}
					/>
					<h1 className='form__title'>Edit Warehouse</h1>
				</div>
				<div className='responsive'>
					<WarehouseDetails
						submitted={this.state.submitted}
						Errors={this.state.Errors}
					/>
					<ContactDetails
						submitted={this.state.submitted}
						Errors={this.state.Errors}
					/>
				</div>
				<div className='button__container'>
					<button className='button button-cancel'>Cancel</button>
					<button
						onSubmit={submitHandler}
						type='submit'
						className='button button-submit'>
						Save
					</button>
				</div>
			</form>
		);
	}
}

export default EditWarehouse;