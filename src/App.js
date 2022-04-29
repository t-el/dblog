import { useState , useEffect } from "react";
//import ReactMarkdown from 'react-markdown'

import { Link} from "react-router-dom";

function App() {

   const [articles , setArticles] = useState([]);

      async function getArticlesFromEndPoint(){
         let res = await fetch("https://stark-basin-88925.herokuapp.com/");
         let jsonData = await res.json();
         setArticles(jsonData);
         
      }

   useEffect(() => {
      getArticlesFromEndPoint();
   },[]); 




  return (
    <div className="font-['sans']" >
       <div className="container  p-1 m-1 mx-auto md:w-1/2 ">
           {articles.map((article ,index)=>
              <article key={article._id} className="border bg-white p-2 hover:shadow m-1">
                 <div className="">
                    <h1 className="text-slate-400 text-3xl">{index+1}</h1>
                 <h1 className="m-1">
                    <Link className="font-bold m-1 md:text-3xl hover:underline" to={`/article/${article.id}`} > {article.title}</Link>
                    </h1>
                 </div>
                  
              </article>
           )}

             

       </div>
    </div>
  );
}

export default App;
