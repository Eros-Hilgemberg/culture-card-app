# Culture Card App

**Resumo rápido**  
Aplicativo móvel desenvolvido em **React Native** com **TypeScript**, que tem como objetivo ser utilizado como uma carteira digital.

---

## 📑 Índice

1. [Funcionalidades](#-funcionalidades)  
2. [Tecnologias e Estrutura do Projeto](#-tecnologias-e-estrutura-do-projeto)
3. [Instalação e Uso](#-instalação-e-uso)
4. [Build](#-build)


## 🆕 Funcionalidades  

- Visualização de carteiras.
- Visualização de grupos
- Navegação entre diferentes grupos e pessoas 
- Autenticação/login de usuários  

---

## 🛠 Tecnologias e Estrutura do Projet

- **React Native** com **TypeScript**  
- **Context API** para gerenciamento de estado  
- **React Navigation** para navegação  
- **Assets estáticos** para imagens/ícones  
- **Services** para integração com APIs  

### 📂 Estrutura do Projeto

```bash
culture-card-app/
├── src/
│   ├── @types/          # Definições de tipos TypeScript
│   ├── assets/          # Imagens, ícones e outros recursos estáticos
│   ├── context/         # Context API (gerenciamento de estado global)
│   ├── global/          # Estilos globais, temas e constantes
│   ├── routes/          # Configuração de rotas e navegação
│   ├── screens/         # Telas principais do app
│   │   ├── cardGroup/   # Tela de grupos de cards
│   │   ├── cardPerson/  # Tela de cards individuais
│   │   ├── group/       # Tela de grupos
│   │   ├── home/        # Tela inicial / dashboard
│   │   └── login/       # Tela de autenticação/login
│   └── services/        # Serviços externos, APIs e utilitários
```

## ⚙️ Instalação e Uso

### ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/) ou [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Emulador Android ou iOS configurado **ou** dispositivo físico com depuração ativada

---

### 📦 Clone o repositório

```bash
git clone https://github.com/Eros-Hilgemberg/culture-card-app.git
cd culture-card-app
```

### Instale as dependências:

```bash
 npm install
# ou
yarn install
````

### Execute o app:

```
npx expo start

```

## ⚙️Build
