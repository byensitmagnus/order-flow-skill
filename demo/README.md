# Interactive Order Flow walkthrough

Open `index.html` in a browser. No installation, account, build step or API is required. The demo is a fictional local simulation, not a supplier checkout or an ERP integration.

1. Two fictional orders require six units of COMPONENT-A.
2. Three usable units are allocated once, leaving a shortage of three units.
3. Suppliers sell packs of two. Two packs cover demand and leave one surplus unit.
4. Supplier A: 2 × €20 + €9 freight = €49. Supplier B: 2 × €22 + €2 freight = €46. Supplier B has the lowest total despite the higher pack price.
5. Prepare the draft, then repeat. The second action adds zero packs. Change stock and prepare again to see quantity reconciliation.

All prices, supplier availability and delivery assumptions are invented for this example. State is held in memory and resets on reload. Real systems require persistent state, actual destination verification, concurrent-run protection and explicit execution authority. This demo does not prove those integrations.

Model check: `node demo/check.cjs` from the repository root.
