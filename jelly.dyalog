 (tcs lbs)←comp Build(atoms quicks syntax);i;atomsOut;type;t;now;duals;n;all;where;remaining;Tr;Split;dq;Format
⍝ ⍺ is https://gist.github.com/cairdcoinheringaahing/b24ab7802c5979ab9ce398fedb811795
⍝ ⍵ is https://github.com/DennisMitchell/jelly/wiki/Atoms ./Quicks ./Syntax
 t n←⎕UCS 9 10 ⍝ tab newline

 comp↓⍨←2 ⍝ drop header
 comp←'</?code>' '\\\|'⎕R(,¨'`|')⊢comp ⍝ normalise escaped backticks
 comp←↑'`(.+?)`'⎕S'\1'¨comp            ⍝ find composition result and parts
 comp←∊⌽comp                           ⍝ reverse and flatten

 Tr←'| `'≡3∘↑ ⍝ table row

 syntax/⍨←Tr¨syntax                                                                  ⍝ extract table lines
 syntax←'\<newline\>\` or \`' '\| \`' '\` \| ' '\| \`' '\`'⎕R'' '' '' '\n' ''¨syntax ⍝ undo backticks
 syntax←(⊃,'SYNTAX',n,1↓⊢)¨syntax                                                    ⍝ label syntax

 quicks/⍨←Tr¨quicks                                                                                                                                   ⍝ extract table lines
 quicks←'\| \`\` \` \`\` \| ' '\` \`\`' ' \`\` ' ' \| \`\` ' '\` \| ' '^\| \`' ' \| \`' '\`| ?\|'⎕R'`Quick\n' '`' '' '\n' 'Quick\n' '' '\n' ''¨quicks ⍝ undo backticks, label quicks
 dq←'Ð'=⊃¨quicks                                                                                                                                      ⍝ dual-byte quicks
 duals←dq/quicks
 quicks/⍨←~dq

 atoms←'\\\|' '\`\|' '`' '\*\*' ' ~ '⎕R'|'t'' '' '~'⊢atoms ⍝ undo backticks
 Split←''∘≢¨⊆⊢                                             ⍝ split on empties
 atoms←Split atoms
 atoms↓⍨←3         ⍝ remove intro
 atomsOut←⍬
 :For i :In ⍳≢atoms
     now←i⊃atoms
     type←'s\)?$'⎕R''⊃⌽' '(≠⊆⊢)⊃now ⍝ first line's last word (without paren or plural "s") is category
     now↓⍨←3                        ⍝ drop intro
     atomsOut,←t ⎕R(type,'\n')¨now  ⍝ construct
     atomsOut,←⊂''                  ⍝ add separator
 :EndFor
 atomsOut←Split atomsOut
 duals,⍨←⊃,/3↓atomsOut               ⍝ insert these into the dual-byters' list
 duals←2(↑,n,↓)¨duals                ⍝ construct those
 atomsOut←⊃,/(3↑atomsOut),¨⊂1⌷syntax ⍝ use spacer as separator

 all←atomsOut,quicks,syntax ⍝ combine the three lists
 Format←⊃,⊃,n,1↓⊢           ⍝ symbol twice,nl,rest
 all←Format¨all             ⍝ format tooltips

 remaining←⍬                      ⍝ find those that cannot be grouped with single-byters
 :For i :In ⍳≢duals
     where←(⊃¨all)⍳2⊃i⊃duals      ⍝ look-up
     :If where≤≢all               ⍝ if found
         (where⊃all),←n n,i⊃duals ⍝ foun
     :Else                        ⍝ if missing
         remaining,←⊂i⊃duals      ⍝ remember
     :EndIf
 :EndFor
 remaining←2(⊃,⊢)¨remaining      ⍝ put main char in front

 all/⍨←1+(⎕UCS ¯1+⎕UCS⊃¨all)∊⊃¨remaining                                         ⍝ duplicate follower
 all←remaining@(⍸2=/⊃¨all)⊢all                                                   ⍝ put remaining into first of each duplicated
 all←'\[(.+)\]\(.+\)'⎕R'\1'¨all                                                  ⍝ remove hyperlinks
 duals←∪⊃¨duals                                                                  ⍝ prefixes
 duals{⍺ ⍺ n,'SYNTAX',n,'Begins two-byte ',⍵,'.'}¨←((≢1↓duals)⍴⊂'atom'),⊂'Quick' ⍝ construct
 all,←(⊂Format⊃syntax),duals                                                     ⍝ format

 (tcs lbs)←comp all
