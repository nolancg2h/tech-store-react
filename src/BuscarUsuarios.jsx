import { useState } from "react";
function BuscarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    function buscarUsuarios() {
        setCargando(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setUsuarios(datos);
                setCargando(false);
            });
    }
    return (
        <div>
            <button onClick={buscarUsuarios}>Buscar usuarios</button>
            {cargando && <p>Cargando...</p>}
            {!cargando && usuarios.length === 0 && <p>Aún no hay resultados.</p>}
            {usuarios.map((usuario) => (
                <p key={usuario.id}>{usuario.name} — {usuario.email}</p>
            ))}
        </div>
    );
}
export default BuscarUsuarios