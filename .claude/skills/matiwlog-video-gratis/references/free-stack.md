# Stack de Video Gratis — Setup y Recetas

Referencia práctica de la skill `matiwlog-video-gratis`. Todo pensado para el PC de Mati (AMD, sin CUDA, 7.4GB RAM, ffmpeg ya instalado).

---

## A. AI-Youtube-Shorts-Generator (clipear largo → shorts)

Repo: https://github.com/SamurAIGPT/AI-Youtube-Shorts-Generator

**Qué hace:** transcribe un video largo, rankea los momentos más virales con un LLM y exporta clips 9:16 con su hook y motivo.

**Corre en el PC de Mati** en modo local (CPU). Lento en transcripción pero funciona.

### Setup (shape general — confirmar flags exactos con el README actual del repo, cambian seguido)
```bash
git clone https://github.com/SamurAIGPT/AI-Youtube-Shorts-Generator.git
cd AI-Youtube-Shorts-Generator
python -m venv venv
# Windows PowerShell:  .\venv\Scripts\Activate.ps1
pip install -r requirements.txt
# ffmpeg ya está instalado (winget). Confirmar que está en PATH: ffmpeg -version
```

### Claves de API (elegir la GRATIS)
- **Gemini** (recomendado, tier gratis generoso): crear key en aistudio.google.com/apikey → setear `GEMINI_API_KEY`.
- Alternativa: OpenAI (de pago por uso; evitar mientras se empieza).
- Setear también `LOCAL_WHISPER_DEVICE=cpu` (no tiene CUDA).

### Uso
```bash
python main.py --mode local   # y seguir las instrucciones del README para pasar el video/URL
```
Entrega MP4s en 9:16 con puntuación de viralidad + hook. Esos son la materia prima de la skill /repurpose.

> Realidad: la transcripción en CPU de un video largo puede tardar. Recomendación: procesar de a un video, de noche, y con clips de origen no gigantes. Con 7.4GB RAM, cerrar todo lo demás mientras corre.

---

## B. ffmpeg — recetas que SÍ o SÍ funcionan (ya está instalado)

**Recortar a vertical 9:16 (centro) y escalar a 1080x1920:**
```bash
ffmpeg -i entrada.mp4 -vf "crop=ih*9/16:ih,scale=1080:1920" -c:a copy salida-9x16.mp4
```

**Cortar un tramo (del segundo 10 al 40):**
```bash
ffmpeg -i entrada.mp4 -ss 00:00:10 -to 00:00:40 -c copy clip.mp4
```

**Unir varios clips (crear lista.txt con: file 'clip1.mp4' por línea):**
```bash
ffmpeg -f concat -safe 0 -i lista.txt -c copy union.mp4
```

**Quemar subtítulos .srt con estilo karaoke verde (color de marca #06d6a0):**
```bash
ffmpeg -i clip.mp4 -vf "subtitles=subs.srt:force_style='FontName=DejaVu Sans,FontSize=18,PrimaryColour=&H00A0D606,Bold=1,Outline=2'" clip-subs.mp4
```
(PrimaryColour va en BGR hex invertido: 06d6a0 → &H00A0D606.)

**Extraer audio (para transcribir o para el TTS):**
```bash
ffmpeg -i clip.mp4 -q:a 0 -map a audio.mp3
```

---

## C. Edge-TTS — voz en off gratis, ilimitada, en español (corre local)

Microsoft Edge TTS. 100% gratis, sin API key, voces neutras de buena calidad.
```bash
pip install edge-tts
# Listar voces en español:
edge-tts --list-voices | grep es-
# Generar narración (voz chilena):
edge-tts --voice es-CL-LorenzoNeural --text "Tu guion aquí" --write-media narracion.mp3
# Otra opción femenina: es-CL-CatalinaNeural | neutra latam: es-MX-JorgeNeural
```
Luego mezclar la narración con el video vía ffmpeg. Ideal para shorts sin poner la cara.

---

## D. Alternativas GRATIS a Higgsfield (cuando de verdad se necesite generar)

**Imagen (b-roll estático, thumbnails):** Ideogram (texto en imagen), Bing Image Creator (DALL·E gratis), Leonardo.ai (créditos diarios), Krea, Google ImageFX. Editar: Photopea (Photoshop gratis en navegador). — Coherente con la lista de "5 IAs gratis" de recursos.html.

**Video generado (texto→video / imagen→video), tiers gratis en la nube (NO local):** Kling, Hailuo/MiniMax, Pika, LTX Studio, Vidu, Haiper, Google Veo (vía herramientas gratis). Probar 2-3, quedarse con el que rinda ese mes. Los límites gratis cambian — por eso NO se codifican acá como definitivos.

**Regla:** Higgsfield (pagado) = último recurso, solo si al escalar los tiers gratis no alcanzan. Para empezar, no se paga.

---

## E. Qué NO intentar (para no perder tiempo)
- Generación de video local (SVD, AnimateDiff, ComfyUI de video, el repo zoofai): exigen NVIDIA/CUDA + 8GB VRAM. La RX 5600M es AMD → no corre. Cerrado.
- Modelos LLM locales pesados: 7.4GB RAM no da. Usar APIs con tier gratis (Gemini) en su lugar.
