import { useParams } from 'react-router-dom';
import { useState , useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
function Article() {
    const {id} = useParams();
    const [article , setArticle] = useState([]);


    async function getArticleFromEndPoint(){
        let res = await fetch(`https://stark-basin-88925.herokuapp.com/article/${id}`);
        let jsonData = await res.json();
        setArticle(jsonData);
        
    }

    useEffect(() => {
        getArticleFromEndPoint();
     },[article]); 

    return (
      <>
      <div className=" mt-2  p-1 container mx-auto   ">
    
        <div data-color-mode = "light" className="  p-1 ">
            {article.map((ar)=>
            <div className="">

            <h1 className="md:text-6xl text-slate-500 m-1">{ar.title}</h1><br />
            {ar.tags.map((tag)=>
            <span className="p-1 rounded bg-gray-300 m-2 text-slate-800">{tag}</span>
            )}

            <h6 className="p-1 text-sm m-1">{ar.date}</h6>
            <article className="container mx-auto md:w-1/2">
            <MDEditor.Markdown className="p-2 rounded-lg  m-2"  source={ar.content}></MDEditor.Markdown>

            </article>
            </div>
            
            )}
            </div>
      </div>
      
   
      
  
  
  
  
      </>
    );
  }
  
  export default Article;