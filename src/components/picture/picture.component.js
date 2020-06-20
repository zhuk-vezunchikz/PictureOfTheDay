import React from "react";
import "./picture.css";


class Picture extends React.Component{
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
            <div className='block'>
                <img src={this.props.picture} alt="Изображение отсутствует"/>
            </div>
        )
    }


}
export default Picture;