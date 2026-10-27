interface Props {
    nombre: string
    apellido: string
    documento: string
    cargo: string
}

export default function TarjetaPerfil({ nombre, apellido, documento, cargo }: Props) {

    const tieneDatos = nombre !== "" && apellido !== "" && documento !== "" && cargo !== ""

    return (
    <div>
        {tieneDatos ? (
        <p>¡Hola <strong>{nombre}</strong>! Bienvenido al equipo como <strong>{cargo}</strong>.</p>
        ) : (
        <p>Esperando datos...</p>
        )}
    </div>
    )
}