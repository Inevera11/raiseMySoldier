import React from "react";
import Header from "./components/Header";

// function App() {
//   return (
//     <div className="Container">
//       <Header />
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="Container">
      <Header title="Task tracker" />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <div className="Container">
//         <Header />
//         <p>Class</p>
//       </div>
//     );
//   }
// }

export default App;
