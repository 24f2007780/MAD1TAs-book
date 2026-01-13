---
tags:
  - MAD1
  - W3
date: 2025-04-24 14:25
syllabus: 
---

- ✅✅ [Builtin-filter](https://jinja.palletsprojects.com/en/stable/templates/#list-of-builtin-filters)

## NEW COMMIT CHANGE

- **Model:** Application obj
- **View**: any screen **representation** useful to another entitiy (HTML/JSON/XML/img)
	- User interaction: keyboard, mouse, voice, custom buttons (devices, hardware constraint, user agent contextual info may ❌ be in designer control)
	- User interface: screen, audio, vibration, motor
	- Static: google.com, Partly dynamic: Wikipedia, Mostly dynamic: Amazon,
- **Controller**: How user *interface* reacts to user *input
- Prototyping - wireframes, mockups
```mermaid
graph LR
1['User preferences & task needs analysis'] --> 2['wireframe prototype'] --> 3['user acceptance, usability, accessibility']
```

### [Usability Heuristics ](https://www.nngroup.com/articles/ten-usability-heuristics/)

[list2card]

- **Visibility of System Status:** Always keep users informed about what is happening through timely & clear feedback.
- **Match Between System & the Real World:** Use language, concepts, & conventions familiar to users; avoid jargon & follow real-world logic.
- **User Control & Freedom:** Provide easy ways for users to undo or exit unwanted actions, giving them a sense of control.
- **Consistency & Standards:** Follow platform & industry conventions so users don’t have to wonder if different words or actions mean the same thing.
- **Error Prevention:** Design to prevent errors before they occur, rather than just relying on good error messages.
- **Recognition Rather Than Recall:** Minimize memory load by making options, actions, & information visible & easily accessible.
- **Flexibility & Efficiency of Use:** Allow both novices & experts to use the system efficiently, offering shortcuts & customization for frequent users.
- **Aesthetic & Minimalist Design:** Keep interfaces simple & uncluttered, showing only relevant information & elements.
- **Help Users Recognize, Diagnose, & Recover from Errors:** Use plain language in error messages, clearly indicate problems, & suggest solutions.
- **Help & Documentation:** Provide easy-to-search, concise help & documentation focused on user tasks, available when needed.

#### PyHTML
```python
import pyhtml as h
t = h.html(
	h.head(
		h.title('Test Page')
	), 
	h.body(
		h.h1('This is a title'),
		h.div('This is some text'),
		h.div(h.h2('inside title'), h.p('some text in a paragraph.'))
		)
	)
)
print(t.render())

def f_table(ctx):
	return (tr(
	td(cell) for cell in row
	) for row in ctx['table'])
```

#### jinja template
```python
from jinja2 import Template

t = Template('$name is the $job of $company')
s = t.substitute(name='Tim Cook', 
job='CEO', company='Apple Inc.')
print(s)
t = Template('Hello {{ something }}') #{{ variable }}
print(t.render(something='World'))

t = Template('My favorite numbers: {% for n in range(1,10) %}{{n}}''{% endfor %}')
print(t.render())
```

### Accessibility
[list2card]
- ##### perceivable
	- Non-text/Multimedia control → **<span style="color:rgb(98, 151, 208)">Alt</span> Text/Caption**
	- presented in different ways, ❌ loose meaning ✅ <span style="color:rgb(98, 151, 208)">assistive</span> tech
	- easier to **see & hear** content (<span style="color:rgb(98, 151, 208)">speech</span>-oriented browsers)
- ##### operable
	- All functionality available from <span style="color:rgb(98, 151, 208)">keyboard</span>, easier to use inputs other than ⌨️
	- enough time to read & use content
	- ❌ cause <span style="color:rgb(98, 151, 208)">seizures</span>/physical reactions
	- Help users <span style="color:rgb(98, 151, 208)">navigate</span> & find content.
	
- ##### understandable
	- text <span style="color:rgb(98, 151, 208)">readable understandable</span>
	- Content appear & operate in <span style="color:rgb(98, 151, 208)">predictable</span> ways
	- Help users avoid & ✅ <span style="color:rgb(98, 151, 208)">mistakes</span>
	
- ##### robust
	- Max <span style="color:rgb(98, 151, 208)">compatibility</span> for future user tools.

[Inspect Developer Tools](https://youtu.be/Pf2z_Ue73qE?si=XAul5yx0EI6pAZWH) 
`console.table(array)`

