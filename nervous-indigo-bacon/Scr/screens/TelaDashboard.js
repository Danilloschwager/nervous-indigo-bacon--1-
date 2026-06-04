import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Alert, SafeAreaView, StyleSheet,
} from 'react-native';
import AvisoCard from '../components/AvisoCard';
import CORES from '../styles/cores';
import global from '../styles/global';

const ATALHOS_MORADOR = [
  { label: 'Reservar Espaco',      sub: 'Areas comuns',     tela: 'reservas'   },
  { label: 'Registrar Problema',   sub: 'Ocorrencias',      tela: 'ocorrencia' },
  { label: 'Minhas Reservas',      sub: 'Historico',        tela: 'reservas'   },
  { label: 'Contato Portaria',     sub: 'Ramal 9000',       tela: null         },
];

const ATALHOS_SINDICO = [
  { label: 'Reservar Espaco',      sub: 'Areas comuns',     tela: 'reservas'   },
  { label: 'Registrar Problema',   sub: 'Ocorrencias',      tela: 'ocorrencia' },
  { label: 'Painel Sindico',       sub: 'Gestao geral',     tela: 'sindico'    },
  { label: 'Contato Portaria',     sub: 'Ramal 9000',       tela: null         },
];

export default function TelaDashboard({ usuario, onNavegar, avisos }) {
  const atalhos = usuario.tipo === 'sindico' ? ATALHOS_SINDICO : ATALHOS_MORADOR;

  const handleAtalho = (tela) =>
    tela ? onNavegar(tela) : Alert.alert('Portaria', 'Ramal: 9000\nCelular: (81) 99999-0000');

  return (
    <SafeAreaView style={global.container}>
      {/* Header */}
      <View style={global.header}>
        <Text style={styles.appNome}>SINDCAT</Text>
        <Text style={global.headerBomDia}>Ola, {usuario.nome.split(' ')[0]}</Text>
        <Text style={global.headerSubtitulo}>
          {usuario.tipo === 'sindico' ? 'Administrador' : 'Morador'} — Edificio Solar
        </Text>
      </View>

      <ScrollView style={global.scrollContent}>
        {/* Banner de boas vindas */}
        <View style={styles.banner}>
          <Text style={styles.bannerTexto}>Bem-vindo ao sistema de gestao condominial</Text>
          <View style={styles.bannerFaixa} />
        </View>

        <Text style={global.secaoTitulo}>Acesso Rapido</Text>
        <View style={styles.grid}>
          {atalhos.map((a, i) => (
            <TouchableOpacity key={i} style={styles.card} onPress={() => handleAtalho(a.tela)}>
              <View style={styles.cardNumero}>
                <Text style={styles.cardNumeroTexto}>{String(i + 1).padStart(2, '0')}</Text>
              </View>
              <Text style={styles.cardLabel}>{a.label}</Text>
              <Text style={styles.cardSub}>{a.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={global.secaoTitulo}>Comunicados Oficiais</Text>
        {avisos.map(aviso => <AvisoCard key={aviso.id} aviso={aviso} />)}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appNome: { fontSize: 10, fontWeight: '700', color: CORES.dourado, letterSpacing: 3, marginBottom: 6 },

  banner: {
    backgroundColor: CORES.marinho,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: CORES.marinhoClaro,
  },
  bannerTexto: { fontSize: 12, color: CORES.cinzaClaro, letterSpacing: 0.3 },
  bannerFaixa: { height: 2, backgroundColor: CORES.dourado, width: 30, marginTop: 10 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 24 },
  card: {
    backgroundColor: CORES.branco,
    borderRadius: 8,
    padding: 16,
    width: '47.5%',
    borderWidth: 1,
    borderColor: CORES.cinzaBorda,
    shadowColor: CORES.marinho,
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  cardNumero:      { marginBottom: 10 },
  cardNumeroTexto: { fontSize: 20, fontWeight: '900', color: CORES.dourado, opacity: 0.6 },
  cardLabel:       { fontSize: 12, fontWeight: '700', color: CORES.marinho, letterSpacing: 0.3 },
  cardSub:         { fontSize: 11, color: CORES.cinzaClaro, marginTop: 3 },
});