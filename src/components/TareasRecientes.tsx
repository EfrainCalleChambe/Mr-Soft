import React from "react";

const UpcomingTasks: React.FC = () => {
  // Ejemplo de tareas cercanas
  const tasks = [
    { id: 1, title: "Complete the project report", date: "Sept 30, 2024" },
    { id: 2, title: "Team meeting with John", date: "Oct 1, 2024" },
    { id: 3, title: "Submit tax documents", date: "Oct 5, 2024" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Upcoming Tasks
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Don't forget your most important tasks for the next days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-indigo-100 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {task.title}
              </h3>
              <p className="text-gray-600">Due on: {task.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTasks;
