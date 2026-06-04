import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, Alert, SafeAreaView, StatusBar, StyleSheet,
} from 'react-native';
import { USUARIOS } from '../data';
import CORES from '../styles/cores';
import global from '../styles/global';

export default function TelaLogin({ onLogin }) {
  const [email,        setEmail]        = useState('');
  const [senha,        setSenha]        = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    if (!email || !senha) { Alert.alert('Atencao', 'Preencha e-mail e senha.'); return; }
    const usuario = USUARIOS.find(u => u.email === email.trim() && u.senha === senha);
    if (usuario) {
      onLogin(usuario);
    } else {
      Alert.alert('Acesso Negado', 'E-mail ou senha incorretos.\n\nDica:\nmorador@sindcat.com / 123456\nsindico@sindcat.com / 123456');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={CORES.marinho} barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Topo escuro com logo */}
        <View style={styles.topo}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoLetra}>S</Text>
            </View>
            <View style={styles.logoDivisor} />
            <View>
              <Text style={styles.logoNome}>SINDCAT</Text>
              <Text style={styles.logoSlogan}>Gestao Condominial</Text>
            </View>
          </View>
        </View>

        {/* Card de login */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>ACESSO AO SISTEMA</Text>
          <View style={styles.divisorDourado} />

          <Text style={global.label}>E-mail</Text>
          <TextInput
            style={global.input}
            placeholder="usuario@sindcat.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={CORES.cinzaClaro}
          />

          <Text style={global.label}>Senha</Text>
          <View style={styles.senhaRow}>
            <TextInput
              style={[global.input, { flex: 1, marginBottom: 0 }]}
              placeholder="Senha de acesso"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
              placeholderTextColor={CORES.cinzaClaro}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(v => !v)} style={styles.olhoBtn}>
              <Text style={styles.olhoTexto}>{mostrarSenha ? 'Ocultar' : 'Exibir'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
            <Text style={styles.botaoEntrarTexto}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Recuperar Acesso', 'Um link de redefinicao sera enviado para seu e-mail cadastrado.')}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Credenciais de teste */}
        <View style={styles.dica}>
          <Text style={styles.dicaTitulo}>CREDENCIAIS DE TESTE</Text>
          <View style={styles.dicaLinha}>
            <Text style={styles.dicaTipo}>Morador</Text>
            <Text style={styles.dicaValor}>morador@sindcat.com / 123456</Text>
          </View>
          <View style={styles.dicaLinha}>
            <Text style={styles.dicaTipo}>Sindico</Text>
            <Text style={styles.dicaValor}>sindico@sindcat.com / 123456</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CORES.marinho },
  scroll:    { flexGrow: 1 },

  topo: {
    backgroundColor: CORES.marinho,
    paddingTop: 48,
    paddingBottom: 40,
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoBox: {
    width: 52, height: 52, borderRadius: 10,
    backgroundColor: CORES.dourado,
    justifyContent: 'center', alignItems: 'center',
  },
  logoLetra:    { fontSize: 28, fontWeight: '900', color: CORES.marinho },
  logoDivisor:  { width: 1, height: 40, backgroundColor: CORES.dourado, marginHorizontal: 16, opacity: 0.5 },
  logoNome:     { fontSize: 24, fontWeight: '900', color: CORES.branco, letterSpacing: 4 },
  logoSlogan:   { fontSize: 10, color: CORES.cinzaClaro, letterSpacing: 2, marginTop: 2 },

  card: {
    backgroundColor: CORES.branco,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  cardTitulo:     { fontSize: 12, fontWeight: '700', color: CORES.marinho, letterSpacing: 2, textAlign: 'center' },
  divisorDourado: { height: 2, backgroundColor: CORES.dourado, width: 40, alignSelf: 'center', marginVertical: 16 },

  senhaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  olhoBtn:  { paddingHorizontal: 12, paddingVertical: 8, marginLeft: 6 },
  olhoTexto:{ fontSize: 11, color: CORES.azulClaro, fontWeight: '600', letterSpacing: 0.5 },

  botaoEntrar: {
    backgroundColor: CORES.marinho,
    borderRadius: 6,
    padding: 15,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CORES.dourado,
  },
  botaoEntrarTexto: { color: CORES.branco, fontWeight: '700', fontSize: 13, letterSpacing: 2 },
  link: { textAlign: 'center', color: CORES.azulClaro, fontSize: 12, letterSpacing: 0.3 },

  dica: {
    margin: 20,
    marginTop: 16,
    backgroundColor: CORES.marinhoMedio,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: CORES.marinhoClaro,
  },
  dicaTitulo: { fontSize: 10, fontWeight: '700', color: CORES.dourado, letterSpacing: 1.5, marginBottom: 10 },
  dicaLinha:  { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  dicaTipo:   { fontSize: 11, color: CORES.cinzaClaro, fontWeight: '600' },
  dicaValor:  { fontSize: 11, color: CORES.branco },
});