import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

// function App() {
//   return (
//     <div className="Container">
//       <Header />
//     </div>
//   );
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist Appointment",
      day: "Feb 26th at 2.30",
      remainder: true,
    },
    {
      id: 2,
      text: "Singing in the shower",
      day: "everyday at 4.30",
      remainder: true,
    },
    {
      id: 3,
      text: "coding",
      day: "Jun 20th at 11.30",
      remainder: false,
    },
    {
      id: 4,
      text: "Mati;s Birthday",
      day: "Sep 5th at 5.30",
      remainder: false,
    },
  ]);
  return (
    <div className="Container">
      <Header title="Task tracker" />
      <Tasks tasks={tasks} />
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
