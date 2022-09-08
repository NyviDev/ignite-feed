import './global.css';
import styles from './App.module.css'

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/nyviDev.png",
          name: "Nicolly Vieira",
          role: "Web Developer"
      },

      content: [ 
          {type: "paragraph", content: "Fala Galera"},
          {type: "paragraph", content:"Acabei de criar o meu portfolio. Dá uma olhadinha lá :)"},
          {type: "link", content:"https://nyvidev.github.io/"}
      ],

      publishedAt: new Date('2022-09-03 20:00:00')
  },

  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/nyviDev.png",
          name: "Nyvi Nyvi",
          role: "Student"
      },

      content: [ 
          {type: "paragraph", content: "Fala Galera"},
          {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare"},
          {type: "link", content:"jane.design/doctorcare"}
      ],

      publishedAt: new Date('2022-09-08 09:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}


