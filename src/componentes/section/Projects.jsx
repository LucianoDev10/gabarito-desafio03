import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import projectImage from '../../Image/Rectangle 30.png'; // Substitua pelo caminho correto da sua imagem
import projectImage2 from '../../Image/Rectangle 32.png'; // Substitua pelo caminho correto da sua imagem
import projectImage3 from '../../Image/Rectangle 34.png'; // Substitua pelo caminho correto da sua imagem

function ProjectItem() {
  // Define o estado inicial para os projetos
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simula a carga de dados com um delay (por exemplo, buscar dados de uma API)
    setTimeout(() => {
      const loadedProjects = [
        {
          img: projectImage,
          title: "Desenvolvendo Dashboards",
          description: "Desenvolver dashboards eficazes requer uma combinação de habilidades técnicas em desenvolvimento de software e uma compreensão profunda dos objetivos de negócio e das necessidades dos usuários.",
        },
        {
          img: projectImage2,
          title: "Como criar design efetivos",
          description: "Criar designs efetivos envolve a combinação de princípios estéticos, funcionalidade, e compreensão do público-alvo. Aqui estão algumas dicas para criar designs que sejam não apenas visualmente atraentes, mas também eficazes em comunicar a mensagem desejada e atender às necessidades do usuário.",
        },
        {
          img: projectImage3,
          title: "Como utilizar hooks em um projeto Vite",
          description: "Utilizar hooks em um projeto Vite, especialmente se você está trabalhando com React, é uma maneira eficiente de adicionar estado e lógica de ciclo de vida aos seus componentes funcionais. Aqui está um guia passo a passo sobre como configurar e usar hooks em um projeto Vite com React.",
        },
      ];
      // Atualiza o estado com os projetos carregados
      setProjects(loadedProjects);
    }, 1000); // Delay de 1 segundo
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.blogTitle}>Projetos</p>
      {projects.map((project, index) => (
        <div key={index}>
          <div className={styles.projectItem}>
            <img src={project.img} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
          {index < projects.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
}

export default ProjectItem;
