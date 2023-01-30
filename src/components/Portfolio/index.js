import React, { useState } from "react";

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";

export default function App() {
  const [bigImage, setBigImage] = useState(
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
  );
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  const imageClick = (imgSrc) => {
    console.log(imgSrc)
    setBigImage(imgSrc);
  };

  // const london = () => {
  //   setBigImage(imagesArr[0])
  // }

  // const amsterdam = () => {
  //   setBigImage(imagesArr[1])
  // }

  // const sydney = () => {
  //   setBigImage(imagesArr[2])
  // }

  // const tokyo = () => {
  //   setBigImage(imagesArr[3])
  // }

  // const dallas = () => {
  //   setBigImage(imagesArr[4])
  // }

  // const paris = () => {
  //   setBigImage(imagesArr[5])
  // }

  // const athens = () => {
  //   setBigImage(imagesArr[6])
  // }

  // const dubai = () => {
  //   setBigImage(imagesArr[7])
  // }
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // const imageClick = (imgSrc) => {
  // setBigImage(imgSrc);
  // }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL
  const images = imagesArr.map((el, index) => {
    return (
      <img
        src={el.img}
        width="140"
        height="120"
        alt={el.city}
        key={index}
        className={"thumbnails"}
        onClick={() => imageClick(el.img)}
      />
    );
  });

  return (
    <div className="App">
      <h1>PICTURES</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImaage'/> */}

        <div id="bigImage">
          <img src={bigImage} id="bigImage" width="300" alt="bigImage" />
          <div>{imagesArr.city}</div>
        </div>
        <div>{imagesArr.city}</div>
      </div>
      
      
    </div>
  );
}
