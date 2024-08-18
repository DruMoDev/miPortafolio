import { useState } from "react";
import { toast } from "react-toastify";
import sendEmail from "../utils/sendEmail";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = {
      nombre,
      apellido,
      email,
      comentario,
    };

    await sendEmail(formDataObject);

    setNombre("");
    setApellido("");
    setEmail("");
    setComentario("");
    toast.success("Correo enviado correctamente!");
  };

  return (
    <section
      id="contacto"
      className="w-full mx-auto min-h-screen flex flex-col justify-center items-center">
      <h2 className="lg:text-9xl text-4xl  font-extrabold  tracking-tighter mb-10 bg-gradient-custom pr-1 text-transparent bg-clip-text">
        Contactame
      </h2>
      <form
        className="flex flex-col w-3/4 md:w-2/3 bg-quaternary p-8 border border-white rounded"
        onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="text-white">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="apellido" className="text-white">
          Apellidos
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@ejemplo.com"
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="mensaje" className="text-white">
          Comentario
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows="4"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Me gustaría contactar contigo para..."
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"></textarea>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-primary">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
