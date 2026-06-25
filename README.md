!()[https://github.com/ThalesFrederico98/SweetHome/favicon.png]

Uma aplicação web moderna para explorar e filtrar imóveis, inspirada em plataformas como Airbnb. O projeto utiliza React com Vite para oferecer uma experiência rápida e responsiva.

## 📋 Sobre o Projeto

SweetHome é uma plataforma de busca de imóveis que permite aos usuários:
- Navegar por diferentes categorias de propriedades
- Filtrar imóveis por categoria e faixa de preço
- Visualizar detalhes dos imóveis em cards interativos
- Registrar-se para acessar funcionalidades adicionais
- Interface amigável com suporte a Material Design Icons

## 🛠️ Tecnologias Utilizadas

- **React 19.2** - Biblioteca JavaScript para interfaces de usuário
- **Vite 8** - Build tool e dev server ultra-rápido
- **React Router DOM 6** - Roteamento de páginas
- **Bootstrap 5** - Framework CSS responsivo
- **Material Design Icons** - Ícones profissionais
- **Swiper 12** - Carrossel/slider de imagens
- **SweetAlert2** - Notificações elegantes
- **React DayPicker 10** - Seletor de datas

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd SweetHome
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra seu navegador e acesse `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar/              # Barra de navegação
│   ├── Footer/              # Rodapé
│   ├── Categorias/          # Filtro de categorias
│   ├── Modal/               # Modal de filtros
│   │   ├── ButtonGroup/     # Grupo de botões
│   │   ├── CardGroup/       # Grupo de cards
│   │   ├── HouseCards/      # Cards de imóveis
│   │   └── PriceSlider/     # Slider de preço
│   ├── Registro/            # Página de registro
│   └── Placeholder.jsx      # Componente de carregamento
├── App.jsx                  # Componente principal
├── main.jsx                 # Ponto de entrada
└── App.css                  # Estilos globais
backend/
└── dados.js                 # Dados ou configurações do backend
```

## 🎯 Funcionalidades Principais

### 🏘️ Browsing de Imóveis
- Visualização de imóveis em cards responsivos
- Informações detalhadas de preço, localização e categoria

### 🔍 Filtros Avançados
- **Filtro por Categoria** - Escolha entre diferentes tipos de propriedades
- **Filtro por Preço** - Selecione uma faixa de preço com slider interativo

### 📱 Interface Responsiva
- Design mobile-first
- Layout adaptável para todos os tamanhos de tela
- Navegação intuitiva com Material Design Icons

### 👤 Sistema de Registro
- Página dedicada para criação de conta

## 📝 Componentes Principais

### App.jsx
Componente raiz que gerencia:
- Estados globais (loading, categoria, imóveis filtrados)
- Comunicação com a API
- Lógica de filtros
- Roteamento da aplicação

### Categorias.jsx
- Exibe categorias disponíveis
- Permite seleção de categoria
- Atualiza filtros quando a categoria muda

### ModalFilter.jsx
- Modal com opções de filtro
- Controle de slider de preço
- Botão de reset de filtros

### Cards.jsx
- Exibe cards de imóveis
- Utiliza Swiper para galeria de imagens

**Desenvolvido usando React + Vite**
