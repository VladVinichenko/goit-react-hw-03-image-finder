import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ url, alt }) => {
  return (
    <li className={s.galleryItem}>
      <img className={s.galleryImage} src={url} alt={alt} />
    </li>
  )
}

export default ImageGalleryItem