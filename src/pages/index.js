import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";
import Image from "next/image"


const inititalState = {
  domainToSearch: "",
};

const Home = () => {
  const [task, setTask] = useState(inititalState);
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!router.query.id) {
      createTask(task.title, task.description);
      // setTask(inititalState);
    } else {
      updateTask(router.query.id, task);
    }

    router.push("/");
  };

  useEffect(() => {
    if (router.query.id) {
      const taskFound = tasks.find((task) => task.id === router.query.id);
      if (taskFound)
        setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, [router.query.id]);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <form className="bg-gray-700 p-10 h-2/2" onSubmit={handleSubmit}>

          <div className="relative hero container max-w-screen-lg mx-auto mb-6 h-24">
            <Image
              src="/ico.png" layout="fill" objectFit="contain"
            />
          </div>

          <h1 className="text-3xl mb-7 text-center">
            Registro de identidad de emisores de afirmaciones verificables
            (ens.pe)
          </h1>
          <div className="flex flex-row">
            <input
              type="text"
              className="flex flex-grow bg-gray-800 focus:text-gray-100 focus:outline-none w-full  py-3 px-4 mb-5 h-12 "
              placeholder="Ingrese el dominio a buscar"
              autoFocus
              name="title"
              onChange={handleChange}
              value={task.title}
            />
            <button
              className="flex flex-grow  bg-yellow-600 hover:bg-yellow-400 px-4 py-3 rounded-sm disabled:opacity-30 h-12"
              disabled={!task.title}
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Home;
