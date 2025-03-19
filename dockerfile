# Usa uma imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos essenciais primeiro (para otimizar o cache)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia o restante dos arquivos do projeto
COPY . .

# Gera o build da aplicação
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
