const { exec } = require('child_process');
const input = require('prompt-sync')();
const ViorVo = process.argv[2];
const nameinput = process.argv[3];
// const videoUrl = 'https://www.youtube.com/watch?v=7hPMmzKs62w';
let outputname;
const ffmpegPath = 'C:\\Program Files\\File Converter\\ffmpeg.exe'; // ffmpeg'in doğru yolu   
const randomNumber = Math.floor(Math.random() * 1000);
if (nameinput === "-o"){   outputname = process.argv[4];
 }
if (ViorVo === "--vi"){ videoandsound();}
else if (ViorVo === "--vo"){justsound(); }
else if (!ViorVo){videoandsound();  }
else{
    console.log("HATALI GİRİŞ")
}

function justsound(){
    const videoUrl = input('İndirmek istediğiniz video/ses linkini girin: ');
exec(`c:\\Users\\PC\\Downloads\\yt-dlp.exe -x -f "ba" --no-playlist  --ffmpeg-location "${ffmpegPath}"  -o "${outputname || randomNumber}.webm"  --js-runtime node "${videoUrl}"`, (error, stdout, stderr) => {
    if (error) {
        console.error("Hata oluştu:", error);
        return;
    }
    const directAudioUrl = stdout.trim();
    console.log("İndirilen müzik:", "music" + (outputname || randomNumber) + ".webm");
    
    // Artık bu linki alarmında çalabilirsin!
});
}
function videoandsound(){
    const videoUrl = input('İndirmek istediğiniz video/ses linkini girin: ');
exec(`"c:\\Users\\PC\\Downloads\\yt-dlp.exe" -f "bestvideo+bestaudio/best[ext=mp4]/best" --no-playlist --ffmpeg-location "${ffmpegPath}" -o "${outputname || randomNumber}.mp4" "${videoUrl}"`, (error, stdout, stderr) => {
    if (error) {
        console.error("Hata oluştu:", error);
        return;
    }
    console.log("İndirilen video:", (outputname || randomNumber) + ".mp4");
});

}
