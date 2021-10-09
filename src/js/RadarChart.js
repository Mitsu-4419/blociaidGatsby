import React, {useState,memo, useEffect} from "react";
import { RadarDataBack, RadarOptions } from "./RaderConfigBackend";
import { Radar } from "react-chartjs-2";
import { use } from "marked";

export const RadarChart=memo((props)=> {
    console.log(props["chartType"])

    const [RadarOption, setOption] = useState();
    const [RadarData, setData] = useState({});
    const [window_w, setWindow] = useState('');
    useEffect(()=>{
        setWindow(window.innerWidth)
    }, [])
   
    useEffect(()=>{
        if(props["chartType"]==="front"&& window_w > 400){
            setOption(RadarOptions('Frontend',25))
            setData(RadarDataBack(["Vue/nuxt","Quasar","Flutter","GraphQL", "WASM", "Typescript","React.js"], "rgba(34, 202, 236, .2)", "rgba(34, 202, 236, 1)", [5,4,4,3,2,4,4]))
        }else if(props["chartType"]==="front"&& window_w <= 400){
            setOption(RadarOptions('Frontend',18))
            setData(RadarDataBack(["Vue/nuxt","Quasar","Flutter","GraphQL", "WASM", "Typescript","React.js"], "rgba(34, 202, 236, .2)", "rgba(34, 202, 236, 1)", [5,4,4,3,2,4,4]))
        }else if (props["chartType"]==="backend" && window_w > 400){
            setOption(RadarOptions('Backend',25))
            setData(RadarDataBack(["Node.js", "Python", "Django","C,C++", "GCP", "Firebase","Solidity"], "rgba(34, 236, 88, .2)", "rgba(34, 236, 88, 1)", [4,4,4,2,4,5,3]))
        }else if(props["chartType"]==="backend" && window_w <= 400){
            setOption(RadarOptions('Backend',18))
            setData(RadarDataBack(["Node.js", "Python", "Django","C,C++", "GCP", "Firebase","Solidity"], "rgba(34, 236, 88, .2)", "rgba(34, 236, 88, 1)", [4,4,4,2,4,5,3]))
        }else if(props["chartType"]==="others" && window_w > 400){
            setOption(RadarOptions('Others',25))
            setData(RadarDataBack(["Medical", "Statistics", "docker","AI", "DataScience","BlockChain"], "rgba(236, 68, 34, .2)","rgba(236, 68, 34, 1)", [5,3,3,3,3,3]))
        }else if(props["chartType"]==="others" && window_w <= 400){
            setOption(RadarOptions('Others',18))
            setData(RadarDataBack(["Medical", "Statistics", "docker","AI", "DataScience","BlockChain"], "rgba(236, 68, 34, .2)","rgba(236, 68, 34, 1)", [5,3,3,3,3,3]))
        }
    },[])
    return (
        <Radar  data={RadarData} options={RadarOption}/>
    );
})
