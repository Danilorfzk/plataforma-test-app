import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Novas Telas
import Empreendedor from './pages/Empreendedor';
import Mentor from './pages/Mentor';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Programa from './pages/Programa';
import MentoriasRealizadas from './pages/MentoriasRealizadas';
import MentoriaRelatorio from './pages/MentoriaRelatorio';
import MentoriasAgendadas from './pages/MentoriasAgendadas';
import MentoriasPrograma from './pages/MentoriasPrograma';
import Agenda from './pages/Agenda';

import DashboardGerente from './pages/DashboardGerente';
import DashboardGerenteProjects from './pages/DashboardGerenteProjects';
import NewProject from './pages/NewProject';
import DashboardGerenteMentores from './pages/DashboardGerenteMentores';
import DashboardNovoMentor from './pages/DashboardNovoMentor';
import DashboardRelatorios from './pages/DashboardRelatorios';
import DashboardNovoRelatorio from './pages/DashboardNovoRelatorio';
import DashboardTask from './pages/DashboardTask';
import DashboardProject from './pages/DashboardProject';
import DashboardGerenteMentor from './pages/DashboardGerenteMentor';
import DashboardGerenteRelatorio from './pages/DashboardGerenteRelatorio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/empreendedor' component={Empreendedor} />
        <Route path='/mentor' component={Mentor} />
        <Route path='/programa' component={Programa} />
        <Route path='/mentorias/realizadas' component={MentoriasRealizadas} />
        <Route path='/mentoria/relatorio' component={MentoriaRelatorio} />
        <Route path='/mentorias/agendadas' component={MentoriasAgendadas} />
        <Route path='/mentorias/programa' component={MentoriasPrograma} />
        <Route path='/agenda' component={Agenda} />
        <Route path='/dashboard/gerente' component={DashboardGerente} />
        <Route
          path='/dashboard/gerente_projetos'
          component={DashboardGerenteProjects}
        />
        <Route path='/dashboard/gerente_novoprojeto' component={NewProject} />
        <Route
          path='/dashboard/gerente_mentores'
          component={DashboardGerenteMentores}
        />
        <Route path='/dashboard/novo_mentor' component={DashboardNovoMentor} />
        <Route path='/dashboard/relatorios' component={DashboardRelatorios} />
        <Route
          path='/dashboard/novo_relatorio'
          component={DashboardNovoRelatorio}
        />
        <Route path='/dashboard/coordenador_task' component={DashboardTask} />
        <Route path='/dashboard/mentor' component={DashboardGerenteMentor} />
        <Route path='/dashboard/projeto' component={DashboardProject} />
        <Route
          path='/dashboard/relatorio'
          component={DashboardGerenteRelatorio}
        />
      </Switch>
    </Router>
  );
}

export default App;
