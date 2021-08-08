 (tcs lbs)←pairs Build elements;n
⍝ pairs as vector of charvecs from https://gist.github.com/Lyxal/369fafe6097b6b1610e3a700b172ed28
⍝ elements as vector of charvecs from https://github.com/Vyxal/Vyxal/blob/master/docs/elements.txt
 n←⎕UCS 10
 elements←(⊢⊂⍨' '≠⊃¨)elements
 elements/⍨←' '=2⊃∘∊¨elements
 elements←'(^\S) ' ' = ([^#]*[^# ])'⎕S'\1'¨elements
 elements↓⍨←¯1
 elements,←⊂''
 elements,←⊂'k' 'constants'
 elements,←⊂'∆' 'math functions'
 elements,←⊂'ø' 'String functions'
 elements,←⊂'Þ' 'Misc. functions'
 elements,←⊂'¨' 'Misc. functions'

 lbs←(⊃,1↓∘∊n,¨⊢)¨elements

 tcs←(∊pairs)~⎕UCS 9 32
