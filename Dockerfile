FROM node:20-slim

WORKDIR /app

# パッケージファイルを先にコピーしてキャッシュを利用
COPY package*.json ./
RUN npm install

# 残りのソースコードをコピー
COPY . .

EXPOSE 5173

# Viteを起動。--hostがないとコンテナ外からアクセスできません
CMD ["npm", "run", "dev", "--", "--host"]