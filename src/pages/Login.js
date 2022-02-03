import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Form, Input, Button, Checkbox, Space, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { login } from '../auth';

import '../styles/login.css';

const Login = () => {
  //Conexão com a API
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [userData, setUserData] = useState([]);

  const history = useHistory();

  const loginUser = (data) => {

    console.log(data);

    const requestOptions={
      method:"POST",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(data)
    }

    fetch('/auth/login', requestOptions)
    .then(res => res.json())
    .then(data => {
      //console.log(data.access_token)
      //console.log(data)
      if (!data.message) {
        login(data.access_token);
        history.push('/mentor')
      } 
      else {
        alert('Email ou senha invalida!')
      }
    })
  };

  return (
    <Space
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          style={{ width: '600px' }}
          onFinish={handleSubmit(loginUser)}
        >
          <Form.Item>
            <Controller
              name='email'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Email'
                  {...field}
                />
              )}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              }}
            />
            {errors.email && (
              <Alert
                message='Por favor insira um email valido!'
                type='error'
                showIcon
              />
            )}
          </Form.Item>

          <Form.Item>
            <Controller
              name='password'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Senha'
                  {...field}
                />
              )}
              rules={{ required: true }}
            />
            {errors.password && (
              <Alert
                message='Por favor insira sua senha!'
                type='error'
                showIcon
              />
            )}
          </Form.Item>

          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Manter-me logado</Checkbox>
            </Form.Item>

            <a className='login-form-forgot' href=''>
              Esqueceu sua senha?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Entrar
            </Button>
            <Link to='/signup'>Criar conta</Link>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default Login;
