import s from './Modal.module.css'
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal(null, null);
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal(null, null);
    }
  };
  render() {
    console.log(this.props);
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <button
            type="button"
            className={s.Button}
            onClick={this.props.onCloseModal}
          >
            Close
          </button>
          <img src={this.props.url} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}


export default Modal