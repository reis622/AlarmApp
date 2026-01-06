const fs = require('fs');
const express = require('express');
const port = 3000;  
const app = express();
app.use(express.json());
app.listen(port, () => {
    console.log("hello motherfucker")
});
 fs.readdir('C:/Users/PC/Desktop/RANDOM/projects/SetAlarm/public', 'utf8', (err, data) => {
     if (err) {  
         console.error("Hata oluştu:", err);
         return;
     }
     console.log("Dosya içeriği:", data);
 });
 console.log("Bu satır dosya okunurken çalışır.");


app.post('/alarm-kur', (req, res) => {
    // 1. İstekle gelen veriyi al (Örn: { url: "..." })
    const gelenUrl = req.body.url;

    console.log("İstek geldi! İşleniyor: ", gelenUrl);

    // 2. İstediğin işlemi burada yap (yt-dlp çalıştırmak gibi)
    // exec( ... )

    // 3. İstemciye (frontend) cevap dön
    res.json({ 
        durum: "Başarılı", 
        mesaj: "Alarm ayarlandı!" 
    });
});
