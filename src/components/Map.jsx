import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
//   ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-1, -3],
        scale: 900
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="orange"
        stroke="white"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>


      <Annotation
        subject={[24.75, 59.4]}
        dx={-200}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I am here"}
        </text>
      </Annotation>



    </ComposableMap>
  );
};

export default Map;
