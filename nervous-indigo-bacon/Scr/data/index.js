export const USUARIOS = [
  { email: 'morador@sindcat.com', senha: '123456', tipo: 'morador', nome: 'Joao Silva' },
  { email: 'sindico@sindcat.com', senha: '123456', tipo: 'sindico', nome: 'Maria Sindica' },
];

export const ESPACOS = [
  'Churrasqueira A',
  'Churrasqueira B',
  'Salao de Festas',
  'Quadra Esportiva',
  'Espaco Gourmet',
];

export const AVISOS_INICIAIS = [
  { id: '1', titulo: 'Manutencao da piscina', texto: 'Piscina fechada na quinta-feira para manutencao preventiva.', data: '02/06/2026' },
  { id: '2', titulo: 'Reuniao de condominos',  texto: 'Reuniao mensal no salao as 19h do dia 10/06.', data: '01/06/2026' },
  { id: '3', titulo: 'Recolhimento de lixo',  texto: 'Novo horario: segunda, quarta e sexta as 7h.', data: '30/05/2026' },
];

export const RESERVAS_INICIAIS = [
  { id: 'r1', espaco: 'Salao de Festas', data: '15/06/2026', morador: 'Joao Silva',  status: 'pendente' },
  { id: 'r2', espaco: 'Churrasqueira A', data: '08/06/2026', morador: 'Ana Costa',   status: 'aprovada' },
];

export const OCORRENCIAS_INICIAIS = [
  { id: 'o1', titulo: 'Infiltracao no corredor', descricao: 'Agua escorrendo pela parede do corredor do 3 andar.', morador: 'Joao Silva', data: '01/06/2026', status: 'aberta' },
];