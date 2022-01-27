import Section from "./components/Section/Section";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from './App.module.css'
import propTypes from "prop-types";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    searchName: '',
  }

  onSubmitSearchName = (val) => {
    this.setState({ searchName: val })
  }

  render() {
    const { searchName } = this.state
    return (
      <Fragment>
        <Searchbar onSubmitSearchName={this.onSubmitSearchName} />
        <Section>
          <ImageGallery searchName={searchName} />
          <Loader />
          <Button>Load more</Button>
        </Section>
      </Fragment>
    )
  }
}


export default App