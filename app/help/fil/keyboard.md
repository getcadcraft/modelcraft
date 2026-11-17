---
title: Mga key at aksyon ng mouse
summary: Bawat keyboard shortcut, aksyon ng mouse, trackpad gesture at touch gesture sa ModelCraft, nakapangkat ayon sa ginagawa nila.
keywords: keyboard, shortcuts, keys, hotkeys, mouse, trackpad, touch, gestures, cheat sheet, ctrl, command, arrow keys
from: e2348957
---

Ito ang mga push-pull key, ang mga unang ginagamit ng ModelCraft. Para sa ibang istilo, tingnan ang [Modeler keys](topic:keyboard#modeler-keys) sa ibaba at ang [ModelCraft settings](topic:settings).

Gumagana ang mga shortcut kapag nakatutok ang 3D view o isang button sa toolbar. Kung kakatapos mo lang mag-type sa field ng panel o nagbago ng listahan sa {{ui:Style}}, mag-click muna sa 3D view, kung hindi mapupunta sa field na iyon ang mga key mo. Tingnan ang [Keys, mice and trackpads](common:keys) para sa kung paano isinusulat ang mga key sa bawat computer.

## Mga tool

| Key | Tool |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} measure |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Walang modifier key ang mga letra ng tool: ang {{key:Shift}} kasama ng letra ay walang epekto, maliban sa dalawa sa ibaba.

## Model at file

| Key | Ginagawa |
|---|---|
| {{key:G}} | Gumawa ng component mula sa napili |
| {{key:Shift+G}} | Gumawa ng group mula sa napili |
| {{key:Shift+Z}} | Zoom extents (ang buong model) |
| {{key:Mod+Z}} | I-undo |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | I-redo |
| {{key:Mod+S}} | I-save (dina-download ang `.modelcraft` file) |
| {{key:Mod+O}} | Magbukas ng model |
| {{key:Mod+A}} | Piliin ang lahat (sa loob ng bukas na group, kung may bukas) |
| {{key:Mod+C}} | Kopyahin ang napili |
| {{key:Mod+X}} | I-cut ang napili |
| {{key:Mod+V}} | I-paste: sumusunod ang kopya sa pointer, mag-click kung saan ito ilalagay |
| {{key:Mod+Shift+V}} | I-paste sa mismong lugar (kung saan ito kinopya) |
| {{key:Mod+D}} | Duplicate: gumagalaw ang kopya kasama ng pointer, mag-click para ibaba ito |
| {{key:Delete}} o {{key:Backspace}} | Burahin ang napili |
| {{key:PageDown}} / {{key:PageUp}} | Susunod / nakaraang scene |
| {{key:F1}} | Buksan o isara ang tulong na ito (gayundin ang {{ui:Help}} sa app bar; isinasara ito ng {{key:Esc}} sa loob ng tulong) |
| {{key:Ctrl+Shift+F}} | Screen mode: full screen, pagkatapos nakatagong bars, pagkatapos normal (Control din sa Mac) |

## Esc

Umuurong ng isang antas ang {{key:Esc}} sa bawat pindot:

1. Kinakansela ang ginagawa ng tool (linyang iginuguhit, push/pull, o paglipat). Babalik sa dati ang lahat.
2. Lumilipat sa {{ui:Select}}.
3. Tinatanggal ang pagkakapili.
4. Isinasara ang group na in-e-edit mo.

Itinitigil din nito ang pag-play ng mga scene. Sa value box, nililinis ng {{key:Esc}} ang tinype mo at bumabalik sa view.

## Habang gumagana ang isang tool

| Key | Ginagawa |
|---|---|
| Isang digit, o isa sa `. , - ' " [ < * /` | Nagsisimulang mag-type sa value box |
| {{key:Enter}} | Ginagamit ang tinype mo sa value box |
| {{key:Right}} | Nilo-lock sa red axis (pindutin ulit para i-unlock) |
| {{key:Left}} | Nilo-lock sa green axis |
| {{key:Up}} | Nilo-lock sa blue axis |
| {{key:Down}} | Nilo-lock na parallel sa huling gilid na dinaanan bago ang unang click |
| Pindutin nang tuloy-tuloy ang {{key:Shift}} | Hinahawakan ang direksyong sinusnapan, habang hawak |
| {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}} (Move) | Nagpapalit sa pagitan ng paglipat at pagkopya |

Gumagana ang arrow-key lock sa {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} at {{ui:Tape}} (kapag sumusukat mula sa punto), pagkatapos ng unang click. Palaging gumagalaw sa direksyon ng face ang {{ui:Push/pull}} at walang lock. Sa {{ui:Rotate}}, nagpapakita ng mensaheng "Locked" ang mga arrow key pagkatapos ng unang click pero hindi nito binabago ang pag-ikot.

## Arrow key sa ibang pagkakataon

Kapag walang tool na nasa gitna ng ginagawa, inililipat ng mga arrow key ang camera:

| Key | Ginagawa |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbit |
| {{key:Shift}} kasama ang arrow | Pan |

## Mouse

