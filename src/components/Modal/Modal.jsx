import { Component} from 'react';
import PropTypes from 'prop-types';


export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };
    

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    };

    render() {
        return (
            <div onClick={this.handleBackdropClick}>
                <div>
                    <img src={this.props.largeImage}
                    alt="choosed foto" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};