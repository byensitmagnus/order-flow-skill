---
name: byens-it-indkoeb
description: Klargør og prissammenlign DCS-/Proshop-kurve til Byens ITs WooCommerce-PC-ordrer, komponenter, RGB og opgraderinger. Dækker enkeltordrer og ordrebatches med ordrefordeling; aflever til Magnus' kontrol uden bestilling eller betaling.
---

# Byens IT indkøb

Lever ordrefordeling, passende komponenter og gemte leverandørkurve til kontrol. Aktuelt mandat styrer scope; skillen autoriserer ikke køb, betaling eller WooCommerce-ændringer.

## 1. Fastlæg behovet før research

- Brug Magnus' indloggede Chrome via computer-use og den aktuelle browserdokumentation. Genbrug faner; navngiv sessionen med ordreinterval.
- Ved batches: fastlæg ordreinterval/status og gennemgå alle relevante listesider. Registrér inkluderede/udeladte ordrer og bekræftede lager-PC'er; køb kun deres særskilte tilvalg. Første screenshot er ikke hele ordresættet. Kopiér ikke kundekontaktdata.
- Læs hver unik PC-specifikation én gang og hver ordres antal/variationer/tilvalg. Ordretilvalg vinder. Dæk CPU, køler, bundkort, RAM, GPU, SSD, kabinet, PSU og tilvalg. Ydelser giver kun indkøbsvarer ved konkret materialebehov. Licenser følger verificeret procedure eller markeres ikke indkøbt.
- Behold én arbejdsliste: ordre → krav/fast model → samlet behov → kandidat/model/EAN → pris/moms/lager/levering/kilde → leverandør og gemt antal. Aggregér fælles dele; et RAM-kit er én indkøbsenhed, men kan indeholde flere DIMM'er.
- SSD: beregn basis + opgradering. Én større disk kan dække samlet kapacitet, hvis en ekstra fysisk disk ikke kræves; dokumentér fortolkningen. Bevar lovet interface, hastighed og øvrige minimumskrav, også når modellen er fleksibel. En lavere pris autoriserer ikke en nedgradering.

## 2. Vælg og kontrollér kandidater

- Sammenlign DCS' erhvervspris med Proshop én gang pr. unik kandidat. Identiske varer matches på model/EAN; fleksible modeller vælges i den krævede kategori. Gem direkte produktlinks til genbrug.
- Billigste kompatible bundkort i angivet chipset er godkendt. Bevar socket, CPU-support, RAM og nødvendige porte; oplys den faktiske chipsetvariant, eksempelvis A620A.
- Kontrollér kandidaten før tilføjelse: producentens CPU-/BIOS-support, desktop UDIMM, M.2-format, GPU-/kølerplads og PSU-effekt/stik/kabler. Ved PCIe-Wi-Fi kontrolleres slotplacering mod GPU-tykkelse. Stikantal beviser ikke separate kabler; supportlisten beviser ikke leveret BIOS.
- DUTZO foretrækkes til RGB. Match serie, længde, antal og controller/fjernbetjening. Læs [leverandørspor](references/suppliers.md) ved RGB-valg eller kurvændringer; tilføj ikke splitter/ekstra controller uden behov.
- Bekræft pris, moms og tilstrækkeligt lager/levering på produktside eller kurv. Brug ikke søgeuddrag som slutbevis; tom søgning betyder kun »ikke fundet«. Nye varer matches med nye varer, ikke demo uden accept.
- Sammenlign ekskl. moms, inklusive ekstra fragt/gebyrer. Brug faktisk kurvmoms; blandede CPU-kurve kan have omvendt betalingspligt. Vælg deling ved nettobesparelse eller lagerfordel, uden et opfundet minimum. Undersøg tredje butik målrettet ved plausibel fordel; Compumail er samme CVR som DCS, ikke en uafhængig leverandør.

## 3. Gem kurvene uden dubletter

- Inspicér aktiv kurv. Brug dedikeret kurv med kort ordreinterval-navn; bevar andre kurve/uvedkommende varer.
- Tilføj samlet behov eller forskellen til allerede gemt antal. Brug leverandørnoternes antalskontroller. Læs bekræftet model/antal efter ændring og før navigation; ved timeout læses tilstanden før gentagelse. Fjern kun egne erstattede varer.
- Stop før bestilling, betaling, bindende accept og WooCommerce Capture/Opdatér.

## 4. Afstem og aflever

- Afstem arbejdsliste mod gemte kurvlinjer én gang efter sidste ændring: hver ordre dækket, modeller/antal/kapacitet/RGB korrekte, ingen dubletter. Kontrollér totaler, faktisk moms og kendt/ukendt fragt.
- Gem dateret ordrefordeling, prisvalg/kilder og kurvbevis i opgavemappen. Oplys uafklarede leveringsdatoer, samleforsendelse, modelafvigelser og manglende kompatibilitets-/licensbevis. Skeln mellem kurv klar til kontrol og PC fuldt verificeret til bygning.
- Gem og embed slutbilleder med varer/beløb; brug DCS-udskrift uden andre kurvnavne. Bevar faktiske kurvfaner som deliverables. Aflever dansk og kort med beløb, væsentlige valg/forbehold og »intet bestilt«.

## Genoptag effektivt

Læs eksisterende arbejdsliste/kurvbevis først. Genbrug uændrede specifikationer og aktuelt bevis; kontrollér ændrede ordrer, kandidater, priser/lager og faktiske kurve. Genbrug aldrig historiske priser som aktuelle. Priser, kundedata og kurv-ID'er gemmes ikke i skillen.

Brug målrettede DOM-udsnit. Batch kendte opslag og handlinger, men læs frisk tilstand før adaptive valg. Undgå fulde wp-admin-dumps, gættede URL-løkker, skjult sidestate/netværkskald og faste sleeps. Tag screenshots ved slutbevis eller nødvendig visuel kompatibilitetskontrol. Hvis fuld optagelse fejler, brug ét passende udsnit med labels og beløb; gentag ikke samme fejlede optagelse.
