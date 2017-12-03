 all←Build(commands nice_names);symbols;n
⍝ ⍵[1] is https://github.com/Mego/Seriously/blob/master/docs/commands.txt
⍝ ⍵[2] is https://github.com/Mego/Seriously/blob/master/docs/nice_names.txt
 n←⎕UCS 10 ⍝ newline

 nice_names↑⍨←256                        ⍝ append missing
 nice_names←(⊂'SYNTAX')@(0=≢¨)nice_names ⍝ explain blanks

 commands←256↑commands        ⍝ remove comments
 commands↓¨⍨←¯2+commands⍳¨')' ⍝ symbol is last in parens

 all←nice_names{⍵[1 1],n,⍺,n,3↓⍵}¨commands ⍝ construct
 all/⍨←3<≢¨commands~¨' '                   ⍝ only those with meaning
