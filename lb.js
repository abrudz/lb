;(_=>{
let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
,tcs='<-←xx×:-÷*o⍟[-⌹oo○ff⌈FF⌈ll⌊LL⌊tt⊥TT⊤-|⊣|-⊢~~≈=/≠<=≤>=≥==≡=-≢vv∨^^∧^~⍲v~⍱^|↑v|↓<<⊂>>⊃[|⌷A|⍋V|⍒ii⍳ee∊e-⍷'+
'uu∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴o|⌽o-⊖o\\⍉..¨~:⍨*:⍣o.∘[\'⍞[]⎕[:⍠[=⌸ot⍎oT⍕<>⋄on⍝aa⍺ww⍵a-⍶w-⍹VV∇--¯88∞0~⍬V~⍫//↗[/⍁'
,lbs=['←assign',' ','+conjugate\nplus','-negate\nminus','×direction\ntimes','÷reciprocal\ndivide','*exponential\npower','⍟natural logarithm\logarithm',
'⌹matrix inverse\nmatrix divide','○pi times\ncircular','!factorial\nbinomial','?roll\ndeal',' ','|magnitude\nresidue',
'⌈ceiling\nmaximum','⌊floor\nminimum','⊥decode','⊤encode','⊣same\nleft','⊢same\nright',' ','=equal','≠not equal',
'≤less than or equal to','<less than','>greater than','≥greater than or equal to','≡depth\nmatch','≢tally\nnot match',' ','∨greatest common divisor/or',
'∧leat common multiple/and','⍲nand','⍱nor',' ','↑mix\ntake','↓split\ndrop','⊂enclose\npartioned enclose','⊃first\npick','⊆nest\npartition\n','⌷index','⍋grade up\ngrade up',
'⍒grade down\ngrade down','⍳index\nindex of','⍸where\ninterval index','∊enlist\nmembership','⍷find','∪unique\nunion','∩intersection','~not\nwithout',' ',
'/replicate\nReduce','\\expand\nScan','⌿replicate first\nReduce first','⍀expand first\nScan first',' ',',enlist\ncatenate/laminate',
'⍪table\ncatenate first/laminate','⍴shape\nreshape','⌽reverse\nrotate','⊖reverse first\nrotate first',
'⍉transpose\nreorder axes',' ','¨Each','⍨Selfie\nSwap','⍣Repeat','.nInner product\nOuter product (∘.)',
'∘Curry\nCompose\nOuter product (∘.)','⍤Rank','@At',' ','⍞stdin\nstderr','⎕eval\'ed stdin\nstdout','⍠Variant',
'⌸Index key\nKey\n','⌺Stencil','⌶I-beam','⍎execute','⍕format',' ','⋄statement separator','⍝comment','→abort\nbranch','⍵right argument','⍺left argument',
'∇recursion','&Spawn',' ','¯negative','⍬empty numeric vector']
,bqk=' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g,'')
,bqv='`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰⍵⍷⍷⍨↑↓⍸⍥⍣⊣⍺⌈⌊_⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g,'')
,tc={},bqc={} //tab completions and ` completions
for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
let lbh='';for(let i=0;i<lbs.length;i++){
  let ks=[]
  for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\n'+tcs[j]+' '+tcs[j+1]+' <tab>')
  for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\n` '+bqk[j])
  lbh+='<b title="'+he(lbs[i].slice(1))+(ks.length?'\n'+ks.join(''):'')+'">'+lbs[i][0]+'</b>'
}
let d=document,el=d.createElement('div');el.innerHTML=
`<div class=ngn_lb>${lbh}</div>
 <style>
  @font-face{font-family:"Apl385 Unicode";src:url(https://abrudz.github.io/lb/Apl385.woff)format('woff');}
 </style>
 <style>
  body{padding-top:24px!important}
  .ngn_lb{position:fixed;top:0;left:0;right:0;line-height:24px;background-color:buttonface;color:#000;
    cursor:default;font-family:"APL385 Unicode","DejaVu Sans Mono",monospace;
    border-bottom:solid buttonshadow 1px;z-index:2147483647}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:buttonshadow;color:#fff}
 </style>`
d.body.appendChild(el)
let t,lb=el.firstChild,bqm=0 //t:textarea, lb:language bar, bqm:backquote mode
let pd=x=>x.preventDefault()
lb.onmousedown=x=>{
  if(x.target.nodeName!=='B'||!t)return
  let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
  if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
  pd(x)
}
lb.onmousewheel=x=>{lb.scrollLeft-=x.wheelDelta/60}
lb.addEventListener('DOMMouseScroll',x=>{pd(x);lb.onmousewheel({wheelDelta:x.detail*-120})}) //firefox
let fk=x=>{
  let t=x.target
  if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;d.body.classList.remove('ngn_bq')}
          if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x)}}
  switch(x.ctrlKey+2*x.shiftKey+4*x.altKey+8*x.metaKey+100*x.which){
    case 19200:bqm=1;d.body.classList.add('ngn_bq');pd(x);break //`
    case   900:{let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)] //tab
                if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1} pd(x);break}
  }
}
let ff=x=>{
  let t0=x.target,nn=t0.nodeName.toLowerCase()
  if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
  t=t0;if(!t.ngn){t.ngn=1;t.addEventListener('keydown',fk)}
}
d.addEventListener('focus',ff,!0);let ae=d.activeElement;ae&&ff({type:'focus',target:ae})
})();
