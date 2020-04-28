import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
import Stock from "../components/Stock";

class MainContainer extends Component {
	constructor() {
		super();
		this.state = {
			purchasedStocks: [],
			filter: "all",
			sort: "alphabetical",
		};
	}

	purchaseStock = (id) => {
		this.setState({
			purchasedStocks: [
				...this.state.purchasedStocks,
				this.props.stocks.filter((stock) => stock.id === id),
			].flat(),
		});
	};

	sellStock = (id) => {
		this.setState({
			purchasedStocks: this.state.purchasedStocks.filter(
				(stock) => stock.id !== id
			),
		});
	};

	handleFilter = (e) => {
		this.setState({
			filter: e.target.value,
		});
	};

	filterType = (stocksArr) => {
		return this.state.filter === "all"
			? stocksArr
			: stocksArr.filter((stock) => stock.type === this.state.filter);
	};

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	sortStocks = (stocksArr) => {
		return this.state.sort === "price"
			? stocksArr.sort((a, b) => a.price - b.price)
			: stocksArr.sort((a, b) => (a.name > b.name ? 1 : -1));
	};

	filterSortRender = (stocksArr) => this.sortStocks(this.filterType(stocksArr));

	render() {
		return (
			<div>
				<SearchBar
					stocks={this.props.stocks}
					sortType={this.state.sort}
					handleOnChange={this.handleOnChange}
				/>

				<div className="row">
					<div className="col-8">
						<StockContainer
							purchaseStock={this.purchaseStock}
							stocks={this.filterSortRender(this.props.stocks)}
						/>
					</div>
					<div className="col-4">
						<PortfolioContainer
							purchasedStocks={this.state.purchasedStocks}
							sellStock={this.sellStock}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
