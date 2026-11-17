---
title: Ipadala ang massing sa BimCraft
summary: Ipasa ang push/pull massing sa BimCraft bilang massing option, na may mga palapag, footprint, gross floor area at volume na kinukuwenta mula sa bawat solid.
keywords: massing, mass, concept, options, bimcraft, ifc, bim, push pull, palapag, storeys, gross floor area, footprint, volume, ipadala, ipasa, building mass, stage 2
from: 73c51f3f
---

## Ang gagawin mo

Gawing massing option na naiintindihan ng BimCraft ang mga block na minodelo mo gamit ang push/pull, para magpatuloy ang konsepto bilang building model.

## Bago ka magsimula

Gawing **group** o **component** ang bawat mass at pangalanan ito. Bawat isa ay nagiging isang option. Hindi ipinapadala ang maluwag na geometry.

## Ipadala ito

1. Piliin ang mga group na ipapadala. Kapag walang napili, lahat ng top-level na group at component ay ipapadala.
2. Piliin ang {{ui:Export}}, saka ang {{ui:Massing to BimCraft…}}.
3. I-type ang {{ui:Name of the option set}} at ang {{ui:Floor height}}.
4. Suriin ang listahan: ang palapag, footprint, gross floor area at volume ng bawat option.
5. Piliin ang **Ipadala sa BimCraft** para buksan ang BimCraft sa bagong tab kasama ang mga option, o ang {{ui:Save as IFC}} para i-download ang file at ikaw mismo ang magbukas nito doon.

Sa BimCraft, nakalista ang mga option sa ilalim ng "Massing options in the model", kung saan ang isa ay maaaring gawing kasalukuyang option at palawakin bilang mga dingding at sahig.

## Paano nagiging mass ang isang solid

- **Ang mga palapag** ay taas ng solid na hinati sa taas ng palapag, binilog, at at least isa. Pantay na hinahati ng mga palapag ang taas ng solid, kaya ang 10 m na block na may 3 m na palapag ay may 3 palapag na 3.33 m bawat isa.
- **Ang lawak ng palapag** ay ang lawak ng sariling pahalang na section ng solid sa antas ng palapag na iyon. Ang block na umuurong ay may mas maliliit na itaas na palapag, at ang gross floor area ay ang kabuuan ng mga ito.
- **Ang footprint** ay ang outline ng section sa itaas lamang ng base ng solid.
- **Ang volume** ay sa mismong solid.

Sa IFC file, bawat option ay isang building element proxy (ang footprint na itinaas hanggang taas ng solid) na may isang space bawat palapag na nagdadala ng gross area ng palapag. Iisa ang building para sa lahat ng option, na may kasing dami ng palapag gaya ng pinakamataas na option.

## Pinasimpleng hugis

Ang simpleng tuwid na block ay naipapasa nang eksakto gaya ng minodelo. Ang iba pa ay ipinapadala rin, at sinasabi ng listahan kung bakit pinasimple ang hugis nito:

- **Hindi lahat ng palapag nito ay kasing laki ng base nito** (umuurong o dumadausdos ito): ang mass sa BimCraft ay ang outline ng base na itinaas hanggang buong taas, pero ang mga lawak ng palapag at volume ay sa mismong solid.
- **Hindi sarado ang solid**: ang mga palapag na hindi maisasara ang section ay hindi sinusukat at bilang wala. Isara ang solid ({{ui:Entity info}} ay nagsasabing "Solid: Yes") para sa buong figures.
- **May higit sa isang outline ang base nito**: ang pinakamalaki ang ginagamit bilang footprint.

## Mabuting malaman

- Ang {{ui:IFC for BimCraft (.ifc)}} ay ibang export: nagpapadala ito ng hugis at pangalan lamang, walang palapag o lawak.
- Walangina-upload. Ibinibigay ang file sa BimCraft tab sa computer na ito.
