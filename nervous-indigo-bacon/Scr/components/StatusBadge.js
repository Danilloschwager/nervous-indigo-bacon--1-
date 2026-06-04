import React from 'react';
import { View, Text } from 'react-native';
import CORES from '../styles/cores';
import global from '../styles/global';

const CONFIG = {
  aprovada:       { bg: CORES.sucessoClaro, borda: CORES.sucesso,  texto: CORES.sucesso, label: 'APROVADA'      },
  recusada:       { bg: CORES.perigoClaro,  borda: CORES.perigo,   texto: CORES.perigo,  label: 'RECUSADA'      },
  pendente:       { bg: CORES.avisoClaro,   borda: CORES.aviso,    texto: CORES.aviso,   label: 'PENDENTE'      },
  aberta:         { bg: CORES.perigoClaro,  borda: CORES.perigo,   texto: CORES.perigo,  label: 'ABERTA'        },
  'em andamento': { bg: CORES.avisoClaro,   borda: CORES.aviso,    texto: CORES.aviso,   label: 'EM ANDAMENTO'  },
  resolvida:      { bg: CORES.sucessoClaro, borda: CORES.sucesso,  texto: CORES.sucesso, label: 'RESOLVIDA'     },
};

export default function StatusBadge({ status }) {
  const c = CONFIG[status] ?? CONFIG.pendente;
  return (
    <View style={[global.statusBadge, { backgroundColor: c.bg, borderColor: c.borda }]}>
      <Text style={[global.statusTexto, { color: c.texto }]}>{c.label}</Text>
    </View>
  );
}