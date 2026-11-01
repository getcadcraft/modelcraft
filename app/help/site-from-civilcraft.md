---
title: Take a site from CivilCraft
summary: Open the address-to-site file CivilCraft makes and add the buildings and the parcel round it as masses and a site line, only the ones you tick.
section: tasks
order: 101
keywords: site, civilcraft, address, parcel, neighbouring buildings, masses, context, ccsite, open data, openstreetmap
---

CivilCraft can look up an address and save what the open data sources know round it: neighbouring buildings, the parcel, and flood, zoning and soil outlines. ModelCraft takes that file as suggestions. Nothing is added until you say so.

## Bring the file in

1. In CivilCraft, send the site to ModelCraft, or save the file (it ends in `.ccsite.json`).
2. In ModelCraft, open or drop the file. A list opens with a tick box for each building and for the parcel.
3. Type a height for the buildings the source gave none for. A line beside each says where its height came from: its number of levels at 3 m each, or the height you typed.
4. Press {{ui:Add the ticked ones}}.

The ticked buildings become extruded masses in one component, and the parcel becomes a line round the site. All of it is one undo step. The address point sits at the origin, in metres east and north of it.

Flood, zoning and soil outlines are listed for information only; they are not drawn.

The data comes from open sources and carries its attribution at the bottom of the list. Heights that were not given are assumptions, so check them before you rely on them.
