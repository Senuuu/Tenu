FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Senuuu/Tenu /root/Tenu
WORKDIR /root/Tenu/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
