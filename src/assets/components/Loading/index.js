import React from "react";
import Loader from 'react-loader-spinner'

export default class Loading extends React.Component {
 //other logic
   render() {
    return(
     <Loader
        type="TailSpin"
        color="#ffc300"
        height={50}
        width={50}
     />
    );
   }
}