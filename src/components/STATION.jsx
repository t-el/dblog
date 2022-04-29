
function Station() {
  return (
    <>
    <div className=" m-2  p-1 container mx-auto border shadow-lg">
      <h1 className="text-7xl text-blue-500">About me</h1>
      <div className="text-3xl" >
        <h1>
        Passionate full stack programmer ,with  a good hands in developing scalable websites & applications using a wide range of skills like :

          <div className="text-sm font-mono font-bold">
          <h6 className=" bg-gray-100 m-1">
            <p style={{width: "80%"}} className="bg-green-300 p-2 ">Html/css/JS</p>
            
          </h6> 
          <h6 className="  bg-gray-100 m-1">
          <p style={{width: "90%"}} className="bg-green-300 p-2 "> NodeJS/React/MongoDb</p>
            </h6> 

          <h6 className="  bg-gray-100 m-1">
          <p style={{width: "70%"}} className="bg-green-300 p-2 ">  Ethereum/Blockchain dev</p>

            </h6> 
          <h6 className="  bg-gray-100 m-1">
          <p style={{width: "80%"}} className="bg-green-300 p-2 ">Python/Rust/C</p> 
            </h6> 
          </div>
        </h1>     
        </div>

        <div className="md:flex just">

        </div>

        <div class="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md ">
        <div class="p-5">
            <p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rest API</h5>
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have a good hands in making APIs endpoints using NodeJS , DenoJS and Python.</p>
        </div>
        </div>

        <div class="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md ">

            <div class="p-5">
                <p>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MERN web Applications</h5>
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have a good hands in making scalable web applications using the MERN stack , your website will be Fast and Secure thanks to this Technlogy</p>
             </div>
        </div>
         
        <div class="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md ">
          <div class="p-5">
              <p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Electron GUIs</h5>
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I can make a Desctop app <br /> 
                <kbd>Linux/MAC/WIN</kbd>
              </p>
          </div>
        </div>

      </div>

    </>
  );
}

export default Station;
