import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry, setPerPage, setCurrentPage } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
        this.props.dispatch(setPerPage(5));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
         this.props.dispatch(setCurrentPage(this.props.currentPage));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    itemsPerPageChanges(event) {
        this.props.dispatch(setPerPage(event.target.value));
        this.props.dispatch(setCurrentPage(1));
        this.props.dispatch(setCurrentPage(this.props.currentPage));
        
    }

    changePage(perPage) {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.visibleCountries.length / perPage); i++) {
            pageNumbers.push(i);
          }
        return pageNumbers;
    }

    changeCurrentPage(number) {
        this.props.dispatch(setCurrentPage((number - 1) * this.props.countriesPerPage));

    }

    render() {
        const Pagination = (props) => (
            <nav>
                <ul className="pagination">
                    {props.pages.map(number => {
                        return (
                            <li key={number} onClick={() => props.changeCurrentPage(number)} className={ (number - 1) * this.props.countriesPerPage === props.currentPage ? 'active' : '' }>
                                <a>{number}</a>
                            </li>
                        );
                    })}  
                </ul>
            </nav>
        );

        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={e => this.search(e)}/>
                </div>
                <div>
                    Show 
                    <select onChange={e => this.itemsPerPageChanges(e)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    per page
                </div>
                <Pagination pages={this.changePage(this.props.countriesPerPage)} currentPage={this.props.currentPage} changeCurrentPage={(number) => this.changeCurrentPage(number)}/>
                <CountryFlagList countries={this.props.visibleCountries.slice(this.props.currentPage, this.props.currentPage + this.props.countriesPerPage)} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        countriesPerPage: store.countriesReducer.countriesPerPage,
        currentPage: store.countriesReducer.currentPage
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);