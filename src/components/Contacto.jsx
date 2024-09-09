import { useState } from "react";
import { toast } from "react-toastify";
import sendEmail from "../utils/sendEmail";
import { useTranslation } from "react-i18next"; // Importar i18next

const Contacto = () => {
  const { t } = useTranslation(); // Inicializar traducción
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    comentario: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendEmail(formData);

    setFormData({
      nombre: "",
      email: "",
      comentario: "",
    });

    toast.success(t("contact.success")); // Usar traducción
  };

  return (
    <section
      id="contacto"
      className="w-full mx-auto min-h-screen flex flex-col justify-center items-center">
      <h2 className="lg:text-9xl text-4xl font-extrabold tracking-tighter mb-10 bg-gradient-custom pr-1 text-transparent bg-clip-text">
        {t("contact.title")} {/* Usar traducción */}
      </h2>
      <form
        className="flex flex-col w-3/4 md:w-2/3 bg-quaternary p-8 border border-white rounded"
        onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="text-white flex flex-col">
          {t("contact.name")} {/* Usar traducción */}
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
          />
        </label>

        <label htmlFor="email" className="text-white flex flex-col">
          {t("contact.email")} {/* Usar traducción */}
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
          />
        </label>

        <label htmlFor="mensaje" className="text-white flex flex-col">
          {t("contact.message")} {/* Usar traducción */}
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows="4"
            value={formData.comentario}
            onChange={(e) =>
              setFormData({ ...formData, comentario: e.target.value })
            }
            placeholder={t("contact.placeholder")}
            className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"></textarea>
        </label>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-primary">
          {t("contact.submit")} {/* Usar traducción */}
        </button>
      </form>
    </section>
  );
};

export default Contacto;
