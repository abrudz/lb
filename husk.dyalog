 (tcs lbs)←Build commands;ins;table;nums;n
⍝ ⍵ is select, copy and paste from https://github.com/barbuz/Husk/wiki/Commands
 n←⎕UCS 10 ⍝ newline
 commands↓⍨←1                                ⍝ remove header
 commands⌿⍨←''∘≢¨commands[;1]                ⍝ remove non-symbol commands
 commands[;2]~←' '                           ⍝ trim
 commands[;2]←{×≢⍵:3↑⍵,'.' ⋄ ⍵}¨commands[;2] ⍝ force length-3 tab shortcuts

 commands⌿⍨←~commands[;1]≡¨⊂'0-9 ' ⍝ remove digits' row

 nums←⍪'Nu' 'On' 'Tw' 'Th' 'Fo' 'Fi' 'Si' 'Se' 'Ei' 'Ni' ⍝ digit names

 ins←commands[;1]⍳⊂'⁰-⁹ '                                ⍝ find superscripts
 table←'⁰¹²³⁴⁵⁶⁷⁸⁹',nums,⍤1⊢¯2 0 ¯1↓¨commands[ins;3 4 5] ⍝ construct table
 commands←(¯1↓ins↑commands)⍪table⍪ins↓commands           ⍝ insert

 ins←commands[;1]⍳⊂'₀-₉ '                                      ⍝ find subscripts
 table←'₀₁₂₃₄₅₆₇₈₉',(819⌶nums),⍤1⊢¯2 0 ¯1↓¨commands[ins;3 4 5] ⍝ construct table
 commands←(¯1↓ins↑commands)⍪table⍪ins↓commands                 ⍝ insert

 commands[;1]⍴⍨←⊂⍬ ⍝ scalar symbols

 lbs←,/commands[;1 1],n,¨commands[;3 4 5] ⍝ construct tips
 tcs←∊commands[;2 1]⌿⍨×≢¨commands[;2]     ⍝ construct tab completions
