import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { useTasks } from "../context/TasksContext";
import { AiOutlinePlus } from "react-icons/ai";

const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-blue-900 text-white">
      <header className="flex items-center bg-blue-900 px-28 py-5">
        <div className="flex flex-row items-center">
          <div className="relative hidden lg:inline-grid mr-3 mb-1  h-24 w-24 cursor-pointer">
            <Image
              src="/ico.png" layout="fill" objectFit="contain"
            />
          </div>

          <Link href="/">
            <a>
              <h1 className="font-black text-lg">ens.pe</h1>
              <h3 >Registro de emisores de afirmaciones verificables</h3>


            </a>
          </Link>
        </div>
        <div className="flex-grow text-right">
          <button className="mr-9 text-gray-400 font-bold ">
            Que es ens.pe? | Procesos | Tarifas | APIs | Contactos
          </button>
        </div>

        <div className="flex text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            Conectarse
          </button>
        </div>
      </header>

      <main className="h-2/3 px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
