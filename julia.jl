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
tcf = first.(tc)
tcc = join(tcf) |> unique |> sort |> join |> x->replace(x, ["\$()*+-./?[\\]^{|}"...]=>x->'\\'*x) |> x-> "/\\\\([$x]+)\$/"
tcu = filter(i->!isnothing(match(r"^\^.$",i)), tcf) .|> last |> sort |> join |> x->replace(x, ["\$()*+-./?[\\]^{|}"...]=>x->'\\'*x) |> x-> "/\\\\\\^([$x]+)\$/"
tcl = filter(i->!isnothing(match(r"^_.$",i)), tcf)  .|> last |> sort |> join |> x->replace(x, ["\$()*+-./?[\\]^{|}"...]=>x->'\\'*x) |> x-> "/\\\\_([$x]+)\$/"

slbs = '['*join(repr.(lbs),',')*']'
stc = '{'*join(tc.|>x->join(repr.(x),':'),',')*'}'

out = """
, lbs = $slbs
, tc = $stc
, tcc = $tcc
, tcl = $tcl
, tcu = $tcu
"""
try 
	clipboard(out) 
catch
	print(out)
end
