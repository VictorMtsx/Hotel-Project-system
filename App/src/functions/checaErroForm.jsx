class ValidarFormulario {
	constructor(formulario) {
		this.formulario = formulario;
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(this.formulario);
		const dados = Object.fromEntries(formData.entries());
		this.checaCamposVazios(dados);
		this.checaCampoNome(dados.name);
		console.log(dados);

		// this.checaFormulario(
		// 	this.checaCamposVazios(dados),
		// );
	}

	checaFormulario(checaCamposVazios, checaCampoNome) {
		if (checaCamposVazios && checaCampoNome) {
			alert("Formulário enviado com sucesso");
		}
	}

	checaCamposVazios(dados) {
		let campos = true;
		if (
			dados.name ||
			dados.email ||
			dados.password ||
			dados.confirmPassword === ""
		) {
			campos = false;
		}

		if (campos === false) alert("preencha todos os campos por favor");

		return campos;
	}

	checaCampoNome(dados) {
		let nome = dados.name;

		nome = true;

		if (nome.length < 3 || nome.length > 12) {
			nome = false;
		}
		if (nome === false) {
			alert("O nome deve ter entre 3 e 12 caracteres");
		}
		console.log(nome.length); // retorna o nome;
	}
}

export default ValidarFormulario;
