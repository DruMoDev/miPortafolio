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
      className="container items-center flex flex-col my-20 md:my-32">
      <h2 className="title--2 self-start">
        {t("contact.title")} {/* Usar traducción */}
      </h2>
      <form
        className="flex flex-col w-3/4 md:w-2/3 gap-4 text-base md:text-xl"
        onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          {t("contact.name")} {/* Usar traducción */}
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="John Doe"
            required
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="bg-[#f4f4f4] block rounded mt-1 w-full text-black px-3 py-2 active:ring ring-primary focus:ring outline-none placeholder:text-slate-500"
          />
        </label>

        <label htmlFor="email">
          {t("contact.email")} {/* Usar traducción */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@example.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-[#f4f4f4] block rounded mt-1 w-full text-black px-3 py-2 active:ring ring-primary focus:ring outline-none placeholder:text-slate-500"
          />
        </label>

        <label htmlFor="mensaje">
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
            className="bg-[#f4f4f4] block rounded mt-1 w-full text-black px-3 py-2 active:ring ring-primary focus:ring outline-none placeholder:text-slate-500"></textarea>
        </label>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-10 w-fit md:px-20 md:py-3 self-center rounded  font-semibold tracking-wider hover:bg-primary-dark transition-all">
          {t("contact.submit")} {/* Usar traducción */}
        </button>
      </form>
    </section>
  );
};

export default Contacto;
