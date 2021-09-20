 /* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Wa.me/+94766598862
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'xpanel', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    const rows = [
        {title: '◁●●🔞වීඩියෝ ලැයිස්තුව●●▷', description: "\n\n", rowId:"rowid1"},
        {title: '◁●●🔞චිත්‍ර කතා Pdf ලැයිස්තුව●●▷', description: "\n\n", rowId:"rowid2"},
        {title: '◁●●🔞18+ කතා PDF ලැයිස්තුව●●▷', description: "\n\n ", rowId:"rowid1"},
        {title: '◁●●🔞18+ GIF ස්ටිකර් සෑදීමට Mp4 ෆයිල් ලැයිතුව●●▷', description: "\n\n ", rowId:"rowid1"},
        {title: '◁●●🔞18+ කතා MP3 ලැයිස්තුව●●▷', description: "\n\n ", rowId:"rowid1"}
        {title: '◁●●👩‍🦰භාවිතයට උපදෙස්●●▷', description: "\n\n ", rowId:"rowid1"}
       ]
       
       const sections = [{title: "Section 1", rows: rows}]
       
       const button = {
        buttonText: 'See 18+ Panel!',
        description: "*👩‍🦰Amazone Alexa 🔞+ ලැයිස්තුව*",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
