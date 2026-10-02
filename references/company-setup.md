# Configure a company

Read this for first setup or when the company changes systems. The profile is agent-readable configuration, not a connector implementation.

## Establish the minimum working connections

| Source | Required evidence | Why it matters |
|---|---|---|
| Orders | Complete scoped orders, statuses, line quantities, variants and deadlines | Avoid missing pages, cancelled demand or customer overrides. |
| Catalog / BOM | Stable item identifiers, units, component quantities and allowed equivalents | Translate sold products into procurement requirements. |
| Inventory | Usable stock, reservations, existing allocations and confirmed inbound dates | Buy shortages rather than every ordered item. |
| Suppliers | Authorized account, quote/cart access, prices, tax, pack sizes and availability | Prepare suitable supply at a defensible landed cost. |
| Private workspace | Persistent run ledger and access for the intended executor | Resume safely and avoid duplicate preparation. |

Use the company's existing ERP/API/connectors when available. Browser sessions are a supported fallback, not a prerequisite for every system. Check actual tool access before promising automation. Do not install integrations or start schedules without a request covering those changes.

Copy [the example profile](../examples/company-profile.example.yaml) outside the public repo. Replace fictional values and record the permitted actions. Store secret references rather than passwords. Do not publish the completed profile.

## Validate with a small representative batch

Use authorized sample orders that include a shared item, an override and a stock allocation. Verify the result against source orders and persisted destination quantities. This is acceptance of the connected company setup, not a test already performed by this repository.

Example demand, using fictional data:

| Order | Required units of ITEM-A | Stock allocated | Shortage |
|---|---:|---:|---:|
| EXAMPLE-101 | 4 | 3 | 1 |
| EXAMPLE-102 | 2 | 0 | 2 |
| Total | 6 | 3 | 3 |

If the supplier sells packs of two, procure two packs = four units. Allocate three units to shortages and record the remaining unit as surplus. Do not present two packs as two units or allocate the same stock to both orders.

## Keep a compact private result

Record source scope, included/excluded orders, requirements, stock allocation, supplier decision, saved cart/draft quantities, cost/tax/shipping, observation times and exceptions. Credentials and unnecessary customer details do not belong in the ledger.

Configuration is complete when the selected executor can read the scoped sources, prepare the intended destination, persist its state and verify the result. Missing connectors or permissions remain explicit setup work.
