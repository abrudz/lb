; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }, he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
		, tcs = ''
		, lbs = ['+Conjugate\nAdd', '-Negate\nSubtract', '×Sign\nMultiply', '÷Reciprocal\nDivide', '⋆Exponential\nPower', '√Square Root\nRoot', '⌊Floor\nMinimum', '⌈Ceiling\nMaximum', '∧Sort Up\nAnd', '∨Sort Down\nOr', '¬Not\nSpan', '|Absolute Value\nModulus', '≤Less Than or Equal to', '<Enclose\nLess Than', '>Merge\nGreater Than', '≥Greater Than or Equal to', '=Rank\nEquals', '≠Length\nNot Equals', '≡Depth\nMatch', '≢Shape\nNot Match', '⊣Identity\nLeft', '⊢Identity\nRight', '⥊Deshape\nReshape', '∾Join\nJoin to', '≍Solo\nCouple', '⋈Enlist\nPair', '↑Prefixes\nTake', '↓Suffixes\nDrop', '↕Range\nWindows', '«Shift Before', '»Shift After', '⌽Reverse\nRotate', '⍉Transpose\nReorder axes', '/Indices\nReplicate', '⍋Grade Up\nBins Up', '⍒Grade Down\nBins Down', '⊏First Cell\nSelect', '⊑First\nPick', '⊐Index of', '⊒Occurrence Count\nProgressive Index of', '∊Unique Mask\nMember of', '⍷Deduplicate\nFind', '⊔Group Indices\nGroup', '!Assert\nAssert with message', ' ', '˙Constant', '˜Self/Swap', '∘Atop', '○Over', '⊸Before/Bind', '⟜After/Bind', '⌾Under', '⊘Valences', '◶Choose', '⎉Rank', '˘Cells', '⚇Depth', '¨Each', '⌜Table', '⍟Repeat', '⁼Undo', '´Fold', '˝Insert', '`Scan', ' ', '←Define', '⇐Export', '↩Change', '→Return', '⋄Separator', ',Separator', '(Begin expression', ')End expression', '{Begin block', '}End block', '⟨Begin list', '⟩End list', '‿Strand', ' ', '·Nothing', '•System', '𝕨Left argument', '𝕎Left argument (as function)', '𝕩Right argument', '𝕏Right argument (as function)', '𝕗Modifier left operand (as subject)', '𝔽Modifier left operand', '𝕘2-modifier right operand (as subject)', '𝔾2-modifier right operand', '𝕤Current function (as subject)', '𝕊Current function', '𝕣Current modifier', ' ', '¯Minus', 'πPi', '∞Infinity', '@Null character', '#Comment']
		, bqk = Array.from('`123456890-=~!@#$%^&*()_+qwertuiop[]QWERTIOP{}asdfghjkl;ASFGHKL:"zxcvbm,./ZXVBM<>? \'')
		, bqv = Array.from('˜˘¨⁼⌜´˝∞¯•÷×¬⎉⚇⍟◶⊘⎊⍎⍕⟨⟩√⋆⌽𝕨∊↑∧⊔⊏⊐π←→↙𝕎⍷𝕣⍋⊑⊒⍳⊣⊢⍉𝕤↕𝕗𝕘⊸∘○⟜⋄↖𝕊𝔽𝔾«⌾»·˙⥊𝕩↓∨⌊≡∾≍≠⋈𝕏⍒⌈≢≤≥⇐‿↩')
		, tc = {}, bqc = {} //tab completions and ` completions
	for (let i = 0; i < bqk.length; i++)bqc[bqk[i]] = bqv[i]
	for (let i = 0; i < tcs.length; i += 3)tc[tcs[i] + tcs[i + 1]] = tcs[i + 2]
	for (let i = 0; i < tcs.length; i += 3) { let k = tcs[i + 1] + tcs[i]; tc[k] = tc[k] || tcs[i + 2] }
	let lbh = ''; for (let i = 0; i < lbs.length; i++) {
		let [k, ...v] = [...lbs[i]]; v = v.join('');
		let ks = []
		for (let j = 0; j < tcs.length; j += 3)if (k === tcs[j + 2]) ks.push('\n' + tcs[j] + ' ' + tcs[j + 1] + ' <tab>')
		for (let j = 0; j < bqk.length; j++)if (k === bqv[j]) ks.push('\n` ' + bqk[j])
		lbh += '<b title="' + he(v + (ks.length ? '\n' + ks.join('') : '')) + '">' + k + '</b>'
	}
	let d = document, el = d.createElement('div'); el.innerHTML =
		`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>@font-face{font-family:"DejaVu Sans Mono";src:local("DejaVu Sans Mono"),url(DejaVuBQNSansMono.ttf)format('ttf');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"DejaVu Sans Mono",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
	d.body.appendChild(el)
	let t, ts = [], lb = el.firstChild, bqm = 0 //t:textarea or input, lb:language bar, bqm:backquote mode
	let pd = x => x.preventDefault()
	let ev = (x, t, f, c) => x.addEventListener(t, f, c)
	ev(lb, 'mousedown', x => {
		if (x.target.classList.contains('ngn_x')) { lb.hidden = 1; upd(); pd(x); return }
		if (x.target.nodeName === 'B' && t) {
			let i = t.selectionStart, j = t.selectionEnd, v = t.value, s = x.target.textContent
			if (i != null && j != null) { t.value = v.slice(0, i) + s + v.slice(j); t.selectionStart = t.selectionEnd = i + s.length }
			pd(x); return
		}
	})
	let fk = x => {
		let t = x.target
		if (bqm) {
			let i = t.selectionStart, v = t.value, c = bqc[x.key]; if (x.which > 31) { bqm = 0; d.body.classList.remove('ngn_bq') }
			if (c) { t.value = v.slice(0, i) + c + v.slice(i); t.selectionStart = t.selectionEnd = i + c.length; pd(x); return !1 }
		}
		else if (!x.ctrlKey && !x.shiftKey && !x.altKey && !x.metaKey) {
			if ("\\½²^º§ùµ°".indexOf(x.key) > -1) {
				bqm = 1; d.body.classList.add('ngn_bq'); pd(x); // ` or other trigger symbol pressed, wait for next key
			} else if (x.key == "Tab") {
				let i = t.selectionStart, v = t.value, c = tc[v.slice(i - 2, i)]
				if (c) { t.value = v.slice(0, i - 2) + c + v.slice(i); t.selectionStart = t.selectionEnd = i - 1; pd(x) }
			}
		}
	}
	let ff = x => {
		let t0 = x.target, nn = t0.nodeName.toLowerCase()
		if (nn !== 'textarea' && (nn !== 'input' || t0.type !== 'text' && t0.type !== 'search')) return
		t = t0; if (!t.ngn) { t.ngn = 1; ts.push(t); ev(t, 'keydown', fk) }
	}
	let upd = _ => { d.body.style.marginTop = lb.clientHeight + 'px' }
	upd(); ev(window, 'resize', upd)
	ev(d, 'focus', ff, !0); let ae = d.activeElement; ae && ff({ type: 'focus', target: ae })
})();
