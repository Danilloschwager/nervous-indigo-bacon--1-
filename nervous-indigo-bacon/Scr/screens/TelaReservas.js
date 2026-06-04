import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, Alert, SafeAreaView, StyleSheet,
} from 'react-native';
import StatusBadge from '../components/StatusBadge';
import { ESPACOS } from '../data';
import CORES from '../styles/cores';
import global from '../styles/global';

export default function TelaReservas({ usuario, reservas, onNovaReserva }) {
  const [espaco,      setEspaco]      = useState('');
  const [data,        setData]        = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);

  const minhasReservas = reservas.filter(r => r.morador === usuario.nome);

  const handleReservar = () => {
    if (!espaco || !data) { Alert.alert('Atencao', 'Selecione o espaco e informe a data.'); return; }
    const conflito = reservas.find(r => r.espaco === espaco && r.data === data && r.status !== 'recusada');
    if (conflito) { Alert.alert('Conflito de Agenda', `${espaco} ja esta reservado para ${data}.`); return; }
    onNovaReserva({ espaco, data, morador: usuario.nome, status: 'pendente' });
    Alert.alert('Solicitacao Enviada', 'Sua reserva foi encaminhada para aprovacao do sindico.');
    setEspaco(''); setData(''); setMostrarForm(false);
  };

  return (
    <SafeAreaView style={global.container}>
      <View style={global.header}>
        <Text style={styles.appNome}>SINDCAT</Text>
        <Text style={global.headerTitulo}>RESERVA DE ESPACOS</Text>
      </View>

      <ScrollView style={global.scrollContent}>
        <TouchableOpacity style={global.botaoPrimario} onPress={() => setMostrarForm(v => !v)}>
          <Text style={global.botaoPrimarioTexto}>{mostrarForm ? 'CANCELAR' : '+ NOVA SOLICITACAO'}</Text>
        </TouchableOpacity>

        {mostrarForm && (
          <View style={global.formCard}>
            <Text style={global.formTitulo}>Formulario de Reserva</Text>

            <Text style={global.label}>Selecione o Espaco</Text>
            <View style={styles.chipGrid}>
              {ESPACOS.map(e => (
                <TouchableOpacity
                  key={e}
                  style={[styles.chip, espaco === e && styles.chipAtivo]}
                  onPress={() => setEspaco(e)}
                >
                  <Text style={[styles.chipTexto, espaco === e && styles.chipTextoAtivo]}>{e}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={global.label}>Data Desejada (DD/MM/AAAA)</Text>
            <TextInput
              style={global.input}
              placeholder="Ex: 20/06/2026"
              value={data}
              onChangeText={setData}
              keyboardType="numeric"
              placeholderTextColor={CORES.cinzaClaro}
            />

            <TouchableOpacity style={global.botaoSucesso} onPress={handleReservar}>
              <Text style={global.botaoPrimarioTexto}>CONFIRMAR SOLICITACAO</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={global.secaoTitulo}>Minhas Solicitacoes</Text>
        {minhasReservas.length === 0 ? (
          <View style={global.vazioBox}>
            <Text style={global.vazioTexto}>Nenhuma reserva registrada.</Text>
          </View>
        ) : (
          minhasReservas.map(r => (
            <View key={r.id} style={styles.card}>
              <View style={styles.cardFaixa} />
              <View style={styles.cardBody}>
                <Text style={styles.cardEspaco}>{r.espaco}</Text>
                <Text style={styles.cardData}>{r.data}</Text>
              </View>
              <StatusBadge status={r.status} />
            </View>
          ))
        )}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appNome:  { fontSize: 10, fontWeight: '700', color: CORES.dourado, letterSpacing: 3, marginBottom: 4 },
  chipGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  chip: {
    borderWidth: 1.5, borderColor: CORES.cinzaBorda,
    borderRadius: 4, paddingVertical: 8, paddingHorizontal: 14,
    backgroundColor: CORES.cinzaFundo,
  },
  chipAtivo:      { backgroundColor: CORES.marinho, borderColor: CORES.dourado },
  chipTexto:      { fontSize: 12, color: CORES.cinzaEscuro, fontWeight: '500' },
  chipTextoAtivo: { color: CORES.branco, fontWeight: '700' },
  card: {
    backgroundColor: CORES.branco, borderRadius: 8, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: CORES.cinzaBorda, overflow: 'hidden',
    elevation: 1,
  },
  cardFaixa:  { width: 4, alignSelf: 'stretch', backgroundColor: CORES.azul },
  cardBody:   { flex: 1, padding: 14 },
  cardEspaco: { fontSize: 13, fontWeight: '700', color: CORES.marinho },
  cardData:   { fontSize: 12, color: CORES.cinzaMedio, marginTop: 2 },
});