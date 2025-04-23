FOR /F "tokens=*" %%G IN ('dir /b *.png') DO (
    ffmpeg -i "%%G" "%%~nG.webp"
)
FOR /F "tokens=*" %%G IN ('dir /b *.jpeg') DO (
    ffmpeg -i "%%G" "%%~nG.webp"
)
FOR /F "tokens=*" %%G IN ('dir /b *.jpg') DO (
    ffmpeg -i "%%G" "%%~nG.webp"
)