import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import s from './ImageGallery.module.css'
import fetchApi from '../../AppService';
import React, { Component } from "react";

class ImageGallery extends Component {




  render() {
    console.log(fetchApi(searchName));
    return (
      <ul class="gallery" >
        <ImageGalleryItem />
      </ul>
    )
  }

}

export default ImageGallery