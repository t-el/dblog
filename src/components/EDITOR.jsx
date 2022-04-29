import { useState , useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
//import ReactMarkdown from 'react-markdown'
function Editor() {
    const [value, setValue] = useState("**Hello Taha!!!**");

   useEffect(() => {
    
  },[]); 

  function addArticle(){
    fetch("https://stark-basin-88925.herokuapp.com/add",
    {
      method: "POST",
      body: JSON.stringify({
          title: document.getElementById('title').value,
          content: value,
          tags: document.getElementById('tags').value
      }),
 
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }
    )
  }
    return (
      <>
      <div className=" mt-2  p-1 container mx-auto   ">
        <h1 className="text-7xl text-orange-800">Editor</h1>
      </div>
           <input id="title" className="m-2 p-2 border-2 border-gray-400 w-1/2 outline-none" placeholder="Title .."  type="text" name="title" />
           <input id="tags" className="m-2 p-2 border-2 border-gray-400 w-1/2 outline-none" placeholder="Tags .."  type="text" name="tags" />

           <div data-color-mode="light" className="container m-2">
                <MDEditor
                  value={value}
                  onChange={setValue}
                />
                <button onClick={addArticle} className="p-1 m-2  border bg-blue-400 rounded-lg shadow ">Add Article</button>
              
              </div>

      </>
    );
  }
  
  export default Editor ;