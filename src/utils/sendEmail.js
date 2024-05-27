import emailjs from "@emailjs/browser";

const sendEmail = async (formDataObject) => {
  const { nombre, apellido, email, comentario } = formDataObject;
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        to_name: "Roger",
        from_name: `${nombre} ${apellido} email: ${email}`,
        message: comentario,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default sendEmail;
