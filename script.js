const P=[['index.html','Beranda'],['profil.html','Profil'],['projek.html','Projek'],['keahlian.html','Keahlian']];
const cur=location.pathname.split('/').pop()||'index.html';
const nav=document.createElement('header');nav.className='bar';
nav.innerHTML='<a class="logo" href="index.html">✦ Agustin</a>'+P.map(p=>`<a class="l ${p[0]==cur?'on':''}" href="${p[0]}">${p[1]}</a>`).join('')+'<span class="dots" aria-label="Pilih tema warna"><button style="background:#e9e1fb" data-t="lavender" aria-label="Lavender"></button><button style="background:#dcf5ea" data-t="mint" aria-label="Mint"></button><button style="background:#fde3ea" data-t="peach" aria-label="Peach"></button></span>';
document.body.prepend(nav);
const f=document.createElement('footer');
f.innerHTML='Terhubung dengan saya: <a href="mailto:agustinriski0608@gmail.com">Email</a><a href="https://www.linkedin.com/in/agustin-riski-rahmania-b43626446">LinkedIn</a><a href="https://github.com/agustinriski0608-gif">GitHub</a><p>© 2026 Agustin Riski Rahmania · Dibuat untuk tugas Literasi Digital</p>';
document.body.append(f);
function theme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('t',t)}catch(e){}}
try{theme(localStorage.getItem('t')||'lavender')}catch(e){}
nav.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>theme(b.dataset.t));
['✦','☁','✧','✦'].forEach((s,i)=>{const e=document.createElement('span');e.className='sp';e.textContent=s;e.style.cssText=`left:${8+i*27}%;top:${20+(i*23)%60}%;font-size:${22+i*6}px;animation-delay:${i}s`;e.setAttribute('aria-hidden','true');document.body.append(e)});
document.querySelectorAll('.flip').forEach(c=>c.onclick=()=>c.classList.toggle('on'));
const tb=document.querySelectorAll('.tabs button');
tb.forEach(b=>b.onclick=()=>{tb.forEach(x=>x.classList.toggle('on',x==b));document.querySelectorAll('[data-cat]').forEach(e=>e.classList.toggle('hide',b.dataset.k!='all'&&e.dataset.cat!=b.dataset.k))});
const tp=document.getElementById('top'),ts=document.getElementById('toast');
if(tp){addEventListener('scroll',()=>tp.classList.toggle('on',scrollY>400));tp.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
const cp=document.getElementById('cp');
if(cp)cp.onclick=()=>{const m='agustinriski0608@gmail.com';const ok=()=>{ts.textContent='Email tersalin ✦';ts.classList.add('on');setTimeout(()=>ts.classList.remove('on'),2000)};
const fb=()=>{const t=document.createElement('textarea');t.value=m;document.body.append(t);t.select();try{document.execCommand('copy')}catch(e){}t.remove();ok()};
try{navigator.clipboard.writeText(m).then(ok,fb)}catch(e){fb()}};
