import React, { useState } from 'react';
import { View } from 'react-native';

import TelaLogin from './Scr/screens/TelaLogin';
import TelaDashboard from './Scr/screens/TelaDashboard';
import TelaReservas from './Scr/screens/TelaReservas';
import TelaOcorrencia from './Scr/screens/TelaOcorrencia';
import TelaSindico from './Scr/screens/TelaSindico';
import NavBar from './Scr/navigation/NavBar';

import {
  AVISOS_INICIAIS,
  RESERVAS_INICIAIS,
  OCORRENCIAS_INICIAIS,
} from './Scr/data';

function renderTela(telaAtual, props) {
  const {
    usuario,
    avisos,
    reservas,
    ocorrencias,
    onNavegar,
    onNovaReserva,
    onNovaOcorrencia,
    onAtualizarReserva,
    onAtualizarOcorrencia,
  } = props;

  switch (telaAtual) {
    case 'dashboard':
      return (
        <TelaDashboard
          usuario={usuario}
          avisos={avisos}
          onNavegar={onNavegar}
        />
      );

    case 'reservas':
      return (
        <TelaReservas
          usuario={usuario}
          reservas={reservas}
          onNovaReserva={onNovaReserva}
        />
      );

    case 'ocorrencia':
      return (
        <TelaOcorrencia
          usuario={usuario}
          ocorrencias={ocorrencias}
          onNovaOcorrencia={onNovaOcorrencia}
        />
      );

    case 'sindico':
      return usuario.tipo === 'sindico' ? (
        <TelaSindico
          reservas={reservas}
          ocorrencias={ocorrencias}
          onAtualizarReserva={onAtualizarReserva}
          onAtualizarOcorrencia={onAtualizarOcorrencia}
        />
      ) : (
        <TelaDashboard
          usuario={usuario}
          avisos={avisos}
          onNavegar={onNavegar}
        />
      );

    default:
      return (
        <TelaDashboard
          usuario={usuario}
          avisos={avisos}
          onNavegar={onNavegar}
        />
      );
  }
}

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [telaAtual, setTelaAtual] = useState('dashboard');
  const [reservas, setReservas] = useState(RESERVAS_INICIAIS);
  const [ocorrencias, setOcorrencias] = useState(OCORRENCIAS_INICIAIS);
  const [avisos] = useState(AVISOS_INICIAIS);

  const handleLogin = (user) => {
    setUsuario(user);
    setTelaAtual('dashboard');
  };

  const handleLogout = () => {
    setUsuario(null);
    setTelaAtual('dashboard');
  };

  const handleNovaReserva = (dados) => {
    setReservas((prev) => [
      {
        ...dados,
        id: `r${Date.now()}`,
      },
      ...prev,
    ]);
  };

  const handleAtualizarReserva = (id, status) => {
    setReservas((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status }
          : r
      )
    );
  };

  const handleNovaOcorrencia = (dados) => {
    setOcorrencias((prev) => [
      {
        ...dados,
        id: `o${Date.now()}`,
      },
      ...prev,
    ]);
  };

  const handleAtualizarOcorrencia = (id, status) => {
    setOcorrencias((prev) =>
      prev.map((o) =>
        o.id === id
          ? { ...o, status }
          : o
      )
    );
  };

  if (!usuario) {
    return <TelaLogin onLogin={handleLogin} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {renderTela(telaAtual, {
          usuario,
          avisos,
          reservas,
          ocorrencias,
          onNavegar: setTelaAtual,
          onNovaReserva: handleNovaReserva,
          onNovaOcorrencia: handleNovaOcorrencia,
          onAtualizarReserva: handleAtualizarReserva,
          onAtualizarOcorrencia: handleAtualizarOcorrencia,
        })}
      </View>

      <NavBar
        telaAtual={telaAtual}
        tipoUsuario={usuario.tipo}
        onNavegar={setTelaAtual}
        onLogout={handleLogout}
      />
    </View>
  );
}