import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { queryAllByAttribute } from "@testing-library/react";

const alanKey='6e3fe13987e045017d59bfee2bf7747a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand: ({command, articles})=>{
                if(command==='newHeadlines'){
                    console.log(articles);
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    )
}

export default App;