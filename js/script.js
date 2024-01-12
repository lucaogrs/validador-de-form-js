function validarFormulario() {
    // Obter valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;

    // Validar Nome
    if (nome.length < 5 || /\d/.test(nome)) {
      alert("O nome deve ter no mínimo 5 caracteres e não deve conter números.");
      return false;
    }

    // Validar E-mail
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("E-mail inválido.");
      return false;
    }

    // Validar Número de Celular
    if (!/^\d{11}$/.test(celular)) {
      alert("Número de celular inválido. Deve conter 11 dígitos numéricos.");
      return false;
    }

    // Validar Senha
    if (senha.length < 8 || senha.length > 32 || !/[A-Za-z]/.test(senha) || !/\d/.test(senha) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha)) {
      alert("Senha inválida. Deve ter entre 8 e 32 caracteres, pelo menos uma letra maiúscula ou minúscula, um número e um caractere especial.");
      return false;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem.");
      return false;
    }

    // Se todas as validações passarem, permitir a submissão do formulário
    return true;
  }


