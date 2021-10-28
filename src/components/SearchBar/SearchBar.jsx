import React, { Component } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
const SearchBarDiv = styled.div`
  width: 14%;
`;

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
        };
    }
    // let getAllBooks = this.props.getAllBooks();
  handleSearchQueryOnChanged = (event, props) => {
    const newSearchQuery = event.target.value;
    this.setState({
        searchQuery: newSearchQuery,
    });
    props.getAllBooks(newSearchQuery);
  };
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getAllBooks(this.state.searchQuery);
  };
  render() {
    // this.filter.props(song => {
    //   return Object.keys(song).some(key => song[key].toLowerCase().includes(filter.toLowerCase()))
    // });
    return (
      <SearchBarDiv>
        <div>
          <h1>Product Search</h1>
          <form
            action=""
            method="get"
            onSubmit={this.handleSubmit}
          >
            <TextField
              color="secondary" focused
              type="text"
              value={this.props.searchQuery}
              onChange={this.handleSearchQueryOnChanged}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </SearchBarDiv>
    );
  }
}
