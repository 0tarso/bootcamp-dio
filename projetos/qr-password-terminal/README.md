# QR Password Terminal 🚀

Bem-vindo ao **QR Password Terminal**! Este projeto incrível permite gerar QR Codes e Senhas diretamente no seu terminal.

## 🚀 Funcionalidades

- 🎯 Gere QR Codes instantaneamente no terminal
- 🔒 Gere senhas seguras diretamente no terminal
- ⚡ Simples de usar e super rápido


## 📁 Estrutura de Pastas

```plaintext
src/
├── index.js                # Ponto de entrada da aplicação
├── prompts-schema/         # Esquemas de perguntas para interação no terminal
│   ├── schema-main.js
│   ├── schema-password.js
│   └── schema-qrCode.js
├── services/               # Lógica de negócio separada por funcionalidade
    │
    ├── main/               # Fluxo principal da aplicação
    │  ├── create.js
    │  └── handle.js
    │
    ├── password/           # Geração e manipulação de senhas
    │   ├── create.js
    │   ├── handle.js
    │   └── utils/
    │       └── default-characters.js #Define as configurações padrão via .env
    │
    └── qr-code/            # Geração e manipulação de QR Codes
      ├── create.js
      └── handle.js
```



## 📝 Considerações do Projeto

O projeto, a primeira vista, pode parecer simples, mas possui algumas considerações importantes:

- **Padronização e Organização de Pastas**: O código foi estruturado de forma a facilitar a leitura e manutenção, seguindo boas práticas de desenvolvimento.

- **Separação de responsabilidades**: Deixamos cada módulo com uma função clara e objetiva. Tornando seu entendimento muito mais fácil.

- **Usando Variáveis de ambiente**: Algumas configurações do projeto foram externalizadas para variáveis de ambiente, aumentando a flexibilidade e segurança.

## 🙏 Agradecimento
Ao Professor [Felipe Aguiar](https://github.com/felipeAguiarCode), por compartilhar seu conhecimento e tornar este projeto tão simples em uma grande chance de passar conceitos tão fundamentais para o desenvolvimento de software. Abraços!