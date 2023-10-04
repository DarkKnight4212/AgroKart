import { async } from "@firebase/util";
import React, { useState } from "react";
import "./modelForm.css"; // CSS file for styling
import CropPredictionResult from "./cropModelResult";

function PredictionForm() {
    const [nitrogen, setNitrogen] = useState("");
    const [phosphorus, setPhosphorus] = useState("");
    const [potassium, setPotassium] = useState("");
    const [rainfall, setRainfall] = useState("");
    const [ph, setPh] = useState("");
    const [city, setcity] = useState("");
    const [prediction, setPrediction] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const values=[nitrogen,phosphorus,potassium,ph,rainfall,city]
        // console.log(values)
            const response = await fetch("http://tushar7.pythonanywhere.com/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    values: values,
                }),
            });
            const data = await response.json();
           setPrediction(data.prediction)
           console.log(data.prediction)
        //   return  <CropPredictionResult prediction={data.prediction} />
       
    }; 

    return (
        
        prediction?<CropPredictionResult prediction={prediction} />:
        <div class="form-style-2"  style={{backgroundColor:"white"}}>
            <div class="form-style-2-heading pb-3">Provide your information</div>
            <form action="" method="post" onSubmit={handleSubmit} style={{width: '100%'}}>
                <label for="field1" style={{width: '100%'}}>
                    <span class="">Nitrogen<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field1"
                        id="nitrogen"
                        class="input-field"
                        value={nitrogen}
                        min={0}
                        max={1000}
                        onChange={(event) => setNitrogen(event.target.value)}
                    />
                </label>
                <label for="field2"  style={{width: '100%'}}>
                    <span style={{}}>Phosphorus<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field2"
                        id="phosphorus"
                        class="input-field"
                        
                        value={phosphorus}
                        min={0}
                        max={1000}
                        onChange={(event) => setPhosphorus(event.target.value)}
                    />
                </label>
                <label for="field3"  style={{width: '100%'}}>
                    <span>Potassium<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field3"
                        id="potassium"
                        class="input-field"
                        value={potassium}
                        min={0}
                        max={1000}
                        onChange={(event) => setPotassium(event.target.value)}
                    />
                </label>
                <label for="field4"  style={{width: '100%'}}>
                    <span>Rainfall<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field4"
                        id="rainfall"
                        class="input-field"
                        value={rainfall}
                        min={0}
                        max={1000}
                        onChange={(event) => setRainfall(event.target.value)}
                    />
                </label>
                <label for="field5"  style={{width: '100%'}}>
                    <span>Ph<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field5"
                        id="ph"
                        class="input-field"
                        value={ph}
                        min={0}
                        max={14}
                        onChange={(event) => setPh(event.target.value)}
                    />
                </label>
                <label for="field6"  style={{width: '100%'}}>
                    <span>City<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field6"
                        id="city"
                        class="input-field"
                        value={city}
                        
                        onChange={(event) => setcity(event.target.value)}
                    />
                </label>

                <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div>

    );
};

export default PredictionForm;