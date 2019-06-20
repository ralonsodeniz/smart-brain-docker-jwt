import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box.map((face, faceIndex) => {
          return (
            <div
              className="bounding-box"
              style={{
                top: face.topRow,
                right: face.rightCol,
                bottom: face.bottomRow,
                left: face.leftCol
              }}
              key={faceIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
