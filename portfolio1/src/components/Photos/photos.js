import React, {Component} from "react";
import { render } from "react-dom";


class Images extends Component{
  constructor(props){
    super(props)
    this.state={
      imageUrl: "",
      imageArrays: [
      "https://upload.wikimedia.org/wikipedia/en/2/24/BlackMirrorTitleCard.jpg",
      "https://tvline.com/wp-content/uploads/2017/12/black-mirror-season-4-netflix-uss-callister.jpg?w=620&h=440&crop=1",
      "https://images.immediate.co.uk/production/volatile/sites/3/2016/10/117573.jpg?webp=true&quality=90&resize=620%2C413",

      ],
    };
  
  }
render(){
  let imageArrays = this.state.imageArrays;
  const images = imageArrays.map((url)=> {
    return(
      <img alt=''
      className="firstImage"
      src={url} />
    )
  })
return(
  <div className ="Images">
    {images}
  </div>
)
}}

export default Images; 