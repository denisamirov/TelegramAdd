const { TelegramClient, Api } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");
const { NewMessage } = require('telegram/events');
require('dotenv').config();

const {ApiId, ApiHash, Session, Channel} = process.env

const apiId = +(ApiId);
const apiHash = ApiHash;
const stringSession = new StringSession(Session); 

(async () => {
    console.log("Loading ...");
    const client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });

    console.log("You should now be connected.");

    await client.connect();

    client.addEventHandler(async (event) => {
        console.log(event.message.fromId.userId, event.message.message);
    }, new NewMessage({ incoming: true, channels: [Channel] }));
  

    // const result = await client.invoke(
    //   new Api.channels.GetMessages({
    //     channel: '-1001318121240',
    //     id: Array.from(Array(100000).keys()).map(i => i + 1)
    //   })
    // );
  
    // const mes = result.messages.map(m => {
    //     m.className != 'MessageEmpty' ? console.log(m) : m
    // });

  })();

