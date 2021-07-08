using REPL

lbs = String[]
tc = Tuple{String,String}[]
for (a,b) in REPL.REPLCompletions.latex_symbols
	push!(tc, (a[2:end],b))
	bs=Symbol(b)
	if isdefined(Main,bs)
		be=string(eval(bs))
		push!(lbs, b^2*"\n$be"^(be≠b))
	end
end

lbs = sort(unique(lbs))
tc = sort(tc, by=x->(length(x[1]),x))

lbs = '['*join(repr.(lbs),',')*']'
tc = '{'*join(tc.|>x->join(repr.(x),':'),',')*'}'

println(lbs)
println(tc)