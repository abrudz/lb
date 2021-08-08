 (tcs lbs)←pairs Build elements
⍝ pairs as vector of charvecs from https://gist.github.com/Lyxal/369fafe6097b6b1610e3a700b172ed28
⍝ elements as vector of charvecs from https://github.com/Vyxal/Vyxal/blob/master/docs/elements.txt
 elements←(⊢⊂⍨' '≠⊃¨)elements
 elements/⍨←~'<n' '<s'∊⍨2↑∘∊¨elements
 elements←'(^\S\S?) ' ' = ([^#]*[^# ])'⎕S'\1'¨elements
 lbs←(∊⊃,'\n'∘,¨)¨elements

 tcs←(∊pairs)~⎕UCS 9 10
