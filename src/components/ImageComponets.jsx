import { Component } from "react";
class ImageComponent extends Component {render(){return <img width={this.props.larghezza} height={this.props.altezza} src={this.props.immagine} alt={this.props.alt}/>}}
export default ImageComponent;