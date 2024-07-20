import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import Footer from "./components/Footer";

export default function Home() {
  const tasks = [
    { id: 1, name: "Read a book", done: true },
    { id: 2, name: "Take a shower", done: false },
    { id: 3, name: "Sleep", done: false },
  ];

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task detail */}
        {tasks.map((task) => (
          <Task task={{ ...task }} key={task.id} />
        ))}
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Teerapad Pipadboonyarat" studentId="660610765" />
    </div>
  );
}