| Aksyon | Ginagawa |
|---|---|
| Click | Ginagamit ang kasalukuyang tool |
| Press, drag, release | Kapareho ng dalawang click (para sa mga drawing tool); box selection (para sa {{ui:Select}}); nagbubura habang dinadaanan (para sa {{ui:Eraser}}) |
| Double-click | {{ui:Select}}: face kasama ang mga gilid nito, gilid kasama ang mga face nito, nagbubukas ng group; ang walang lamang espasyo ay nagsasara ng group. {{ui:Push/pull}}: inuulit ang huling distansya |
| Triple-click | {{ui:Select}}: lahat ng konektado |
| {{key:Shift}} + click | {{ui:Select}}: papasok at palabas sa pagkakapili |
| {{key:Mod}} + click | {{ui:Select}}: dinadagdag sa pagkakapili |
| {{key:Shift}} + {{key:Mod}} + click | {{ui:Select}}: tinatanggal sa pagkakapili |
| Middle-button drag | Orbit, sa anumang tool |
| {{key:Shift}} + middle-button drag | Pan, sa anumang tool |
| Right-button drag | Pan, sa anumang tool |
| Wheel | Zoom patungo sa pointer |

Walang right-click menu.

## Trackpad

Ang ginagawa ng two-finger swipe ay nakadepende sa {{ui:Settings}} › {{ui:ModelCraft}} › Scrolling:

| Gesture | Trackpad (o kinalkula) | Mouse wheel |
|---|---|---|
| Two-finger swipe | Orbit | Zoom patungo sa pointer |
| {{key:Shift}} + two-finger swipe | Pan | Zoom |
| Pinch | Zoom patungo sa pointer | Zoom patungo sa pointer |
| Two-finger press and drag (secondary click held) | Pan | Pan |

Tingnan ang [Orbit, pan and zoom](topic:orbit-pan-zoom#on-a-trackpad) at [ModelCraft settings](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler keys

Kapag nakatakda ang {{ui:Settings}} › {{ui:ModelCraft}} › Controls sa istilong Modeler:

| Key | Ginagawa |
|---|---|
| {{key:W}} o {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (extrude) |
| {{key:T}} | {{ui:Tape}} measure |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Ilipat agad ang napili, mula sa pointer |
| {{key:R}} | I-rotate ang napili sa gitna nito (blue axis) |
| {{key:S}} | I-scale ang napili sa gitna nito |
| {{key:X}} / {{key:Y}} / {{key:Z}} habang gumagalaw o umiikot | Nilo-lock ang red / green / blue axis (pindutin ulit para i-unlock) |
| Click o {{key:Enter}} | Ibaba ito |
| {{key:Esc}} o right-click | Ibalik ito |
| {{key:Shift+D}} | I-duplicate at ilipat ang kopya |
| {{key:X}} o {{key:Delete}} | Burahin ang napili |
| {{key:A}} / {{key:Alt+A}} | Piliin lahat / walang piliin |
| {{key:Tab}} | Buksan ang napiling group o component; pindutin ulit para isara |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Gumawa ng group / gumawa ng component |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Front / right / top view ({{key:Mod}} para sa back / left / bottom) |
| Numpad {{key:5}} | Naka-on o naka-off ang perspective |
| Numpad {{key:.}} | Zoom sa napili |
| {{key:Home}} o {{key:Shift+C}} | Zoom extents |
| {{key:Shift+Tab}} | Naka-on o naka-off ang snapping |
| Middle-button drag / kasama ang {{key:Shift}} / kasama ang {{key:Mod}} | Orbit / pan / zoom |
| {{key:Alt}} + drag / {{key:Alt+Shift}} + drag | Orbit / pan (hindi kailangan ng middle button) |

Nananatili ang mga key ng copy, paste, undo, save at open na nakalista sa itaas. Pareho ang gawi ng mga typed value, ng value box at ng {{ui:Push/pull}} sa dalawang istilo.

## Touch screen

| Gesture | Ginagawa |
|---|---|
| Tap | Isang click gamit ang kasalukuyang tool |
| Double-tap | Isang double-click |
| Press, drag, lift | Kapareho ng press, drag, release gamit ang mouse |
| Dalawang daliri: pinch | Zoom |
| Dalawang daliri: sabay na gumalaw | Pan (maaaring gawing Orbit sa Settings › ModelCraft › Touch screen) |
| Tatlong daliri: sabay na gumalaw | Orbit (Pan kapag dalawang daliri ang nag-o-orbit) |
| Hawakan nang hindi gumagalaw ang isang daliri | Tinatapos ang tool, gaya ng Enter; kapag walang ginagawa, i-drag para mag-orbit |
| Ikalawang daliri habang isang-daliring aksyon | Kinakansela ang aksyong iyon |
| {{ui:Orbit}} tool, pagkatapos i-drag ang isang daliri | Orbit |

Para mag-type ng value sa touch screen, i-tap ang value box sa ibaba, mag-type, at pindutin ang Enter (o Go) key ng keyboard.

## Nasaan ang Move

Nasa {{ui:Move}} tool ang Move, key na {{key:M}}: piliin kung ano ang ililipat, mag-click ng base point, pagkatapos ng pangalawang punto o mag-type ng distansya. Tingnan ang [Move, copy and make arrays](topic:move-copy).
