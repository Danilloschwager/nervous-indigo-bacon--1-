import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  ScrollView, Alert, SafeAreaView, StyleSheet,
} from 'react-native';
import CORES from '../styles/cores';
import global from '../styles/global';

const ABAS = [
  { id: 'reservas',    label: 'RESERVAS'    },
  { id: 'ocorrencias', label: 'OCORRENCIAS' },
];

export default function TelaSindico({ reservas, ocorrencias, onAtualizarReserva, onAtualizarOcorrencia }) {
  const [aba, setAba] = useState('reservas');

  const pendentes = reservas.filter(r => r.status === 'pendente').length;
  const abertas   = ocorrencias.filter(o => o.status === 'aberta').length;

  return (
    <SafeAreaView style={global.container}>
      <View style={global.header}>
        <Text style={styles.appNome}>SINDCAT</Text>
        <Text style={global.headerTitulo}>PAINEL ADMINISTRATIVO</Text>
      </View>

      {/* Resumo executivo */}
      <View style={styles.resumoRow}>
        <View style={styles.resumoCard}>
          <Text style={styles.resumoNum}>{pendentes}</Text>
          <View style={styles.resumoDivisor} />
          <Text style={styles.resumoLabel}>Reservas{'\n'}Pendentes</Text>
        </View>
        <View style={[styles.resumoCard, styles.resumoCardPerigo]}>
          <Text style={[styles.resumoNum, { color: CORES.perigo }]}>{abertas}</Text>
          <View style={[styles.resumoDivisor, { backgroundColor: CORES.perigo }]} />
          <Text style={[styles.resumoLabel, { color: CORES.perigo }]}>Ocorrencias{'\n'}Abertas</Text>
        </View>
      </View>

      {/* Abas */}
      <View style={styles.abaContainer}>
        {ABAS.map(a => (
          <TouchableOpacity
            key={a.id}
            style={[styles.aba, aba === a.id && styles.abaAtiva]}
            onPress={() => setAba(a.id)}
          >
            <Text style={[styles.abaTexto, aba === a.id && styles.abaTextoAtivo]}>
              {a.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={global.scrollContent}>
        {aba === 'reservas' && (
          <>
            <Text style={global.secaoTitulo}>Solicitacoes de Reserva</Text>
            {reservas.length === 0
              ? <View style={global.vazioBox}><Text style={global.vazioTexto}>Nenhuma reserva.</Text></View>
              : reservas.map(r => (
                <View key={r.id} style={styles.card}>
                  <View style={styles.cardHeader}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardTitulo}>{r.espaco}</Text>
                      <Text style={styles.cardInfo}>{r.morador}  |  {r.data}</Text>
                    </View>
                    <View style={[styles.statusDot, {
                      backgroundColor: r.status === 'aprovada' ? CORES.sucesso : r.status === 'recusada' ? CORES.perigo : CORES.aviso
                    }]} />
                  </View>
                  {r.status === 'pendente' ? (
                    <View style={styles.acaoRow}>
                      <TouchableOpacity
                        style={[styles.btn, { backgroundColor: CORES.sucesso }]}
                        onPress={() => { onAtualizarReserva(r.id, 'aprovada'); Alert.alert('Aprovado', 'Reserva aprovada com sucesso.'); }}
                      >
                        <Text style={styles.btnTexto}>APROVAR</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.btn, { backgroundColor: CORES.perigo }]}
                        onPress={() => { onAtualizarReserva(r.id, 'recusada'); Alert.alert('Recusado', 'Reserva recusada.'); }}
                      >
                        <Text style={styles.btnTexto}>RECUSAR</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text style={[styles.statusTexto, { color: r.status === 'aprovada' ? CORES.sucesso : CORES.perigo }]}>
                      {r.status === 'aprovada' ? 'Aprovada' : 'Recusada'}
                    </Text>
                  )}
                </View>
              ))
            }
          </>
        )}

        {aba === 'ocorrencias' && (
          <>
            <Text style={global.secaoTitulo}>Ocorrencias Registradas</Text>
            {ocorrencias.length === 0
              ? <View style={global.vazioBox}><Text style={global.vazioTexto}>Nenhuma ocorrencia.</Text></View>
              : ocorrencias.map(o => (
                <View key={o.id} style={styles.card}>
                  <View style={styles.cardHeader}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardTitulo}>{o.titulo}</Text>
                      <Text style={styles.cardInfo}>{o.morador}  |  {o.data}</Text>
                    </View>
                    <View style={[styles.statusDot, {
                      backgroundColor: o.status === 'resolvida' ? CORES.sucesso : o.status === 'em andamento' ? CORES.aviso : CORES.perigo
                    }]} />
                  </View>
                  <Text style={styles.cardDesc}>{o.descricao}</Text>
                  {o.status === 'aberta' ? (
                    <View style={styles.acaoRow}>
                      <TouchableOpacity
                        style={[styles.btn, { backgroundColor: CORES.aviso }]}
                        onPress={() => { onAtualizarOcorrencia(o.id, 'em andamento'); Alert.alert('Atualizado', 'Status alterado para Em Andamento.'); }}
                      >
                        <Text style={styles.btnTexto}>EM ANDAMENTO</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.btn, { backgroundColor: CORES.sucesso }]}
                        onPress={() => { onAtualizarOcorrencia(o.id, 'resolvida'); Alert.alert('Resolvido', 'Ocorrencia marcada como resolvida.'); }}
                      >
                        <Text style={styles.btnTexto}>RESOLVIDA</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text style={[styles.statusTexto, { color: o.status === 'resolvida' ? CORES.sucesso : CORES.aviso }]}>
                      {o.status === 'resolvida' ? 'Resolvida' : 'Em andamento'}
                    </Text>
                  )}
                </View>
              ))
            }
          </>
        )}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appNome: { fontSize: 10, fontWeight: '700', color: CORES.dourado, letterSpacing: 3, marginBottom: 4 },

  resumoRow:        { flexDirection: 'row', backgroundColor: CORES.marinho, paddingHorizontal: 16, paddingBottom: 16, gap: 12 },
  resumoCard:       { flex: 1, backgroundColor: CORES.marinhoClaro, borderRadius: 8, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: CORES.dourado },
  resumoCardPerigo: { borderColor: CORES.perigo },
  resumoNum:        { fontSize: 36, fontWeight: '900', color: CORES.dourado },
  resumoDivisor:    { width: 24, height: 2, backgroundColor: CORES.dourado, marginVertical: 6 },
  resumoLabel:      { fontSize: 11, color: CORES.cinzaClaro, textAlign: 'center', letterSpacing: 0.5, lineHeight: 16 },

  abaContainer: { flexDirection: 'row', backgroundColor: CORES.marinhoMedio, borderBottomWidth: 2, borderBottomColor: CORES.marinho },
  aba:          { flex: 1, paddingVertical: 14, alignItems: 'center' },
  abaAtiva:     { borderBottomWidth: 2, borderBottomColor: CORES.dourado },
  abaTexto:     { fontSize: 11, color: CORES.cinzaClaro, fontWeight: '700', letterSpacing: 1 },
  abaTextoAtivo:{ color: CORES.dourado },

  card: { backgroundColor: CORES.branco, borderRadius: 8, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: CORES.cinzaBorda, elevation: 1 },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  cardTitulo: { fontSize: 13, fontWeight: '700', color: CORES.marinho, letterSpacing: 0.3 },
  cardInfo:   { fontSize: 11, color: CORES.cinzaClaro, marginTop: 3, letterSpacing: 0.3 },
  cardDesc:   { fontSize: 12, color: CORES.cinzaMedio, lineHeight: 18, marginBottom: 10 },
  statusDot:  { width: 10, height: 10, borderRadius: 5, marginTop: 4, marginLeft: 8 },
  statusTexto:{ fontWeight: '700', fontSize: 12, marginTop: 8, letterSpacing: 0.5 },

  acaoRow:  { flexDirection: 'row', gap: 8, marginTop: 10 },
  btn:      { flex: 1, borderRadius: 4, paddingVertical: 10, alignItems: 'center' },
  btnTexto: { color: CORES.branco, fontWeight: '700', fontSize: 11, letterSpacing: 1 },
});