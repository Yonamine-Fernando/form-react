import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm();

  function handleSubmitForm(data) {
    console.log(data);
  }

  return (
    <main>
      <div className="main-text">
        <h1>FICOU COM DÚVIDA <br />
          NOS MANDE UMA MENSSAGEM!</h1>
        <p>
          Caso tenha ficado alguma dúvida, basta mand uma menssageme entraremos em contatos em menos de 24h.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="nome" />
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome completo *"
          className={`campo ${errors.nome ? "campo-obrigatorio" : ""} ${touchedFields.nome && !errors.nome} ? "campo-preenchido" : ""}`}
          {...register("nome", {
            required: "Campo obrigatório"
          })}
        />

        {errors.nome && <p>{errors.nome.menssage}</p>}

        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          className={`campo ${errors.email ? "campo-obrigatorio" : ""} ${touchedFields.email && !errors.email ? "campo-preenchido" : ""}`}
          {...register("email", {
            required: "Campo obrigatório"
          })}
        />
        {errors.email && <p>{errors.email.menssage}</p>}

        <label htmlFor="telefone" />
        <input
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="Telefone *"
          className={`campo ${errors.telefone ? "campo-obrigatorio" : ""} ${touchedFields.telefone &&
            !errors.telefone ? "campo-preenchido"
            : ""
            }`}
          {...register("telefone", {
            required: "Campo obrigatário"
          })}
        />
        {errors.telefone && <p>{errors.telefone.menssage}</p>}

        <label htmlFor="Mensagem *"></label>
        <textarea
          cols="30"
          rows="5"
          placeholder="Mensagem"
          className={`campo ${errors.mensagem ? "campo-obrigatorio" : ""
            } ${errors.mensagem ? "campo-obrigatorio" : ""
            } ${touchedFields.mensagem && !errors.mensagem ? "campo-preenchido"
              : ""
            }
                    }`}
          {...register("mensagem", {
            required: "Campo obrigatório"
          })}
        />
        {errors.mensagem && <p>{errors.mensagem.menssage}</p>}
        <p className="instucao">*campos obrigatórios</p>

        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </main>
  )
}

export default App
