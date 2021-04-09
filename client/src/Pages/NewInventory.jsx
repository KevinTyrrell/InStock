import React, { Component } from "react";
import axios from "axios";
import ItemDetails from "../Components/ItemDetails/ItemDetails";
import ItemAvailability from "../Components/ItemAvailability/ItemAvailability";

/*images*/
import ArrowBack from "../InStock Assets/Icons/arrow_back-24px.svg";
import "./NewInventory.scss";

export class NewInventory extends Component {
	state = {
		warehouseList: [],
		categoryList: [],
		submitted: false,
        errors: {
            
        },
	};

	componentDidMount() {
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

			const newItem = {
				warehouseName: warehouseName.value,
				itemName: itemName.value,
				description: description.value,
				category: category.value,
				status: status.value,
				quantity: quantity.value || 0,
			};

			console.log(newItem);
			this.setState({ submitted: true });

			e.target.reset();
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
					<h1 className='form__title'>Add New Inventory Item</h1>
				</div>
                <div className='responsive'>
				<ItemDetails categoryList={this.state.categoryList} />
				<ItemAvailability
					warehouseList={this.state.warehouseList}
					showQuantity={this.state.submitted}
				/></div>
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

export default NewInventory;
