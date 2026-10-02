---
name: order-flow
description: Prepare repeatable business order-to-procurement workflows from customer orders, inventory and bills of materials. Reconcile demand, compare approved suppliers, and create verified carts or purchase-order drafts using available tools. Use for procurement batches, replenishment preparation and order-flow setup; execution authority and integrations come from the current task.
---

# Order Flow

Turn scoped customer orders into traceable procurement requirements and verified supplier carts or purchase-order drafts. Use the company's configured systems and purchasing rules, not assumptions from another business. This skill supplies instructions; it does not install integrations, start a scheduler or grant purchasing authority.

## 1. Establish the run

- Read the company's profile and existing private run state. For first setup, use [company setup](references/company-setup.md) and the [example profile](examples/company-profile.example.yaml). Ask only for decisions that block the task; continue independent work.
- Record source system, order/status/date filters, warehouse, currency, supplier accounts, purchasing limits and authorized actions. Prefer an available supported API/connector; use an authorized browser session when necessary. Do not invent credentials or connector availability.
- Enumerate every relevant source page and record included/excluded order IDs. Read each order's quantities, variants and overrides; cache shared product specifications once. Keep customer contact data out of procurement artifacts unless required and specifically authorized for the destination.

## 2. Calculate what to procure

- Resolve each order into its items or bill of materials, preserving promised specifications and permitted substitutions. Order overrides take precedence. Services create purchasing demand only when a concrete material requirement exists.
- Reconcile demand with usable, unreserved inventory and confirmed inbound supply available by the required date. Do not subtract stock twice: allocate shared stock once across the batch and retain order-to-item allocations. Unknown stock is an exception, not zero or unlimited stock.
- Aggregate remaining demand by SKU/specification. Distinguish individual pieces, packs and kits; record conversion factors and order allocations. A capacity upgrade can replace a base item only when an additional physical item is not required; explain the interpretation.
- Keep one private ledger: order → requirement → allocated stock → shortage → supplier candidate → quoted price/tax/shipping/availability/source/time → target quantity → saved quantity/document ID → state.

## 3. Select suitable supply

- Compare approved suppliers once per unique candidate using manufacturer part number, SKU or GTIN. Consider exact specification, available quantity, delivery deadline, minimum order, pack size, shipping and company substitution rules. A cheaper item must still satisfy the requirement.
- Verify current prices and availability on an authoritative supplier response, product page or cart. Search snippets are leads; a failed search only means no match was found. Compare new with new unless other condition grades are permitted.
- Normalize currency and tax basis before comparison. Use actual line/cart tax treatment, including mixed rates or reverse-charge items; do not divide a mixed total by a default tax factor. Include freight and fees per supplier; disclose unknown amounts.
- Check domain-specific compatibility before adding items. Read [the hardware supplier example](references/suppliers.md) only for PC procurement or those suppliers. Track unresolved constraints separately; never mark missing evidence as verified.
- Split suppliers when justified by landed cost or availability. Apply the company's explicit minimum saving or limits only if provided. Report why a faster or more expensive option was selected.

## 4. Prepare and verify the documents

- Inspect existing carts/drafts first; use a dedicated run identifier and preserve unrelated work. Reconcile desired quantity against the actual saved quantity, adding only the difference.
- After a mutation, verify persisted model, quantity and document status before navigating away. On timeout or an ambiguous result, read the destination state before retrying. Never duplicate a submitted order to recover a lost response.
- Prepare only actions covered by the current task. A request to prepare carts does not authorize purchase submission, payment, supplier emails, inventory reservation or order-status writeback. Follow the host's approval requirements for final actions.
- For scheduled/event-driven runs, retries or downstream execution, read [automation and recovery](references/automation.md). Reuse an existing scheduler/ERP instead of creating a second controller.

## 5. Reconcile and hand off

- Check the completed batch against saved carts/drafts once: all included orders covered, correct items/units/allocations, no duplicates, actual totals/tax and known/unknown shipping. Keep excluded and stocked orders visible in the coverage summary.
- Save a dated private result with price sources, selected suppliers, document IDs, delivery dates and exceptions. Distinguish prepared, awaiting review, submitted and confirmed; mark executed steps only from observed confirmation.
- Capture the relevant final UI state when browser changes require visual proof. Keep only deliverable/handoff tabs. Report completed actions, costs, blockers and the next required decision in the user's preferred language.

## Work efficiently

Resume from the ledger and current destination state. Reuse unchanged specifications and still-valid evidence; refresh changed orders, inventory, candidates and time-sensitive quotes. Inspect targeted DOM fragments and batch known steps, reading fresh state before adaptive choices. Avoid guessed URL loops, hidden browser state, prohibited network access, fixed waits and repeated screenshots. After a failed full screenshot, use one suitable bounded view with labels and totals.

Keep company credentials, live orders, prices, customer data and runtime identifiers in the private workspace, never in this public skill.
