import { useParams } from 'react-router-dom';
import { useState , useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
function Article() {
    const {id} = useParams();
    const [article , setArticle] = useState([]);
    const [loading , setLoading] = useState(true);


    async function getArticleFromEndPoint(){
        let res = await fetch(`https://stark-basin-88925.herokuapp.com/article/${id}`);
        let jsonData = await res.json();
        setArticle(jsonData);
        setLoading(false);
    }

    useEffect(() => {
        getArticleFromEndPoint();
     },[article]); 

     function modeChange(){
       let article_container = document.getElementById('article_container');
       let mode = article_container.getAttribute('data-color-mode');
       if(mode == 'light'){
          article_container.setAttribute('data-color-mode','dark');
       }else{
        article_container.setAttribute('data-color-mode','light');
       }
       
     }

    return (
      <>
      <div className=" mt-2  p-1 container mx-auto   ">
    
        <div id="article_container" data-color-mode = "light" className="p-1 ">
          {loading?
          <>
            <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
             </svg>
          </>:<>
           {article.map((ar)=>
            <div className="">

            <h1 className="md:text-6xl text-slate-500 m-1">{ar.title}</h1><br />
            {ar.tags.map((tag)=>
            <span className="p-1 rounded bg-gray-300 m-2 text-slate-800">{tag}</span>
            )}

            <h6 className="p-1 text-sm m-1">{ar.date}</h6>
            <label for="default-toggle" class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onChange = {modeChange} value="light" id="default-toggle" class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
          </label>
            <article className="container mx-auto md:w-[70%]">
            <MDEditor.Markdown className="p-2 rounded-lg  m-2"  source={ar.content}></MDEditor.Markdown>

            </article>
            </div>
            
            )}
          </>}
           
            </div>
      </div>
      
   
      
  
  
  
  
      </>
    );
  }
  
  export default Article;