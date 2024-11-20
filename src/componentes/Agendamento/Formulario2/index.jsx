import { useState } from "react";
import styles from "./Formulario2.module.scss";

export default function Formulario2() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [data, setData] = useState("");
  const [contato, setContato] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para processar os dados do formulário
    console.log({
      nome,
      sobrenome,
      whatsapp,
      data,
      contato,
    });

    alert("Formulário enviado com sucesso!");
  };
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome <span>*</span>
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          type="text"
          id="sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <label htmlFor="whatsapp">
          Whatsapp <span>*</span>
        </label>
        <input
          type="text"
          id="whatsapp"
          value={whatsapp}
          placeholder="Telefone"
          onChange={(e) => setWhatsapp(e.target.value)}
          required
        />

        <label htmlFor="data">Melhor dia para vir à clínica</label>
        <input
          type="date"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>
          Como prefere ser contatado? <span>*</span>
        </label>
        <div className={styles.contact_options}>
          <input
            type="radio"
            id="call"
            value="Ligação"
            checked={contato === "Ligação"}
            onChange={(e) => setContato(e.target.value)}
            required
          />
          <label htmlFor="call">Ligação pelo Whatsapp</label>
          <br />

          <input
            type="radio"
            id="audio"
            value="Áudio"
            checked={contato === "Áudio"}
            onChange={(e) => setContato(e.target.value)}
          />
          <label htmlFor="audio">Me envie um áudio</label>
          <br />

          <input
            type="radio"
            id="message"
            value="Mensagem"
            checked={contato === "Mensagem"}
            onChange={(e) => setContato(e.target.value)}
          />
          <label htmlFor="message">Mensagem pelo Whatsapp</label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
