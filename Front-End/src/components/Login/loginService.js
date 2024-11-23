export async function loginService(email, senha) {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    // Se o login for bem-sucedido, armazene o token no localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
    } 
    if (data.userId) {
      // Armazena o ID de professor ou aluno com chaves distintas
      if (data.role === 'admin') {
        localStorage.setItem('professor_id', data.userId);
      } else if (data.role === 'user') {
        localStorage.setItem('aluno_id', data.userId); 
      }
    }
    if(data.role){
      localStorage.setItem('role', data.role)
    }
    return data;
}