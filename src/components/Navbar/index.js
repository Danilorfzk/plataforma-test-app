import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

import '../../styles/home.css';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal'>
        <SubMenu key='sub1' title='Gerente'>
          <Menu.Item key='1'>
            <Link to='/dashboard/gerente'>Tela Dashboard do Gerente</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub1' title='Mentor'>
          <Menu.Item key='1'>
            <Link to='/dashboard/gerente'>Tela Dashboard do Gerente</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub1' title='Empreendedor'>
          <Menu.Item key='1'>
            <Link to='/dashboard/coordenador_task'>Tela de tasks</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title='Todas as Telas'>
          <Menu.Item key='6'>
            <Link to='/'>Tela de Login</Link>
          </Menu.Item>
          <Menu.Item key='7'>
            <Link to='/dashboard/gerente'>Tela Dashboard do Gerente</Link>
          </Menu.Item>
          <Menu.Item key='8'>
            <Link to='/dashboard/gerente_projetos'>
              Tela dos projetos Cadastrados
            </Link>
          </Menu.Item>
          <Menu.Item key='9'>
            <Link to='/dashboard/gerente_novoprojeto'>
              Tela de criação de projeto
            </Link>
          </Menu.Item>
          <Menu.Item key='10'>
            <Link to='/dashboard/gerente_mentores'>Tela dos mentores</Link>
          </Menu.Item>
          <Menu.Item key='11'>
            <Link to='/dashboard/novo_mentor'>
              Tela de cadastro de novo mentor
            </Link>
          </Menu.Item>
          <Menu.Item key='12'>
            <Link to='/dashboard/relatorios'>Tela de Relatórios</Link>
          </Menu.Item>
          <Menu.Item key='13'>
            <Link to='/dashboard/novo_relatorio'>
              Tela de criação de novo Relatório
            </Link>
          </Menu.Item>
          <Menu.Item key='14'>
            <Link to='/dashboard/coordenador_task'>Tela de tasks</Link>
          </Menu.Item>
          <Menu.Item key='15'>
            <Link to='/dashboard/projeto'>Tela de Infomações do Projeto</Link>
          </Menu.Item>
          <Menu.Item key='16'>
            <Link to='/dashboard/mentor'>Tela de Infomações do Mentor</Link>
          </Menu.Item>
          <Menu.Item key='17'>
            <Link to='/dashboard/relatorio'>
              Tela de Infomações do Relatório
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default Navbar;
