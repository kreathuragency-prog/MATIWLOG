/* MatiWlog · Portafolio flotante en 3D (10-nov-2026)
   Botón fijo abajo a la derecha que abre una nube 3D con las tarjetas reales del portafolio de Kreathur.
   Se gira arrastrando, las tarjetas de un rubro se juntan al filtrar y cada una abre su demo.
   Código propio de MatiWlog: solo usa imágenes y enlaces públicos de kreathur.agency.
   También se abre con matiwlog.com/#portafolio */
(function(){
  var K='https://kreathur.agency';
  var D=[["Lilafken Apart","Casos reales","Reservas directas, calendario y bot LILA","/vitrina/real/img/real-lilafken.webp","https://lilafken.com/"],["La Papa Brava","Casos reales","Web real del local","/vitrina/real/img/real-lapapabrava.webp","https://lapapabrava.cl/"],["Pichilemu Wear","Casos reales","Moda circular con filtros","/vitrina/real/img/real-pichilemuwear.webp","https://pichilemuwear.com/shop"],["PuntoSki","Casos reales","Equipo y ropa de nieve","/vitrina/real/img/real-puntoski.webp","https://puntoski.com/"],["Importadora Maully","Casos reales","Catálogo mayorista","/vitrina/real/img/real-maully.webp","https://importadoramaully.cl/"],["Pichilemu Online","Casos reales","Guía del destino","/vitrina/real/img/real-pichilemuonline.webp","https://pichilemuonline.cl/"],["ARREMO","Casos reales","Web de cafetería","/vitrina/real/img/real-arremo.webp","https://arremo.kreathur.agency/"],["Kütrales","Casos reales","Asadores","/vitrina/real/img/real-kutrales.webp","https://kutralesasadores.kreathur.agency/"],["Backside","Casos reales","Web del negocio","/vitrina/real/img/real-backside.webp","https://backside.pichilemuonline.cl/"],["Web para food truck","Gastronomía","Rueda Brava: arma tu hamburguesa arrastrando, mírala en tu mesa y suma sellos","/portafolio/t/rueda-brava.jpg","https://kreathur.agency/portafolio/sitios/comida/rueda-brava/"],["Web para cafetería","Gastronomía","Brote: arma tu café arrastrando (tamaño, tipo, leche y sabor), tu sándwich y suma sellos","/portafolio/t/gas-web-cafe.jpg","https://kreathur.agency/portafolio/sitios/disenos/brote-cafe-brunch/"],["Web para sushi","Gastronomía","Kaigan: arma tu roll eligiendo envoltura y relleno, y mira la tabla en tu mesa","/portafolio/t/kaigan.jpg","https://kreathur.agency/portafolio/sitios/comida/kaigan/"],["Web para pizzería","Gastronomía","Forno Lobo: arma tu pizza arrastrando y mírala a tamaño real en tu mesa","/portafolio/t/gas-web-pizza.jpg","https://kreathur.agency/portafolio/sitios/disenos/forno-lobo-pizzeria/"],["Web para cocinería","Gastronomía","La Picada: arma tu almuerzo, pide desde la mesa y vuelve por el sello","/portafolio/t/la-picada.jpg","https://kreathur.agency/portafolio/sitios/comida/la-picada/"],["Web para ferretería","Comercio","Faena: camina el showroom en 3D, mira la pintura o el piso en tu casa con una foto y vende por WhatsApp","/portafolio/t/rubro-ferreteria.jpg","https://kreathur.agency/portafolio/sitios/rubros/ferreteria/"],["Recorrido del hotel","Hotelería y turismo","Suites y áreas comunes por imágenes","/portafolio/t/hot-recorrido.jpg","https://kreathur.agency/portafolio/sitios/bruma/?recorrido=101"],["Web de hotel Bruma","Hotelería y turismo","Web con reserva directa","/portafolio/t/hot-bruma.jpg","https://kreathur.agency/portafolio/sitios/bruma/"],["Recorrido de casa","Inmobiliaria","Camina la casa antes de construirla","/portafolio/t/inm-casa.jpg","https://kreathur.agency/portafolio/inmo/tour.html"],["Plano de lotes","Inmobiliaria","Disponibilidad por lote","/portafolio/t/inm-lotes.jpg","https://kreathur.agency/portafolio/inmo/loteo.html"],["Sitio con cotizador","Inmobiliaria","Proyecto y cotización","/portafolio/t/inm-sitio.jpg","https://kreathur.agency/portafolio/inmo/sitio.html"],["Web para inmobiliaria","Inmobiliaria","Altamar: elige tu depto en el edificio, mira cuánto sol le entra, la vista desde tu piso y tu dividendo","/portafolio/t/rubro-inmobiliaria.jpg","https://kreathur.agency/portafolio/sitios/rubros/inmobiliaria/"],["Edificio 3D","Inmobiliaria","Recorre el edificio, entra al piso y revísalo por dentro","/portafolio/t/inm-cine.jpg","https://inmobiliaria.kreathur.agency/edificios/"],["Web inmobiliaria completa","Inmobiliaria","Edificios, terrenos y recorridos en una sola web","/portafolio/t/inm-cine.jpg","https://inmobiliaria.kreathur.agency/"],["Tienda de promos","Comercio","Promos y carrito","/portafolio/t/eco-tiburon.jpg","https://almacentiburon.kreathur.agency/"],["Tienda de ropa Costa Norte","Comercio","Tres fotos rápidas (frente, reverso y etiqueta): se retocan solas y la ficha se arma. Ahorra horas de trabajo","/portafolio/t/ropa-panel.jpg","https://kreathur.agency/portafolio/sitios/rubros/ropa/"],["Bot de IA en WhatsApp","WhatsApp y llamadas","Responde en segundos, de día y de noche. $19.900/mes, 3 meses gratis para los 50 primeros","/portafolio/t/wa-bot.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#bot"],["Recepcionista virtual","WhatsApp y llamadas","Agenda horas por WhatsApp y manda recordatorios solo","/portafolio/t/wa-recep.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#recep"],["Mensajes automáticos de WhatsApp","WhatsApp y llamadas","Confirmaciones, avisos de despacho y reseñas que salen solos","/portafolio/t/wa-avisos.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#auto"],["Llamadas con IA para pedidos y delivery","WhatsApp y llamadas","Contesta el teléfono, toma el pedido y lo manda a cocina","/portafolio/t/wa-llamadas.jpg","https://kreathur.agency/portafolio/sitios/rubros/whatsapp/#llam"],["Botillería La Esquina","Comercio","Control de edad, arma tu pack y retiro sin fila","/portafolio/t/rubro-botilleria.jpg","https://kreathur.agency/portafolio/sitios/rubros/botilleria/"],["Minimarket Don Lucho","Comercio","Tu compra de siempre con un toque y despacho","/portafolio/t/rubro-minimarket.jpg","https://kreathur.agency/portafolio/sitios/rubros/minimarket/"],["Centro médico","Salud y servicios","Agenda por profesional, previsión y recordatorio","/portafolio/t/rubro-clinica.jpg","https://kreathur.agency/portafolio/sitios/rubros/clinica/"],["Clínica dental","Salud y servicios","Agenda por tratamiento y urgencias","/portafolio/t/rubro-dental.jpg","https://kreathur.agency/portafolio/sitios/rubros/dental/"],["Veterinaria","Salud y servicios","Horas para mascotas y aviso de vacunas","/portafolio/t/rubro-vet.jpg","https://kreathur.agency/portafolio/sitios/rubros/vet/"],["Belleza y barbería","Salud y servicios","Reserva con tu profesional favorita","/portafolio/t/rubro-belleza.jpg","https://kreathur.agency/portafolio/sitios/rubros/belleza/"],["Tours","Hotelería y turismo","Web de la experiencia","/portafolio/t/tur-tours.jpg","https://kreathur.agency/portafolio/sitios/disenos/rumbo-sal-tours/"],["Escuela de surf","Hotelería y turismo","Calendario de clases con cupos y reserva por WhatsApp, spots de Pichilemu y video real","/portafolio/t/tur-surf.jpg","https://kreathur.agency/portafolio/sitios/disenos/ola-norte-surf/"],["Web de cabañas","Hotelería y turismo","Alojamiento con reserva","/portafolio/t/hot-web.jpg","https://kreathur.agency/portafolio/sitios/disenos/tierra-bruma-cabanas/"],["Web de propiedades","Inmobiliaria","Corredora y proyectos","/portafolio/t/inm-web.jpg","https://kreathur.agency/portafolio/sitios/disenos/acantilado-propiedades/"],["Tienda de ropa (diseño)","Comercio","Colección con identidad","/portafolio/t/eco-ropa.jpg","https://kreathur.agency/portafolio/sitios/disenos/salitre-tienda-ropa/"]];
  var ORDEN=['Todos','Casos reales','Gastronomía','Hotelería y turismo','Inmobiliaria','Comercio','Salud y servicios','WhatsApp y llamadas'];
  var WA='https://wa.me/56968442594?text='+encodeURIComponent('Hola Mati, vi el portafolio en matiwlog.com y quiero conversar sobre mi proyecto.');
  var QUIETO=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var css=''+
  '.pf-btn{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:970;display:flex;align-items:center;gap:.6rem;padding:.75rem 1.1rem .75rem .8rem;border-radius:999px;border:1.5px solid rgba(243,233,214,.35);background:rgba(13,22,30,.88);color:#f3e9d6;font:600 .9rem "Instrument Sans",system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 0 rgba(159,227,220,.5);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:transform .25s,border-color .25s;animation:pfPulso 3s ease-out infinite}'+
  '@keyframes pfPulso{0%{box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 0 rgba(159,227,220,.45)}70%,100%{box-shadow:0 10px 30px rgba(0,0,0,.35),0 0 0 14px rgba(159,227,220,0)}}'+
  '.pf-btn:hover{transform:translateY(-2px);border-color:#9fe3dc}'+
  '.pf :focus-visible,.pf-btn:focus-visible{outline:2px solid #9fe3dc;outline-offset:3px}'+
  '.pf-ico{position:relative;width:30px;height:26px}'+
  '.pf-ico i{position:absolute;inset:0;border-radius:6px;background-size:cover;background-position:center;border:1.5px solid rgba(255,255,255,.7);animation:pfIco 3.2s ease-in-out infinite}'+
  '.pf-ico i:nth-child(1){transform:translate(-5px,3px) rotate(-12deg);animation-delay:-.6s}'+
  '.pf-ico i:nth-child(2){transform:translate(5px,2px) rotate(10deg);animation-delay:-1.4s}'+
  '.pf-ico i:nth-child(3){transform:translate(0,-2px)}'+
  '@keyframes pfIco{50%{margin-top:-3px}}'+
  '.pf{position:fixed;inset:0;z-index:2000;display:none;flex-direction:column;background:radial-gradient(120% 80% at 50% 30%,#18303f 0,#0d161e 62%);color:#f3e9d6;font-family:"Instrument Sans",system-ui,sans-serif;overflow:hidden}'+
  '.pf.on{display:flex}'+
  '.pf-bg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}'+
  '.pf-top,.pf-chips,.pf-foot{position:relative;z-index:3}'+
  '.pf-top{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:16px 16px 6px;max-width:1200px;width:100%;margin:0 auto}'+
  '.pf-top small{font:500 .7rem "JetBrains Mono",monospace;letter-spacing:.18em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-top h2{margin:.35rem 0 0;font:500 clamp(1.35rem,3.6vw,2.2rem)/1.1 Fraunces,Georgia,serif}'+
  '.pf-top h2 em{color:#9fe3dc}'+
  '.pf-tb{display:flex;gap:.5rem;flex:none}'+
  '.pf-x,.pf-vista{height:44px;border-radius:999px;border:1.5px solid rgba(243,233,214,.35);background:rgba(13,22,30,.5);color:inherit;cursor:pointer}'+
  '.pf-x{width:44px;font-size:1.25rem}'+
  '.pf-vista{padding:0 .9rem;font:500 .8rem "Instrument Sans",system-ui,sans-serif}'+
  '.pf-chips{display:flex;gap:.5rem;overflow-x:auto;padding:6px 16px 8px;max-width:1200px;width:100%;margin:0 auto;scrollbar-width:none}'+
  '.pf-chips::-webkit-scrollbar{display:none}'+
  '.pf-chip{flex:none;padding:.5rem .9rem;border-radius:999px;border:1.5px solid rgba(243,233,214,.25);background:rgba(13,22,30,.45);color:inherit;font:500 .85rem "Instrument Sans",system-ui,sans-serif;cursor:pointer;white-space:nowrap;transition:background .25s,color .25s}'+
  '.pf-chip[aria-pressed=true]{background:#9fe3dc;border-color:#9fe3dc;color:#0d161e}'+
  /* nube 3D */
  '.pf-stage{position:relative;z-index:2;flex:1;min-height:0;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none}'+
  '.pf-stage.drag{cursor:grabbing}'+'.pf-stage.fic .pf-n{filter:blur(2px) brightness(.55)!important}'+
  '.pf-n{position:absolute;left:0;top:0;width:var(--w);margin:0;padding:0;border:0;background:none;color:inherit;text-align:left;cursor:pointer;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}'+
  '.pf-n img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:12px;border:1.5px solid rgba(255,255,255,.22);background:#142230;box-shadow:0 12px 28px rgba(0,0,0,.45);pointer-events:none}'+
  '.pf-n b{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:.35rem;font:600 .62rem/1.2 "Instrument Sans",system-ui,sans-serif;text-shadow:0 2px 8px rgba(0,0,0,.9);opacity:0;transition:opacity .3s}.pf-n.f b{opacity:1}'+
  '.pf-n.f img{border-color:#9fe3dc;box-shadow:0 0 0 2px rgba(159,227,220,.35),0 0 34px rgba(159,227,220,.45),0 16px 34px rgba(0,0,0,.5)}'+
  '.pf-hint{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);z-index:250;font:500 .72rem "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:rgba(243,233,214,.7);background:rgba(13,22,30,.55);padding:.4rem .75rem;border-radius:999px;pointer-events:none;transition:opacity .6s;white-space:nowrap}'+
  /* ficha */
  '.pf-ficha{position:absolute;z-index:400;left:50%;bottom:14px;width:min(420px,calc(100% - 28px));transform:translate(-50%,30px) scale(.96);opacity:0;pointer-events:none;transition:transform .35s cubic-bezier(.2,.9,.3,1.2),opacity .25s;border-radius:20px;overflow:hidden;background:rgba(16,28,38,.96);border:1.5px solid rgba(159,227,220,.45);box-shadow:0 30px 70px rgba(0,0,0,.55)}'+
  '.pf-ficha.on{transform:translate(-50%,0) scale(1);opacity:1;pointer-events:auto}'+
  '.pf-ficha img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}'+
  '.pf-ficha div{display:grid;gap:.4rem;padding:.9rem 1rem 1rem}'+
  '.pf-ficha span{font:500 .66rem "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-ficha b{font:600 1.05rem/1.25 "Instrument Sans",system-ui,sans-serif}'+
  '.pf-ficha p{margin:0;font-size:.88rem;line-height:1.45;color:rgba(243,233,214,.8)}'+
  '.pf-ficha nav{display:flex;gap:.5rem;margin-top:.4rem}'+
  '.pf-ficha nav a,.pf-ficha nav button{flex:1;display:inline-flex;justify-content:center;align-items:center;padding:.75rem .8rem;border-radius:999px;font:600 .88rem "Instrument Sans",system-ui,sans-serif;text-decoration:none;cursor:pointer}'+
  '.pf-ficha nav a{background:#f4a259;color:#0d161e;border:0}'+
  '.pf-ficha nav button{background:transparent;color:#f3e9d6;border:1.5px solid rgba(243,233,214,.4)}'+
  /* lista (alternativa accesible) */
  '.pf-lista{position:relative;z-index:2;flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;display:none}'+
  '.pf.lista .pf-lista{display:block}.pf.lista .pf-stage{display:none}'+
  '.pf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;padding:12px 16px 24px;max-width:1200px;margin:0 auto}'+
  '.pf-card{display:flex;flex-direction:column;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.12);color:inherit;text-decoration:none}'+
  '.pf-card:hover{border-color:#9fe3dc}'+
  '.pf-card img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:#142230}'+
  '.pf-card div{display:grid;gap:.3rem;padding:.8rem .9rem .95rem}'+
  '.pf-card span{font:500 .64rem "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#9fe3dc}'+
  '.pf-card b{font:600 .95rem/1.25 "Instrument Sans",system-ui,sans-serif}'+
  '.pf-card p{margin:0;font-size:.84rem;line-height:1.45;color:rgba(243,233,214,.78)}'+
  '.pf-foot{display:flex;flex-wrap:wrap;gap:.7rem;justify-content:center;padding:12px 16px max(14px,env(safe-area-inset-bottom));border-top:1px solid rgba(255,255,255,.08);background:rgba(13,22,30,.6)}'+
  '.pf-foot a{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.8rem 1.3rem;border-radius:999px;font-weight:600;font-size:.9rem;text-decoration:none}'+
  '.pf-foot .a1{background:#f4a259;color:#0d161e}'+
  '.pf-foot .a2{border:1.5px solid rgba(243,233,214,.45);color:#f3e9d6}'+
  'html.pf-lock,html.pf-lock body{overflow:hidden}'+
  '@media (max-width:560px){.pf-vista{padding:0 .7rem;font-size:.75rem}.pf-grid{grid-template-columns:1fr 1fr;gap:12px}.pf-card p{display:none}.pf-foot{flex-wrap:nowrap;gap:.5rem;padding:10px 12px max(12px,env(safe-area-inset-bottom))}.pf-foot a{flex:1;text-align:center;padding:.75rem .6rem;font-size:.82rem;line-height:1.2}}'+
  '@media (prefers-reduced-motion:reduce){.pf-btn,.pf-ico i{animation:none}}';

  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  /* botón flotante */
  var b=document.createElement('button');
  b.className='pf-btn';b.type='button';b.setAttribute('aria-haspopup','dialog');
  b.innerHTML='<span class="pf-ico" aria-hidden="true"><i style="background-image:url('+K+D[0][3]+')"></i><i style="background-image:url('+K+D[10][3]+')"></i><i style="background-image:url('+K+D[1][3]+')"></i></span><span>Portafolio</span>';
  document.body.appendChild(b);

  /* ventana */
  var o=document.createElement('div');
  o.className='pf';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-labelledby','pf-t');
  o.innerHTML='<canvas class="pf-bg" aria-hidden="true"></canvas>'+
    '<div class="pf-top"><div><small>Portafolio · '+D.length+' trabajos reales</small><h2 id="pf-t">Lo que construimos <em>con Kreathur</em></h2></div><div class="pf-tb"><button class="pf-vista" type="button" aria-pressed="false">Ver lista</button><button class="pf-x" type="button" aria-label="Cerrar portafolio">✕</button></div></div>'+
    '<div class="pf-chips" role="toolbar" aria-label="Filtrar por rubro"></div>'+
    '<div class="pf-stage" aria-label="Nube de trabajos: arrastra para girar y toca una tarjeta"><div class="pf-hint">Arrastra para girar · toca una tarjeta</div>'+
      '<div class="pf-ficha" role="region" aria-live="polite"><img alt=""><div><span></span><b></b><p></p><nav><a target="_blank" rel="noopener">Abrir demo →</a><button type="button">Seguir mirando</button></nav></div></div></div>'+
    '<div class="pf-lista"><div class="pf-grid"></div></div>'+
    '<div class="pf-foot"><a class="a1" href="'+K+'/portafolio/" target="_blank" rel="noopener">Ver con videos en kreathur.agency →</a><a class="a2" href="'+WA+'" target="_blank" rel="noopener">Hablar con Mati</a></div>';
  document.body.appendChild(o);

  var stage=o.querySelector('.pf-stage'),hint=o.querySelector('.pf-hint'),ficha=o.querySelector('.pf-ficha'),grid=o.querySelector('.pf-grid'),chips=o.querySelector('.pf-chips'),cv=o.querySelector('.pf-bg'),ctx=cv.getContext('2d');
  var cat='Todos',abierto=false,raf=0;

  /* tarjetas de la nube */
  var N=D.map(function(d,i){
    var e=document.createElement('button');e.type='button';e.className='pf-n';e.setAttribute('aria-label',d[0]+' · '+d[1]);
    e.innerHTML='<img alt="" draggable="false" decoding="async" src="'+K+esc(d[3])+'"><b>'+esc(d[0])+'</b>';
    stage.appendChild(e);
    return {d:d,el:e,x:0,y:0,z:0,tx:0,ty:0,tz:0,a:0,ta:1,i:i};
  });

  /* esfera de Fibonacci: reparte n puntos parejos */
  function repartir(){
    var act=N.filter(function(n){return cat==='Todos'||n.d[1]===cat}),k=act.length,g=Math.PI*(3-Math.sqrt(5));
    N.forEach(function(n){n.ta=0;n.tx=n.x*.2;n.ty=n.y*.2;n.tz=n.z*.2});
    act.forEach(function(n,i){var y=k===1?0:1-(i/(k-1))*2,r=Math.sqrt(1-y*y),t=g*i;n.tx=Math.cos(t)*r;n.ty=y;n.tz=Math.sin(t)*r;n.ta=1});
    radio=k<8?.62:k<16?.8:1;tam=k<8?1.6:k<16?1.25:1;
  }

  var W=0,H=0,R=0,base=0,radio=1,radioV=0,tam=1,tamV=1,yaw=0,pitch=-.18,vy=.0022,vp=0,arr=null,meta=null,frente=null;
  function medir(){
    var r=stage.getBoundingClientRect();W=r.width;H=r.height;
    R=Math.min(W*.34,H*.38);base=Math.max(72,Math.min(150,Math.min(W,H)*.2));
    stage.style.setProperty('--w',base+'px');
    var dpr=Math.min(window.devicePixelRatio||1,2);cv.width=o.clientWidth*dpr;cv.height=o.clientHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  /* partículas de fondo (brillo de mar) */
  var P=[];for(var i=0;i<70;i++)P.push({x:Math.random(),y:Math.random(),z:Math.random(),s:Math.random()*1.6+.4,c:Math.random()<.75?'159,227,220':'244,162,89'});
  function fondo(t){
    var w=o.clientWidth,h=o.clientHeight;ctx.clearRect(0,0,w,h);
    P.forEach(function(p){var px=((p.x+yaw*.02*(p.z+.3))%1+1)%1*w,py=((p.y+t*.000006*(p.z+.2))%1)*h,al=.15+.45*p.z*(.6+.4*Math.sin(t*.002+p.x*9));ctx.beginPath();ctx.arc(px,py,p.s*(.5+p.z),0,6.283);ctx.fillStyle='rgba('+p.c+','+al.toFixed(3)+')';ctx.fill()});
  }

  function cuadro(t){
    raf=requestAnimationFrame(cuadro);
    if(!arr){yaw+=vy;pitch+=vp;vy+=((QUIETO?0:.0022)-vy)*.02;vp*=.94}
    if(meta){yaw+=(meta.y-yaw)*.12;pitch+=(meta.p-pitch)*.12;if(Math.abs(meta.y-yaw)<.002&&Math.abs(meta.p-pitch)<.002)meta=null}
    pitch=Math.max(-1.25,Math.min(1.25,pitch));
    radioV+=(radio-radioV)*.06;tamV+=(tam-tamV)*.06;
    var cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),F=2.6,mejor=null,mz=-9;
    N.forEach(function(n){
      n.x+=(n.tx-n.x)*.08;n.y+=(n.ty-n.y)*.08;n.z+=(n.tz-n.z)*.08;n.a+=(n.ta-n.a)*.1;
      var x1=n.x*cy+n.z*sy,z1=-n.x*sy+n.z*cy,y2=n.y*cp-z1*sp,z2=n.y*sp+z1*cp;
      var pr=F/(F-z2*radioV),sx=W/2+x1*R*radioV*pr-base/2,sy2=H/2+y2*R*radioV*pr-base*.35,sc=pr*.72*tamV;
      var vis=n.a*(.25+.75*(z2+1)/2);
      n.el.style.transform='translate3d('+sx.toFixed(1)+'px,'+sy2.toFixed(1)+'px,0) scale('+sc.toFixed(3)+')';
      n.el.style.opacity=vis.toFixed(3);n.el.style.zIndex=Math.round((z2+1)*100);
      n.el.style.filter=z2<-.35?'blur('+((-.35-z2)*3).toFixed(1)+'px)':'none';
      n.el.style.pointerEvents=n.a>.5&&z2>-.6?'auto':'none';
      n.el.tabIndex=n.a>.5?0:-1;
      if(n.ta&&z2>mz){mz=z2;mejor=n}
    });
    if(mejor!==frente){if(frente)frente.el.classList.remove('f');frente=mejor;if(frente)frente.el.classList.add('f')}
    fondo(t);
  }

  /* girar arrastrando, con inercia */
  var px0=0,py0=0,mov=0,ult=0;
  stage.addEventListener('pointerdown',function(e){if(e.target.closest('.pf-ficha'))return;arr={x:e.clientX,y:e.clientY};px0=e.clientX;py0=e.clientY;mov=0;ult=performance.now();meta=null;stage.classList.add('drag');try{stage.setPointerCapture(e.pointerId)}catch(_){}});
  stage.addEventListener('pointermove',function(e){if(!arr)return;var dx=e.clientX-arr.x,dy=e.clientY-arr.y;arr.x=e.clientX;arr.y=e.clientY;mov+=Math.abs(dx)+Math.abs(dy);yaw+=dx*.006;pitch+=dy*.006;vy=dx*.006;vp=dy*.006;ult=performance.now();if(mov>12)hint.style.opacity=0});
  function soltar(e){
    if(!arr)return;arr=null;stage.classList.remove('drag');if(performance.now()-ult>90){vy=0;vp=0}
    if(mov<8){var el=document.elementFromPoint(e.clientX,e.clientY),c=el&&el.closest('.pf-n');if(c)tocar(N.filter(function(n){return n.el===c})[0])}
  }
  stage.addEventListener('pointerup',soltar);stage.addEventListener('pointercancel',function(){arr=null;stage.classList.remove('drag')});
  /* teclado: Enter en una tarjeta */
  stage.addEventListener('keydown',function(e){var c=e.target.closest&&e.target.closest('.pf-n');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();tocar(N.filter(function(n){return n.el===c})[0])}});

  /* tocar: la tarjeta viaja al frente y se abre su ficha */
  function tocar(n){
    if(!n)return;var a=Math.atan2(-n.tx,n.tz),r=Math.sqrt(n.tx*n.tx+n.tz*n.tz),p=Math.atan2(n.ty,r);
    var dy=a-yaw;dy=Math.atan2(Math.sin(dy),Math.cos(dy));meta={y:yaw+dy,p:p};vy=0;vp=0;hint.style.opacity=0;
    var d=n.d;ficha.querySelector('img').src=K+d[3];ficha.querySelector('span').textContent=d[1];ficha.querySelector('b').textContent=d[0];ficha.querySelector('p').textContent=d[2];ficha.querySelector('a').href=d[4];
    ficha.classList.add('on');stage.classList.add('fic');ficha.querySelector('a').focus({preventScroll:true});
    if(window.umami)window.umami.track('portafolio-ficha',{trabajo:d[0].slice(0,60)});
  }
  function sinFicha(){ficha.classList.remove('on');stage.classList.remove('fic')}
  ficha.querySelector('button').onclick=sinFicha;

  /* filtros */
  ORDEN.forEach(function(c){
    var n=c==='Todos'?D.length:D.filter(function(d){return d[1]===c}).length;if(!n)return;
    var x=document.createElement('button');x.type='button';x.className='pf-chip';x.textContent=c+' · '+n;x.setAttribute('aria-pressed',c===cat);
    x.onclick=function(){cat=c;chips.querySelectorAll('.pf-chip').forEach(function(y){y.setAttribute('aria-pressed',y===x)});sinFicha();repartir();vy=.03;lista()};
    chips.appendChild(x);
  });

  /* lista */
  function lista(){
    var L=D.filter(function(d){return cat==='Todos'||d[1]===cat});
    grid.innerHTML=L.map(function(d){return '<a class="pf-card" href="'+esc(d[4])+'" target="_blank" rel="noopener"><img src="'+K+esc(d[3])+'" alt="" loading="lazy" decoding="async"><div><span>'+esc(d[1])+'</span><b>'+esc(d[0])+'</b><p>'+esc(d[2])+'</p></div></a>'}).join('');
  }
  var bv=o.querySelector('.pf-vista');
  bv.onclick=function(){var l=!o.classList.contains('lista');o.classList.toggle('lista',l);bv.textContent=l?'Ver en 3D':'Ver lista';bv.setAttribute('aria-pressed',l);sinFicha()};

  /* abrir / cerrar */
  var antes=null;
  function abrir(){
    if(abierto)return;abierto=true;antes=document.activeElement;
    o.classList.add('on');document.documentElement.classList.add('pf-lock');
    medir();
    if(!grid.children.length){lista();repartir();N.forEach(function(n){n.x=n.y=n.z=0;n.a=0});radioV=.1;vy=QUIETO?0:.06}
    if(!raf)raf=requestAnimationFrame(cuadro);
    hint.style.opacity=1;
    o.querySelector('.pf-x').focus({preventScroll:true});
    if(location.hash!=='#portafolio')history.replaceState(null,'','#portafolio');
    if(window.umami)window.umami.track('portafolio-flotante');
  }
  function cerrar(){
    abierto=false;o.classList.remove('on');document.documentElement.classList.remove('pf-lock');sinFicha();
    cancelAnimationFrame(raf);raf=0;
    if(location.hash==='#portafolio')history.replaceState(null,'',location.pathname+location.search);
    if(antes&&antes.focus)antes.focus({preventScroll:true});
  }
  b.onclick=abrir;o.querySelector('.pf-x').onclick=cerrar;
  window.addEventListener('resize',function(){if(abierto)medir()});
  document.addEventListener('visibilitychange',function(){if(!abierto)return;if(document.hidden){cancelAnimationFrame(raf);raf=0}else if(!raf)raf=requestAnimationFrame(cuadro)});
  document.addEventListener('keydown',function(e){
    if(!abierto)return;
    if(e.key==='Escape'){if(ficha.classList.contains('on'))sinFicha();else cerrar()}
    if(e.key==='Tab'){var f=[].filter.call(o.querySelectorAll('button,a[href]'),function(x){return x.tabIndex>=0&&x.offsetParent!==null}),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
  });
  document.querySelectorAll('a[href="#portafolio"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();abrir()})});
  if(location.hash==='#portafolio')abrir();
})();
