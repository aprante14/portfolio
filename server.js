const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "***********@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.nome + " " + req.body.sobrenome;
  const email = req.body.email;
  const message = req.body.mensagem;
  const phone = req.body.telefone;
  const mail = {
    from: name,
    to: "***********@gmail.com",
    subject: "Formulário de Contato - Portfolio",
    html: `<p>Nome: ${name}</p>
           <p>Email: ${email}</p>
           <p>Telefone: ${phone}</p>
           <p>Mensagem: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Mensagem enviada" });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Servidor rodando"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
