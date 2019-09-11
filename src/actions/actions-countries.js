export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';
export const SET_PER_PAGE = 'SET_PER_PAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}

export function setPerPage(number) {
    return {
        type: SET_PER_PAGE,
        number
    }
}

export function setCurrentPage(number) {
    return {
        type: SET_CURRENT_PAGE,
        number
    }
}