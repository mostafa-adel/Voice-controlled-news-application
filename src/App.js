import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey='6e3fe13987e045017d59bfee2bf7747a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    const [newsArticles , setNewsArticles]= useState([]);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand: ({command, articles})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
    },[])
    return(
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;