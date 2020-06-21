import React from 'react';
import './picture.css';
import Picture from './picture';
import Preloader from "../../common/preloader/preloader";

class PictureHOC extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('picture')) {
      const pictureInfo = JSON.parse(localStorage.getItem('picture'));
      this.props.getPicture(pictureInfo.date);
    } else {
      this.props.getPicture();
    }
  }

  render() {
    return (
      <>
          {this.props.picture ? <Picture picture={this.props.picture}/> : <Preloader />}
      </>
    );
  }
}
export default PictureHOC;
