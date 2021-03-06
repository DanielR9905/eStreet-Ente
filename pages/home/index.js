import Link from 'next/link'
import Swal from 'sweetalert2'

export default function Inicio() {
    const alerta = () => {
        Swal.fire({
            title: 'Acción',
            text: '¿Qué desea hacer?',
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonText: 'Denegar',
        })
    }
    return (
        <>
            <div className="h-screen w-full flex overflow-hidden bg-lightGray">
                <nav className="flex flex-col w-64 px-12 pt-4 pb-6 border-r border-eerieBlack">
                    <Link href="/">
                        <a>
                            <div className="logo">eStreet</div>
                        </a>
                    </Link>
                    <div className="mt-8">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
                            alt="enoshima profile"
                        />
                        <h2 className="mt-4 text-xl font-extrabold">
                            Bienvenido "Ente"
                        </h2>
                    </div>
                    <div className="mt-auto flex items-center text-bloodRed">
                        <a href="#home" className="flex items-center">
                            <svg
                                className="fill-current h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z"></path>
                            </svg>
                            <span className="ml-2 font-medium">
                                Cerrar Sesión
                            </span>
                        </a>
                    </div>
                </nav>
                <main className="flex-1 flex flex-col bg-cultured transition duration-500 ease-in-out overflow-y-auto">
                    <div className="mx-10 my-2">
                        <h2 className="my-4 text-4xl font-semibold text-richBlackFogra">
                            Reportes de usuarios
                        </h2>
                        <div className="mt-8 px-4 py-4 flex justify-between text-silverChalice">
                            <div className="grid grid-cols-6 auto-cols-max w-full text-eerieBlack">
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Nombre
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Ubicación
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Fecha y hora
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Observación
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Prioridad
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Acción
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 px-4 py-4 flex justify-between bg-white shadow-xl rounded-lg text-richBlackFogra">
                            <div className="grid grid-cols-6 w-full auto-cols-max">
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Jhonatan Cardona
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Los Reyes, Dosquebradas
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        09/09/2021 00:00:00
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Incendio
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center text-carnelian">
                                        Alta
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="contenedorBoton">
                                        <button
                                            className="btn"
                                            onClick={alerta()}
                                        >
                                            Acción
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 px-4 py-4 flex justify-between bg-white shadow-xl rounded-lg text-richBlackFogra">
                            <div className="grid grid-cols-6 w-full auto-cols-max">
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Jhonatan Cardona
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Los Reyes, Dosquebradas
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        09/09/2021 00:00:00
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Incendio
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center text-carnelian">
                                        Alta
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="contenedorBoton">
                                        <button className="btn">Acción</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 px-4 py-4 flex justify-between bg-white shadow-xl rounded-lg text-richBlackFogra">
                            <div className="grid grid-cols-6 w-full auto-cols-max">
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Jhonatan Cardona
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Los Reyes, Dosquebradas
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        09/09/2021 00:00:00
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center">
                                        Incendio
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mt-2 text-center text-carnelian">
                                        Alta
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="contenedorBoton">
                                        <button className="btn">Acción</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
