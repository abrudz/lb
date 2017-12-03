 info←Build info;i;where;t;dual;prefixed;main
⍝ ⍵ is https://github.com/Adriandmen/05AB1E/blob/master/docs/info.txt
 t←⎕UCS 9 ⍝ tab

 info↓¨⍨←8×~'='∊¨info         ⍝ remove indents
 info←'  +'⎕R t⊢info          ⍝ convert multi-space to tab
 info(≠⊆⊣)¨←t                 ⍝ cut on tabs
 info/⍨←{(2≤≢⍵)∧1<≢∊1↓⍵}¨info ⍝ has content
 info←↓(⊢↓⍨2×'= '≡2∘↑)¨↑info  ⍝ drop spacing

 prefixed←'.ž'∊⍨⊃∘⊃¨info      ⍝ those with prefix

 dual←prefixed/info           ⍝ get the dual-byters
 dual←(⊃(⊣,t,⊢)/)¨dual        ⍝ construct tip snippet

 info/⍨←~prefixed               ⍝ get those without prefix
 info←{(⊃⊃⍵),⊃(⊣,t,⊢)/1↓⍵}¨info ⍝ construct tip
 info←'^(.)\t'⎕R'\1'⊢info       ⍝ remove tab after col 1

 main←2⊃¨dual                     ⍝ chars to sort by
 :For i :In ⍳≢info                ⍝ insert each one
     where←main⍳⊃⊃i⊃info          ⍝ find matching single-byter
     :If where≤≢main              ⍝ if there is
         (i⊃info),←t t,where⊃dual ⍝ append to existing tip
     :EndIf
 :EndFor

 info←info⊂⍨1,2≠/⊃¨info    ⍝ detect duplicates
 info←(⊃(⊣,t t,1↓⊢)/)¨info ⍝ merge them
 info,←'.ž',¨2↓¨1⌷dual     ⍝ append leftover duals
 info←'\t *$'⎕R''⊢info     ⍝ trim whitespace
 info←'\t'⎕R'\n'¨info      ⍝ convert tabs to newlines
