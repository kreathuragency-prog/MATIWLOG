---
name: matiwlog-video-gratis
description: Pipeline de video 100% GRATIS para MATIWLOG — evita pagar Higgsfield mientras se empieza. Usa esta skill cuando Mati quiera producir reels/shorts, convertir video largo en clips, generar b-roll o voz con IA, o cuando mencione "video gratis", "sin pagar Higgsfield", "hacer un short", "clipear", "repurpose de video", "cortar mi video largo", o cualquier tarea de producción audiovisual. Está diseñada para su hardware real (AMD RX 5600M, sin CUDA, 7.4GB RAM) y conecta con GUIONES-LANZAMIENTO.md, ESTRATEGIA-VIRAL.md y la skill /repurpose.
---

# MATIWLOG — Pipeline de Video Gratis

Objetivo: producir todo el contenido de video del plan (reels de lanzamiento, shorts, repurpose) **sin pagar Higgsfield ni ninguna suscripción**, dentro de las limitaciones reales del PC de Mati.

## REGLA DE ORO (el hardware manda)

PC de Mati: **Ryzen 5 4600H · 7.4GB RAM · AMD Radeon RX 5600M (SIN CUDA) · ~100GB libres · ffmpeg instalado · sin OBS/DaVinci/CapCut**.

Consecuencia directa, sin rodeos:
- ❌ **Generación de video local (texto→video) NO corre acá.** Todos esos modelos (Stable Video Diffusion, AnimateDiff, el repo zoofai/Free-ai-video-generator) exigen GPU NVIDIA/CUDA con 8GB+ VRAM. La RX 5600M es AMD y no sirve para eso. No perder tiempo intentándolo.
- ✅ **Lo que SÍ corre:** todo lo basado en ffmpeg + APIs en la nube (transcripción, LLM, TTS) + tiers gratis de webs de generación. Ahí está el 100% de lo que Mati necesita de verdad.

Verdad de fondo: los reels del plan (GUIONES-LANZAMIENTO.md) son **talking-head + screen-recording + b-roll de drone** — NO video generado por IA. O sea Mati **no necesita** texto→video para ejecutar su plan. Higgsfield solo valdría la pena mucho más adelante, para clips generados cuando ya escale. Para empezar: todo gratis.

## EL STACK GRATIS (en orden de importancia para Mati)

### 1. Clipear video largo → shorts (SU herramienta estrella)
**Herramienta: SamurAIGPT/AI-Youtube-Shorts-Generator** — ver `references/free-stack.md` para setup.
- Toma un video largo (los que Mati YA tiene: drone 4K, vlogs, camper) y saca los clips más virales en 9:16 automáticamente.
- Corre en modo local (CPU): ffmpeg (ya lo tiene) + faster-whisper (transcribe) + Gemini API (tier gratis para el ranking de viralidad) + yt-dlp.
- Es el **motor de la skill /repurpose**: 1 video largo → varios shorts listos.

### 2. Editar / cortar / formatear (ya instalado)
**ffmpeg** — recorte 9:16, cortes, unir clips, quemar subtítulos. Recetas en `references/free-stack.md`.
Alternativa con UI gratis: **CapCut** (se puede instalar, gratis) para el pulido final y subtítulos karaoke.

### 3. Voz en off con IA, gratis
**Edge-TTS** (Microsoft, 100% gratis, corre local vía Python, voces neutras en español muy decentes). Cero costo, cero límite. Ideal para narrar shorts sin poner la cara.

### 4. Imágenes / b-roll estático gratis (alternativas a Higgsfield image)
Coherente con la lista que Mati ya publica en recursos.html: **Ideogram** (texto en imágenes), **Bing Image Creator / DAL-E gratis**, **Leonardo.ai** (créditos diarios gratis), **Krea** (free), **Google ImageFX**. **Photopea** para editar (Photoshop gratis en el navegador).

### 5. Video generado por IA — SOLO si es indispensable, vía tiers GRATIS en la nube
Si algún día un guion pide un clip generado (no b-roll propio), usar tiers gratis rotativos ANTES que pagar: Kling, Hailuo/MiniMax, Pika, LTX Studio, Vidu, Haiper, Google Veo (vía herramientas gratis). Nota: los límites gratis cambian seguido — probar 2-3 y quedarse con el que rinda ese mes. Higgsfield queda como último recurso pagado.

## FLUJO INTEGRADO (cómo se conecta con lo que ya diseñamos)

```
GUIONES-LANZAMIENTO.md / ESTRATEGIA-VIRAL.md   (qué grabar — ya escrito)
        │
        ▼
Mati graba talking-head + screen-rec + usa b-roll drone que ya tiene
        │
        ▼
[Video largo]  ──►  AI-Youtube-Shorts-Generator  ──►  shorts 9:16 rankeados
        │                                                    │
        │                                                    ▼
        │                                          ffmpeg / CapCut: subtítulos karaoke verde
        │                                          Edge-TTS: voz en off si no pone la cara
        ▼                                                    │
skill /repurpose (1 largo → 5 piezas)  ◄─────────────────────┘
        │
        ▼
Publicar según el calendario de ESTRATEGIA-VIRAL.md (IG + TikTok + Shorts, audio original)
```

## CÓMO ACTUAR CUANDO SE INVOCA ESTA SKILL

1. **Si Mati quiere producir un reel del plan:** buscar el guion en `reports/GUIONES-LANZAMIENTO.md` o `ESTRATEGIA-VIRAL.md`, y guiarlo con el stack gratis (grabar → clipear → subtitular → publicar). No proponer herramientas de pago si hay equivalente gratis.
2. **Si tiene un video largo para reciclar:** usar el flujo del AI-Youtube-Shorts-Generator (setup en `references/free-stack.md`). Integra con /repurpose.
3. **Si pide instalar las herramientas:** seguir el setup de `references/free-stack.md` paso a paso, avisando de los tiempos reales (Whisper en CPU es lento pero funciona).
4. **Siempre:** ser honesto sobre qué corre en su hardware. Nunca venderle generación local de video — no puede.
5. Registrar cualquier resultado/experimento en `reports/` con fecha.

## REGLAS
- Priorizar SIEMPRE gratis sobre pagado mientras se empieza — es un pedido explícito de Mati.
- No intentar generación de video local (AMD sin CUDA). Es tiempo perdido.
- Mantener el estilo validado: vertical 9:16, audio original, hook antes del segundo 2, subtítulos karaoke, un CTA hablado.
- Coherencia con la lista de "5 IAs gratis" que Mati ya promociona en recursos.html.
