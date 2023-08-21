import React, { createContext, useState } from 'react';
import { Layout } from 'antd';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const { Header, Content, Footer } = Layout;
export const TodoContext = createContext(null);


const App = () => {
  const [todos, updateTodos] = useState([]);

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center', marginBottom: '50px', justifyContent: 'center' }}>
        <h1 style={{ color: '#fff' }}>Todo List</h1>
      </Header>
      <Content style={{ padding: '0 50px', height: '76vh' }}>
       <section style={{ display: 'flex', }}>
        <TodoContext.Provider value={{todos, updateTodos}}>
          <TodoList />
          <TodoForm />
        </TodoContext.Provider>
       </section>
      </Content>
      <Footer style={{ textAlign: 'center', borderTop: '2px solid #dadada'}}>Todo App built using ReactJs</Footer>
    </Layout>
  );
};

export default App;