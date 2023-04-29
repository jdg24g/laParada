let a = fetch("https://www.anr.org.py/padron/api.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "es-419,es;q=0.9,en;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.anr.org.py/padron/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"cpt\":\"-\",\"cedula\":\"3999308\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then((response)=> response.json()).then((data)=> console.log(data));
