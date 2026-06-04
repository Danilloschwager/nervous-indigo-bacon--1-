import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CORES from '../styles/cores';

export default function AvisoCard({ aviso }) {
  return (
    <View style={styles.card}>
      <View style={styles.faixaLateral} />
      <View style={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{aviso.titulo}</Text>
          <View style={styles.dataBadge}>
            <Text style={styles.data}>{aviso.data}</Text>
          </View>
        </View>
        <Text style={styles.texto}>{aviso.texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: CORES.branco,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: CORES.cinzaBorda,
    overflow: 'hidden',
    shadowColor: CORES.marinho,
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  faixaLateral: { width: 4, backgroundColor: CORES.dourado },
  conteudo:     { flex: 1, padding: 14 },
  header:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 },
  titulo:       { fontSize: 13, fontWeight: '700', color: CORES.marinho, flex: 1, letterSpacing: 0.3 },
  dataBadge:    { backgroundColor: CORES.cinzaFundo, borderRadius: 4, paddingHorizontal: 8, paddingVertical: 3, marginLeft: 8 },
  data:         { fontSize: 10, color: CORES.cinzaMedio, fontWeight: '600', letterSpacing: 0.5 },
  texto:        { fontSize: 12, color: CORES.cinzaMedio, lineHeight: 18 },
});