import React from 'react';

const CropPredictionResult = ({ prediction }) => {

    console.log(prediction)

    return (
        <div className='container-fluid bg-white py-4' style={{height:"55vh"}}>
            <div className='row text-center my-2' style={{fontSize:"2rem"}}>
                <div>
                    Prediction Result
                </div>
            </div>
            <div className='row text-center my-2'>
                <div>
                    The model predicts : {prediction}
                </div>
            </div>
            {/* <div className='row text-center'>{prediction}</div> */}
        </div>
    );
};

export default CropPredictionResult;