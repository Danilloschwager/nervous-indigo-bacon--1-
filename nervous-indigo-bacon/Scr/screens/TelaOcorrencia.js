import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, Alert, SafeAreaView, StyleSheet,
} from 'react-native';
import StatusBadge from '../components/StatusBadge';
import CORES from '../styles/cores';
import global from '../styles/global';

const dataHoje = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
};

export default function TelaOcorrencia({ usuario, ocorrencias, onNovaOcorrencia }) {
  const [titulo,      setTitulo]      = useState('');
  const [descricao,   setDescricao]   = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);

  const minhas = ocorrencias.filter(o => o.morador === usuario.nome);

  const handleEnviar = () => {
    if (!titulo || !descricao) { Alert.alert('Atencao', 'Preencha o titulo e a descricao.'); return; }
    onNovaOcorrencia({ titulo, descricao, morador: usuario.nome, data: dataHoje(), status: 'aberta' });
    Alert.alert('Registrado', 'Ocorrencia registrada e encaminhada para o sindico.');
    setTitulo(''); setDescricao(''); setMostrarForm(false);
  };

  return (
    <SafeAreaView style={global.container}>
      <View style={global.header}>
        <Text style={styles.appNome}>SINDCAT</Text>
        <Text style={global.headerTitulo}>REGISTRO DE OCORRENCIAS</Text>
      </View>

      <ScrollView style={global.scrollContent}>
        <TouchableOpacity style={global.botaoPrimario} onPress={() => setMostrarForm(v => !v)}>
          <Text style={global.botaoPrimarioTexto}>{mostrarForm ? 'CANCELAR' : '+ NOVA OCORRENCIA'}</Text>
        </TouchableOpacity>

        {mostrarForm && (
          <View style={global.formCard}>
            <Text style={global.formTitulo}>Formulario de Ocorrencia</Text>

            <Text style={global.label}>Titulo da Ocorrencia</Text>
            <TextInput
              style={global.input}
              placeholder="Descreva brevemente o problema"
              value={titulo}
              onChangeText={setTitulo}
              placeholderTextColor={CORES.cinzaClaro}
            />

            <Text style={global.label}>Descricao Detalhada</Text>
            <TextInput
              style={[global.input, global.textarea]}
              placeholder="Informe local, horario e detalhes relevantes"
              value={descricao}
              onChangeText={setDescricao}
              multiline
              numberOfLines={4}
              placeholderTextColor={CORES.cinzaClaro}
            />

            <TouchableOpacity
              style={[global.botaoPrimario, { backgroundColor: CORES.cinzaEscuro, borderColor: CORES.cinzaBorda }]}
              onPress={() => Alert.alert('Foto', 'Em producao, aqui abriria a camera do celular.')}
            >
              <Text style={global.botaoPrimarioTexto}>ANEXAR FOTO (OPCIONAL)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={global.botaoPrimario} onPress={handleEnviar}>
              <Text style={global.botaoPrimarioTexto}>ENVIAR OCORRENCIA</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={global.secaoTitulo}>Minhas Ocorrencias</Text>
        {minhas.length === 0 ? (
          <View style={global.vazioBox}>
            <Text style={global.vazioTexto}>Nenhuma ocorrencia registrada.</Text>
          </View>
        ) : (
          minhas.map(o => (
            <View key={o.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitulo}>{o.titulo}</Text>
                <StatusBadge status={o.status} />
              </View>
              <Text style={styles.cardDesc}>{o.descricao}</Text>
              <View style={styles.cardRodape}>
                <Text style={styles.cardData}>Registrado em {o.data}</Text>
              </View>
            </View>
          ))
        )}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appNome:    { fontSize: 10, fontWeight: '700', color: CORES.dourado, letterSpacing: 3, marginBottom: 4 },
  card:       { backgroundColor: CORES.branco, borderRadius: 8, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: CORES.cinzaBorda, elevation: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 },
  cardTitulo: { fontSize: 13, fontWeight: '700', color: CORES.marinho, flex: 1, marginRight: 10, letterSpacing: 0.3 },
  cardDesc:   { fontSize: 12, color: CORES.cinzaMedio, lineHeight: 18, marginBottom: 12 },
  cardRodape: { borderTopWidth: 1, borderTopColor: CORES.cinzaFundo, paddingTop: 8 },
  cardData:   { fontSize: 11, color: CORES.cinzaClaro, letterSpacing: 0.3 },
});