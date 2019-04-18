;(_=>{
let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
,tcs="/\\∧\\/∨<=≤>=≥E(∈E)∋(=⊆)=⊇_|⊥<>↔<^↖(<⟨)>⟩<|↰o<↺o>↻v|√|^⌉|_⌋[[⟦]]⟧|Nℕ|Zℤ|Rℝ<v↙/=≠==≡\\+¬//÷x*×_0₀_1₁_2₂_3₃_4₄_5₅_6₆_7₇_8₈_9₉^0⁰^1¹^2²^3³^4⁴^5⁵^6⁶^7⁷^8⁸^9⁹^aᵃ^bᵇ^cᶜ^dᵈ^eᵉ^fᶠ^gᵍ^hʰ^iⁱ^jʲ^kᵏ^lˡ^mᵐ^nⁿ^oᵒ^pᵖ^rʳ^sˢ^tᵗ^uᵘ^vᵛ^wʷ^xˣ^yʸ^zᶻ_(₍_)₎^(⁽^)⁾.aạ.bḅ.dḍ.eẹ.hḥ.iị.kḳ.lḷ.mṃ.nṇ.oọ.rṛ.sṣ.tṭ.uụ.vṿ.wẉ.yỵ.zẓa.ȧb.ḃc.ċd.ḋe.ėf.ḟg.ġh.ḣl.ŀm.ṁn.ṅo.ȯp.ṗr.ṙs.ṡt.ṫw.ẇx.ẋy.ẏz.ż.AẠ.BḄ.DḌ.EẸ.HḤ.IỊ.KḲ.LḶ.MṂ.NṆ.OỌ.RṚ.SṢ.TṬ.UỤ.VṾ.WẈ.YỴ.ZẒA.ȦB.ḂC.ĊD.ḊE.ĖF.ḞG.ĠH.ḢI.İL.ĿM.ṀN.ṄO.ȮP.ṖR.ṘS.ṠT.ṪW.ẆX.ẊY.ẎZ.Żpiπ|oφ^=≜"
,lbs=["∧","∨","≤","≥","∈","∋","⊆","⊇","⊥","\n","↔","↖","⟨","⟩","↰","↺","↻","√","⌉","⌋","⟦","⟧","ℕ","ℤ","ℝ","↙","≠","≡","¬","÷","×"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","\|","}","~","₀","₁","₂","₃","₄","₅","₆","₇","₈","₉","⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","ᵃ","ᵇ","ᶜ","ᵈ","ᵉ","ᶠ","ᵍ","ʰ","ⁱ","ʲ","ᵏ","ˡ","ᵐ","ⁿ","ᵒ","ᵖ","ʳ","ˢ","ᵗ","ᵘ","ᵛ","ʷ","ˣ","ʸ","ᶻ","₍","₎","⁽","⁾","ạ","ḅ","ḍ","ẹ","ḥ","ị","ḳ","ḷ","ṃ","ṇ","ọ","ṛ","ṣ","ṭ","ụ","ṿ","ẉ","ỵ","ẓ","ȧ","ḃ","ċ","ḋ","ė","ḟ","ġ","ḣ","ṁ","ṅ","ȯ","ṗ","ṙ","ṡ","ṫ","ẇ","ẋ","ẏ","ż","Ạ","Ḅ","Ḍ","Ẹ","Ḥ","Ị","Ḳ","Ḷ","Ṃ","Ṇ","Ọ","Ṛ","Ṣ","Ṭ","Ụ","Ṿ","Ẉ","Ỵ","Ẓ","Ȧ","Ḃ","Ċ","Ḋ","Ė","Ḟ","Ġ","Ḣ","İ","Ṁ","Ṅ","Ȯ","Ṗ","Ṙ","Ṡ","Ṫ","Ẇ","Ẋ","Ẏ","Ż","π","φ","≜"]
,bqk=''.replace(/∙/g,'')
,bqv=''.replace(/∙/g,'')
,tc={},bqc={} //tab completions and ` completions
for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
let lbh='';for(let i=0;i<lbs.length;i++){
  let ks=[]
  for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\n'+tcs[j]+' '+tcs[j+1]+' <tab>')
  for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\n` '+bqk[j])
  lbh+='<b title="'+he(lbs[i].slice(1)+(ks.length?'\n'+ks.join(''):''))+'">'+lbs[i][0]+'</b>'
}
let d=document,el=d.createElement('div');el.innerHTML=
`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>@font-face{font-family:"DVSM";src:local("DejaVu Sans Mono"),url(//abrudz.github.io/lb/DejaVuSansMono.ttf)format('truetype');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"DVSM",monospace;border-bottom:solid #999 1px;padding:2px 2px 2px 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal;display:inline-block}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
d.body.appendChild(el)
let t,ts=[],lb=el.firstChild,bqm=0 //t:textarea or input, lb:language bar, bqm:backquote mode
let pd=x=>x.preventDefault()
let ev=(x,t,f,c)=>x.addEventListener(t,f,c)
ev(lb,'mousedown',x=>{
  if(x.target.classList.contains('ngn_x')){lb.hidden=1;upd();pd(x);return}
  if(x.target.nodeName==='B'&&t){
    let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
    if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
    pd(x);return
  }
})
let fk=x=>{
  let t=x.target
  if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;d.body.classList.remove('ngn_bq')}
          if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x);return!1}}
  switch(x.ctrlKey+2*x.shiftKey+4*x.altKey+8*x.metaKey+100*x.which){
    case   900:{let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)] //tab
                if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1;pd(x)}
                break}
  }
}
let ff=x=>{
  let t0=x.target,nn=t0.nodeName.toLowerCase()
  if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
  t=t0;if(!t.ngn){t.ngn=1;ts.push(t);ev(t,'keydown',fk)}
}
let upd=_=>{d.body.style.marginTop=lb.clientHeight+'px'}
upd();ev(window,'resize',upd)
ev(d,'focus',ff,!0);let ae=d.activeElement;ae&&ff({type:'focus',target:ae})
})();
