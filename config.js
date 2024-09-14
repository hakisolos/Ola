//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic04zOXkxV0l6d3lIZmN1UHJVQzFFdW5zZy9nbmdKOHdQQ0Y2dFdDYTZYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDdwbnFyMW0weUo1MENZQUlEd0FabG03ZWJKdkU2a1NuYllCaDgvWWoyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQmc1UjdDQ3ByclRpM1NBdGUyanQ3cDd2SUo2ZnUwdXNkUVpacUFwUVhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUnJHQjN0UXcyczNOaG9Nd1dhajRnRkRHaVVEamplTUxjQnpVVUFFbGdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGMW0rRXY1SDYzc1pyQjBKanZSVVJZMnhGTDc0aGF4WE1XMkhLVkJ0SE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVZRVptdzhDay9EeXUwSGlCUzRjbDl3d3M0NnhoVTNXTExmb3ByVEx2amM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRHSUpRNnEra2lwdUJVV21sNi83MEpsU2pvckgyQWZMWGZDS3BROFpYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWxHTlVTV2haQ1VJNGkrWUd6SUN4VlZWVHNYRHRxbjZCdG90dHZCV1NUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllVWUlGQ1htR1ZkcmpSMWhCanpVeXlPeVBFckVES0xkU2RyTEhhVzhmU25yOTVLT1VWcW9Gckl4WkEvb2FyODcwTWFLMUNFdkV4ZnN6SDRHMndodGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJENVMxQWVuRVlPZlB4Sk15RVJkRkIrL2pQRlpsbnY1aDNJYW83THFCOG40PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjk5OTkwOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEQyOUNGMTg5QjlGRTBEODRGQkQ5RjE1MUUzQkYxNzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjMxMzQyM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2OTk5OTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRUI0OEM1OTkyMEUwMzQ1Njc5RUQxQ0RFQkIzN0RDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MzEzNDI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJSWZPcWExRFRkR2hwOE01SndFSG5BIiwicGhvbmVJZCI6ImZlOGRlOTY1LTM0YmItNGUwYi1iMjBiLTVlODQ2YTZiZjFhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIybklXY2ZRUXdVZ0txTXRSVlRpNUFlSzF3ejg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTno4SmxLU1ZWU3FuSUU0aTlENHhaTE1xNFNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRFTFpZM1o5IiwibWUiOnsiaWQiOiIyMzQ4MDY5OTk5MDk0OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSSBEb24ndCBLbm93IFlvdSDwn5iVIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNkM0NWNHRU1IbmxiY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIYnhEOGswN3Z4MXg4b3VJbW95d1N2OUtKMzN5TG1rUUZXRUVJWVRsVFJNPSIsImFjY291bnRTaWduYXR1cmUiOiJCQURSUFVWOUt5TThweExteEExdXI0NDZXS1FNdGdqMWxMZno5bXltNnpJNjFaZURWU0RnOEQ0UXY3dVVPTTg5bSs1WUJ6czMrd3B3V2F5QUpQbTVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicCtZZFJCU09vUnViQUVXaEZnZVVMcXc2a1JyS3F2aFdla0VuV2FhdHBzV0tLeXFIZjRnVkdLK0FqQ3daci90QWhQaFpSMXdsK3Q3T2dib1RNdmhjamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5OTk5MDk0OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjI4US9KTk83OGRjZktMaUpxTXNFci9TaWQ5OGk1cEVCVmhCQ0dFNVUwVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjMxMzQyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYWIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
