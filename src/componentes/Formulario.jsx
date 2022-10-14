const Formulario=()=>{
    return(
    <div><div className="md w-1/2 mx-5">
            <h2 className="font-black text-3xl">Seguimiento pacientes</h2>
            <p className="mt-5 text-center text-lg">Añade Pacientes <span className="text-indigo-600 font-bold">Administrarlos</span></p>
        
        </div>
                <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" onSubmit={ev => {ev.preventDefault();
                    } }
                >
                    <h2 className="font-bold">Registro de Citas</h2><br />

                    <div>
                    <label htmlFor="nombre" className="block uppercase font-bold text-gray-700">Nombre Paciente</label><br />
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre completo" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" /><br />
                    </div>

                    <div>
                    <label htmlFor="email" className="block uppercase font-bold text-gray-700">Correo Electronico</label><br />
                    <input
                        id="name"
                        name="email"
                        type="email"
                        placeholder="Correo electrónico" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/><br />
                    </div>

                    <div>
                    <label htmlFor="fecha" className="block uppercase font-bold text-gray-700">Fecha de Cita</label><br />
                    <input
                        id="fecha"
                        name="fecha"
                        type="date"  className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" /><br />
                    </div>

                    <div>
                    <label htmlFor="hora" className="block uppercase font-bold text-gray-700" >Hora de Cita</label><br />
                    <input
                        id="hora"
                        name="hora"
                        type="time"  className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" /><br />
                    </div>

                    <div>
                    <label className="block uppercase font-bold text-gray-700">Sintomas</label><br />
                    <textarea
                        id="sintomas"
                        name="sintomas"
                        placeholder="Sintomas que presenta" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" /><br />
                    <input className="block uppercase font-bold text-gray-700"
                        name="registraCita"
                        type="submit"
                        value="Registrar Cita" />
                    </div>
                </form></div>
    )

}
export default Formulario