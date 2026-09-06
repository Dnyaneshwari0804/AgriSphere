const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
let toastTimer;
function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),3200); }
function go(page){ $$('.page').forEach(x=>x.classList.remove('active')); $$('.nav-link').forEach(x=>x.classList.toggle('active',x.dataset.page===page)); $('#'+page).classList.add('active'); $('#crumb').innerHTML=`Farmer workspace <span>/</span> ${page[0].toUpperCase()+page.slice(1)}`; window.scrollTo({top:0,behavior:'smooth'}); $('#sidebar').classList.remove('open'); }
$$('[data-page]').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.page)));
$$('[data-go]').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.go)));
$('#menuButton').onclick=()=>$('#sidebar').classList.toggle('open');
function openModal(id){ $('#modalBackdrop').classList.add('open'); $('#'+id).classList.add('open'); }
function closeModals(){ $('#modalBackdrop').classList.remove('open'); $$('.modal').forEach(x=>x.classList.remove('open')); }
['#createLot','#createLot2','#createLot3'].forEach(id=>$(id)?.addEventListener('click',()=>openModal('lotModal')));
$('#profileButton').onclick=()=>openModal('profileModal'); $('#modalBackdrop').onclick=closeModals; $$('.close').forEach(x=>x.onclick=closeModals);
$('#photoCapture').onclick=()=>toast('Camera opened — GPS & timestamp will be attached.');
$('#videoCapture').onclick=()=>toast('Recording started. Keep the crop in frame for 30 seconds.');
$('#gradeLot').onclick=()=>{closeModals();toast('AI grading complete: Grade A · 87% confidence · evidence verified.');};
$('#openPassport').onclick=()=>toast('Produce passport opened: image, GPS, timestamp and quality evidence are verified.');
$('#alertButton').onclick=()=>toast('Early alert: onion price forecast updated — hold signal remains active.');
$('#languageButton').onclick=()=>{ const el=$('#languageButton'); el.firstChild.textContent=el.textContent.includes('मराठी')?'English ':'मराठी '; toast('Language preference updated for this demo.'); };
$('#counterOffer').onclick=()=>toast('Counter composer opened — your break-even net price is ₹2,574/q.');
$('#rejectOffer').onclick=()=>toast('Offer marked for rejection. No deal record was created.');
$('#acceptOffer').onclick=()=>toast('Offer accepted. Agreement record and hash-chain event created.');
$('#verifyChain').onclick=()=>toast('Integrity verified — 3 linked records checked, no changes detected.');
$$('.role-option').forEach(x=>x.onclick=()=>{closeModals();toast(`Demo workspace switched to ${x.dataset.role}. Farmer data remains available in offline cache.`);});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
