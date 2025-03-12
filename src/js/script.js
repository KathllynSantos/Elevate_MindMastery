document.addEventListener('DOMContentLoaded', function() {
  // Função para alternar o estado dos módulos
  const modules = document.querySelectorAll('.module');
  modules.forEach(module => {
      const arrowIcon = module.querySelector('.arrow-icon');
      const moduleList = module.querySelector('.module-list');

      // Adiciona o evento de clique para abrir/fechar os módulos
      module.addEventListener('click', function() {
          // Alterna o módulo aberto/fechado
          module.classList.toggle('open');
          
          // Alterna a rotação da seta
          arrowIcon.classList.toggle('rotate');
          
          // Alterna a visibilidade da lista de módulos
          if (module.classList.contains('open')) {
              moduleList.style.display = 'block';
          } else {
              moduleList.style.display = 'none';
          }
      });
  });

  // Função para abrir/fechar o módulo com base na interação da seta
  const arrowIcons = document.querySelectorAll('.arrow-icon');
  arrowIcons.forEach(arrow => {
      arrow.addEventListener('click', function(event) {
          // Evita que o clique na seta feche o módulo
          event.stopPropagation();

          // Abre ou fecha o módulo associado à seta
          const module = arrow.closest('.module');
          const moduleList = module.querySelector('.module-list');

          module.classList.toggle('open');
          arrow.classList.toggle('rotate');

          if (module.classList.contains('open')) {
              moduleList.style.display = 'block';
          } else {
              moduleList.style.display = 'none';
          }
      });
  });
});
