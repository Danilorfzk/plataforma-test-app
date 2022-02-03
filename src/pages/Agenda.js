import React from 'react';
import '../styles/agenda.css';

import { Layout, Descriptions, Space, Card, Calendar, Badge } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content } = Layout;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '4pm EH - mentoria' },
        { type: 'warning', content: '7pm reunião' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: '9pm Reunião projeto' },
        { type: 'warning', content: '7pm EH - monitoria' },
        { type: 'warning', content: '9pm Reunião projeto' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: '4pm Reunião - projeto' },
        { type: 'warning', content: '9am Reunião' },
        { type: 'warning', content: '6pm Reunião - projeto' },
        { type: 'warning', content: '4pm Reunião - projeto' },
        { type: 'warning', content: '4pm Reunião - projeto' },
        { type: 'warning', content: '6pm Reunião - projeto' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className='events'>
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className='notes-month'>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const Agenda = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarMentor />
      <Layout className='site-layout'>
        <HeaderAdminMentor />
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 760 }}
          >
            <Calendar
              dateCellRender={dateCellRender}
              monthCellRender={monthCellRender}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Agenda;
