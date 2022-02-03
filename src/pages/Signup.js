import React, { useState } from 'react';
import '../styles/login.css';
import { NavLink as Link } from 'react-router-dom';
import { Form, Input, Select, Button, Space, Card, Alert } from 'antd';

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 24,
    xs: {
      span: 24,
    },
  },
  wrapperCol: {
    span: 24,
    xs: {
      span: 24,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 24,
    offset: 0,
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const Signup = () => {
  //conexão com a API
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const submitForm = (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      userRole: data.userRole,
    };
    /*
    axios.post('http://127.0.0.1:5000/auth/signup', body)
      .then((response) => console.log(response.data))
      .catch(err => console.log(err))
    */

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    fetch(`/auth/signup`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push(`/${body.userRole}`);
      })
      .catch((err) => console.log(err));

    reset();
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
          {...formItemLayout}
          className='login-form'
          name='register'
          style={{ width: '600px' }}
          onFinish={handleSubmit(submitForm)}
        >
          <Form.Item label='Nome completo' className='signup-item'>
            <Controller
              name='name'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input placeholder='Nome completo' {...field} />
              )}
              rules={{ required: true }}
            />
            {errors.name && (
              <Alert
                message='Por favor insira seu nome completo!'
                type='error'
                showIcon
              />
            )}
          </Form.Item>

          <Form.Item label='Email' className='signup-item'>
            <Controller
              name='email'
              defaultValue=''
              control={control}
              render={({ field }) => <Input placeholder='Email' {...field} />}
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

          <Form.Item label='Senha'>
            <Controller
              name='password'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input.Password placeholder='Senha' {...field} />
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

          <Form.Item
            label='Tipo de usuário'
            rules={[
              {
                required: true,
                message: 'Por favor selecione o tipo de usuário!',
              },
            ]}
          >
            <Controller
              control={control}
              name='userRole'
              render={({ field }) => (
                <>
                  <Select placeholder='Selecione o tipo de usuário' {...field}>
                    <Option value='empreendedor'>Empreendedor</Option>
                    <Option value='mentor'>Mentor</Option>
                  </Select>
                </>
              )}
              rules={{ required: true }}
            />
            {errors.userRole && (
              <Alert
                message='Por favor selecione o tipo de usuário!'
                type='error'
                showIcon
              />
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Criar Conta
            </Button>
            <br />
            <br />
            Já tem uma conta? <Link to='/'>Faça Login</Link>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default Signup;
