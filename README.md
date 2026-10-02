<div align="center">

# Byens IT · Indkøb

**Fra WooCommerce-ordre til leverandørkurve klar til kontrol.**

En dansk Codex-skill til at finde passende PC-dele, sammenligne priser og klargøre indkøb hos DCS og Proshop.

[![License: MIT](https://img.shields.io/badge/License-MIT-2563eb.svg)](LICENSE)
[![Language: Dansk](https://img.shields.io/badge/Sprog-Dansk-0f766e.svg)](SKILL.md)
[![Workflow: Review](https://img.shields.io/badge/Leverance-Kurve%20til%20kontrol-7c3aed.svg)](#hvad-du-får)

[Læs skillen](SKILL.md) · [Leverandørspor](references/suppliers.md) · [Rapportér et problem](https://github.com/byensitmagnus/byens-it-indkoeb/issues)

</div>

---

## Hvad du får

| Område | Skillens arbejde |
|---|---|
| **Ordreoverblik** | Afgrænser enkeltordrer eller batches og fordeler dele pr. ordre. |
| **Komponenter** | Dækker CPU, køler, bundkort, RAM, GPU, SSD, kabinet, PSU og tilvalg. |
| **Prisvalg** | Sammenligner DCS og Proshop samt målrettede alternativer med fragt og moms. |
| **Kompatibilitet** | Kontrollerer blandt andet BIOS, RAM, plads, strømstik og PCIe-Wi-Fi. |
| **Kurve** | Aggregérer antal, bevarer andre varer og kontrollerer gemte mængder. |
| **Aflevering** | Giver ordrefordeling, prisbevis, billeder og tydelige uafklarede punkter. |

**Leverancen er kurve til menneskelig gennemgang.** Skillen afgiver ikke bestillinger, betaler ikke og ændrer ikke WooCommerce-ordrer.

## Sådan fungerer det

```mermaid
flowchart LR
    A[Ordre og tilvalg] --> B[Behov pr. ordre]
    B --> C[Pris og kompatibilitet]
    C --> D[DCS og Proshop-kurve]
    D --> E[Afstemning og gennemgang]
```

Fælles komponenter undersøges én gang og købes i samlet antal. Hver ordres tilvalg bevares. Bekræftede lager-PC'er udløser kun indkøb af særskilte tilvalg.

## Installation

Du skal have **Git**, **Codex med lokale skills** og en tilgængelig **computer-use-forbindelse til Chrome**. Leverandørsessioner og nødvendige logins håndteres i dit eget miljø; repoet indeholder ingen adgangsoplysninger.

Klon repoet til Codex' personlige skill-mappe. Hvis `byens-it-indkoeb` allerede findes, sammenlign og opdatér den eksisterende installation i stedet for at overskrive lokale tilpasninger.

**Windows · PowerShell**

```powershell
git clone https://github.com/byensitmagnus/byens-it-indkoeb.git "$env:USERPROFILE\.codex\skills\byens-it-indkoeb"
```

**macOS / Linux**

```bash
git clone https://github.com/byensitmagnus/byens-it-indkoeb.git "$HOME/.codex/skills/byens-it-indkoeb"
```

Ved et særskilt `CODEX_HOME` bruges dets `skills`-mappe. Åbn en ny Codex-session, og bed om at bruge `$byens-it-indkoeb`. Skillen kan også vælges automatisk til relevante indkøbsopgaver.

## Eksempler

**Én ordre**

> Brug $byens-it-indkoeb til ordre #12345. Sammenlign DCS og Proshop, og læg de passende dele i kurvene til min kontrol.

**Flere ordrer**

> Brug $byens-it-indkoeb til alle ordrer med status Behandler fra #12345 og nyere. Lav en samlet ordrefordeling og leverandørkurve. De brugte PC'er står på lager; køb kun deres øvrige tilvalg.

**Fortsæt et eksisterende indkøb**

> Brug den gemte ordrefordeling og kurvbeviser. Opdatér de ændrede behov og aktuelle priser uden at tilføje allerede gemte varer igen.

## Valg og begrænsninger

- **Krav før pris:** En billigere kandidat skal opfylde ordren og produktets lovede specifikationer.
- **Bundkort:** Billigste kompatible model i det krævede chipset; den faktiske variant fremgår.
- **RGB:** DUTZO foretrækkes. Serie, strip-længde, antal og controller skal passe til tilvalget.
- **Moms:** Faktisk kurvmoms bruges, fordi blandede komponentkurve kan have forskellig momsbehandling.
- **Aktualitet:** Leverandørspor er daterede genveje. Priser, lager, fragt og BIOS på leverede kort kræver aktuelle oplysninger.

En kurv kan være klar til kontrol, selv om en leveringsdato, licensprocedure eller fysisk kabelkontrol stadig er uafklaret. Sådanne punkter skal fremgå af afleveringen.

## Repoets indhold

```text
byens-it-indkoeb/
├── SKILL.md                 # Workflow og indkøbsregler
├── references/
│   └── suppliers.md         # DUTZO-spor og observeret leverandøradfærd
├── README.md                # Installation og anvendelse
├── LICENSE                  # MIT
└── .gitignore               # Holder private arbejdsfiler ude
```

Ordredata, kundedata, kurv-ID'er, screenshots fra indkøb, credentials og aktuelle pristabeller hører hjemme i den private opgavemappe — ikke i dette offentlige repo.

## Forbedringer

Åbn en issue eller pull request med et konkret problem og anonymiseret eksempel. Bevar autorisationsgrænser, ordrespecifikationer og kontrol af gemte antal. Del aldrig kundedata, kontologins eller private kurvlinks i issues.

## Licens

[MIT](LICENSE). Du må bruge og tilpasse skillen med licensens betingelser. DCS, Proshop og DUTZO nævnes som leverandører/produktspor; repoet er ikke et officielt projekt fra disse virksomheder.
