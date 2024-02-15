import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';

function Skills() {
  // useState para gerenciar o estado dos blogs
  const [blogs, setBlogs] = useState([]);
  // useState para gerenciar o estado de carregamento
  const [isLoading, setIsLoading] = useState(true);

  // useEffect para simular o carregamento de dados
  useEffect(() => {
    // Simula uma chamada de API com um delay
    setTimeout(() => {
      // Dados simulados que seriam retornados de uma API
      const blogPosts = [
        {
          id: 1,
          title: "Como utilizar react hooks em um portfólio",
          date: "12 Feb 2030",
          categories: "Design, Pattern",
          content: "Nesse artigo vamos falar sobre quais os principais componentes que utilizamos para desenvolver sistemas. Vamos abordar conteúdos como UseEffect e UseState."
        },
        {
          id: 2,
          title: "Instalando Vite dentro da aplicação",
          date: "12 Feb 2030",
          categories: "Figma, Icon Design",
          content: "Nesse artigo vamos abordar uma das principais ferramentas para um desenvolvedor front-end. Quando falamos de Vite, temos diversos pontos positivos para o deploy de um aplicação."
        }
        // ...mais posts
      ];
      setBlogs(blogPosts);
      setIsLoading(false); // Atualiza o estado para indicar que o carregamento foi concluído
    }, 2000); // Delay de 2 segundos
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez após o componente ser montado

  return (
    <div className={styles.skillsContainer} id='Skills'>
      <p className={styles.blogTitle}>Blog</p>
      {isLoading ? (
        <p>Carregando...</p> // Renderiza isso enquanto os dados não são carregados
      ) : (
        <div className={styles.blogsContainer}>
          {blogs.map(blog => (
            <div key={blog.id} className={styles.blogCard}>
              <h2>{blog.title}</h2>
              <div className={styles.blogInfo}>
                <p>{blog.date}</p>
                <p>{blog.categories}</p>
              </div>
              <p className={styles.textoBlog}>{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
