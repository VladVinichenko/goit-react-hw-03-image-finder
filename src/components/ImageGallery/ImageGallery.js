import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import s from './ImageGallery.module.css'
import fetchApi from '../../AppService';
import React, { PureComponent } from "react";
import { Fragment } from 'react/cjs/react.production.min';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

class ImageGallery extends PureComponent {
  state = {
    images: [],
    status: 'idle',
    error: null,
    page: 1,
    myRef: React.createRef(),
  }


  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.searchName);
    if (
      prevProps.searchName !== this.props.searchName ||
      prevState.page !== this.state.page
    ) {
      if (prevProps.searchName !== this.props.searchName) {
        fetchApi(this.props.searchName, this.state.page)
          .then(image => {
            if (image.hits.length === 0) {
              return Promise.reject(
                new Error(`No results were found for this: ${this.props.searchName}`)
              )
            }
            this.setState({
              images: [...image.hits],
              status: 'resolved'
            })
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }
    }
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    const { images, status, error } = this.state
    console.log(this.props.searchName);
    console.log(images);
    console.log(status);


    return (
      <Fragment>
        {status === 'idle' && <p className={s.idle}>Input value</p>}
        {status === 'rejected' && <strong>{error.message}</strong>}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button>Load more</Button>}
        {images.length > 0 && (
          <ul className={s.gallery} >
            {
              images.map(el => (
                <ImageGalleryItem key={el.id} url={el.webformatURL} alt={el.tags} />
              ))
            }


          </ul>
        )}

      </Fragment>


    )
  }

}

export default ImageGallery