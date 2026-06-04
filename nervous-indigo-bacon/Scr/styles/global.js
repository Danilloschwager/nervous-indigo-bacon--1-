import { StyleSheet } from 'react-native';
import CORES from './cores';

const global = StyleSheet.create({
  // Layout
  container:     { flex: 1, backgroundColor: CORES.cinzaFundo },
  scrollContent: { flex: 1, padding: 16 },

  // Header corporativo
  header: {
    backgroundColor: CORES.marinho,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 3,
    borderBottomColor: CORES.dourado,
  },
  headerTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: CORES.branco,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  headerBomDia:    { fontSize: 18, fontWeight: '700', color: CORES.branco, letterSpacing: 0.5 },
  headerSubtitulo: { fontSize: 12, color: CORES.cinzaClaro, marginTop: 3, letterSpacing: 0.5 },

  // Formularios
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: CORES.cinzaMedio,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1.5,
    borderColor: CORES.cinzaBorda,
    borderRadius: 6,
    padding: 13,
    fontSize: 14,
    color: CORES.cinzaEscuro,
    marginBottom: 16,
  },
  textarea:   { height: 100, textAlignVertical: 'top' },
  formCard: {
    backgroundColor: CORES.branco,
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: CORES.cinzaBorda,
    shadowColor: CORES.marinho,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  formTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: CORES.marinho,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  // Botoes
  botaoPrimario: {
    backgroundColor: CORES.marinho,
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: CORES.dourado,
  },
  botaoPrimarioTexto: {
    color: CORES.branco,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  botaoSucesso: {
    backgroundColor: CORES.sucesso,
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  // Secoes
  secaoTitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: CORES.cinzaMedio,
    marginBottom: 12,
    marginTop: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },

  // Status
  statusBadge: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  statusTexto: { fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },

  // Vazio
  vazioBox: {
    backgroundColor: CORES.branco,
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CORES.cinzaBorda,
    borderStyle: 'dashed',
  },
  vazioTexto: { color: CORES.cinzaClaro, fontSize: 13 },

  // NavBar
  navBar: {
    flexDirection: 'row',
    backgroundColor: CORES.marinho,
    borderTopWidth: 2,
    borderTopColor: CORES.dourado,
    paddingBottom: 6,
    elevation: 12,
  },
  navItem:       { flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 4 },
  navIcon:       { fontSize: 18 },
  navLabel:      { fontSize: 9, color: CORES.cinzaClaro, marginTop: 3, letterSpacing: 0.5, textTransform: 'uppercase' },
  navLabelAtivo: { color: CORES.dourado, fontWeight: '700' },
  navIndicador:  { width: 20, height: 2, borderRadius: 1, backgroundColor: CORES.dourado, marginTop: 3 },
});

export default global;