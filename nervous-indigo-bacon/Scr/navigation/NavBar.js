import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import global from '../styles/global';
import CORES from '../styles/cores';

const TABS_MORADOR = [
  { id: 'dashboard',  label: 'Inicio'    },
  { id: 'reservas',   label: 'Reservas'  },
  { id: 'ocorrencia', label: 'Problemas' },
];

const TABS_SINDICO = [
  { id: 'dashboard',  label: 'Inicio'    },
  { id: 'reservas',   label: 'Reservas'  },
  { id: 'ocorrencia', label: 'Problemas' },
  { id: 'sindico',    label: 'Painel'    },
];

export default function NavBar({ telaAtual, tipoUsuario, onNavegar, onLogout }) {
  const tabs = tipoUsuario === 'sindico' ? TABS_SINDICO : TABS_MORADOR;

  return (
    <View style={global.navBar}>
      {tabs.map(tab => (
        <TouchableOpacity key={tab.id} style={global.navItem} onPress={() => onNavegar(tab.id)}>
          <Text style={[global.navLabel, telaAtual === tab.id && global.navLabelAtivo]}>
            {tab.label}
          </Text>
          {telaAtual === tab.id && <View style={global.navIndicador} />}
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={global.navItem} onPress={onLogout}>
        <Text style={[global.navLabel, { color: CORES.perigo }]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}