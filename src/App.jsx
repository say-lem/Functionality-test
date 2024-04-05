import { Assignment1 } from "./components/Hackathon/Assignment1";
import { AxiosPageApi } from "./components/axios";;

function App() {
  return (
    <div className=" bg-white w-[100%]">
      <Assignment1/>
      {/* <AxiosPageApi/> */}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import Component1 from './components/dummy/Component1'
// import UseContextParent from './components/dummy/useContext'
// // import Component3 from './components/dummy/component3'
// function App() {

//   // const [myName, setMyName] = useState('Ebere')
 

//   return (
//     <>
//     <UseContextParent>
//       <Component1/>
//     </UseContextParent>
//     {/* <Component1 myName={myName} /> */}
//     </>
//   )
// }

// export default App