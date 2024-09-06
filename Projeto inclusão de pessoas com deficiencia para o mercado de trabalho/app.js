const deficienciaSelect = document.getElementById('deficiencia');
  const outraDeficiencia = document.getElementById('outraDeficiencia');

  deficienciaSelect.addEventListener('change', () => {
    if (deficienciaSelect.value === 'outra') {
      outraDeficiencia.style.display = 'block';
    } else {
      outraDeficiencia.style.display = 'none';
    }
  });   
  const selectDeficiencia = document.getElementById('deficiencia');
const botaoPesquisar = document.getElementById('pesquisar');
const inputPesquisa = document.getElementById('pesquisa'); // Adiciona um input para a profissão  

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value   
    // se campoPesquisa for uma string sem nada     
    if(!campoPesquisa){    
        section.innerHTML = "<p> Nada foi em contrado. Vc precisa digitar o nome de um atleta ou esporte </p>"
   return
    }   
        
      campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";  
    let titulo = "";  
    let descriçao = ""; 
    let tags = "";

    // Itera sobre cada objeto na lista de dados
    for (let Dado of Dados) { 
      titulo = Dado.titulo.toLowerCase()  
        descriçao = Dado.descriçao.toLowerCase()    
        tags = Dado.tags.toLowerCase()
        // se titulo includes compoPesquisa     
        if (titulo.includes(campoPesquisa)|| descriçao.includes(campoPesquisa)||tags.includes(campoPesquisa)) { 
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado" data-deficiencia="visual,auditiva">
            <h2><a href="${Dado.link}" target="_blank">${Dado.titulo}</a></h2>
            <p class="descriçao-meta">${Dado.descriçao}</p>
            <ul>
                <li><strong>Benefícios:</strong> ${Dado.Benefícios}</li>
                <li><strong>Oportunidades:</strong> ${Dado.Oportunidades}</li>
            </ul>
            <p><strong>Contato:</strong> ${Dado.Contato}</p>
            <p><strong>Locais:</strong> ${Dado.Locais}</p>
            <p><strong>Setores:</strong> ${Dado.Setores}</p>
            <a href="${Dado.link}" target="_blank">Saiba mais</a>
        </div>
    `;
    }
  }   
            
  if(!resultados){   
  resultados = "<p>Nada foi encontrado</p>"
  }
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
} 

