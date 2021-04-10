import React, { Component } from "react";
import axios from "axios";
import ItemDetails from "../Components/ItemDetails/ItemDetails";
import ItemAvailability from "../Components/ItemAvailability/ItemAvailability";

/*images*/
import ArrowBack from "../InStock Assets/Icons/arrow_back-24px.svg";

export class EditInventory extends Component {
	state = {
		warehouseList: [],
		categoryList: [],
		submitted: false,
        testErrors: {
            itemName: false,
            description: false,
            category: false,
			quantity: false,
            warehouseName: false
        }
	};

	componentDidMount() {

		//Initial api calls to generate category and warehouse list
		axios
			.get("/warehouses")
			.then((response) => {
				this.setState({ warehouseList: [...response.data] });
			})
			.catch((err) => {
				console.log(err);
			});

		let catArr = [];

		axios
			.get("/inventories")
			.then((response) => {
				response.data.forEach((item) => {
					if (
						catArr.findIndex((category) => category === item.category) === -1
					) {
						catArr.push(item.category);
					}
				});
				this.setState({ categoryList: [...catArr] });
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
				itemName,
				description,
				category,
				status,
				quantity,
			} = e.target;

				//If any fields are empty
    if( itemName.value === "" || description.value === "" || category.value === ""  || category.value === "" || warehouseName.value === "") {


			//Set error flags according to form inputs
		this.setState({testErrors: {
			itemName: itemName.value === "" ?  true : false,
			description: description.value === "" ? true : false,
			category: category.value === "" ? true : false,
			quantity: category.value === "" ? true : false,
			warehouseName: warehouseName.value === "" ? true : false
		}})
			
            
        }else {

			//Create new Item object
				const newItem = {
					warehouseName: warehouseName.value,
					itemName: itemName.value,
					description: description.value,
					category: category.value,
					status: status.value,
					quantity: status.value === "In Stock" ? quantity.value : 0,
				};

				axios.post("/inventories", newItem)
				.then(response =>
					console.log(response.data) )
				.catch(err => {console.error(err)})

                this.setState({testErrors: {
                    itemName: false,
                    description: false,
                    category: false,
					quantity: false,
                    warehouseName: false
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
					<h1 className='form__title'>Edit Inventory Item</h1>
				</div>
				<div className='responsive'>
					<ItemDetails
						categoryList={this.state.categoryList}
						submitted={this.state.submitted}
						testErrors={this.state.testErrors}
					/>
					<ItemAvailability
						warehouseList={this.state.warehouseList}
						submitted={this.state.submitted}
						testErrors={this.state.testErrors}
					/>
				</div>
				<div className='button__container'>
					<button className='button button-cancel'>Cancel</button>
					<button
						onSubmit={submitHandler}
						type='submit'
						className='button button-submit'>
						+ Add Item
					</button>
				</div>
			</form>
		);
	}
}

export default EditInventory;
