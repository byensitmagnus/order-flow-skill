# Hardware supplier example

This optional example comes from a PC procurement workflow observed on 2 October 2026. Revalidate product content, compatibility, supplier identity and UI behavior before reuse. It is not a universal company policy or a current price list.

## General PC checks

Include CPU, cooler, motherboard, desktop memory, GPU, storage, case, power supply and requested accessories. Preserve the customer's stated capacity, interface, performance, color and condition requirements.

Verify CPU support and required BIOS against the motherboard manufacturer's list. A support list does not prove the BIOS version of a supplied board. Check memory type, M.2 format, GPU length/thickness, cooling clearances and power connectors. For PCIe Wi-Fi, verify physical slot placement against GPU thickness. The number of connectors does not prove the number of separate power cables.

If motherboard models are flexible, choose a compatible board within the required chipset category. Disclose the actual variant: one observed ASRock A620AM-HVS listing used A620A despite an A620 supplier headline. Do not transfer this customer's substitution permission to a different company.

## Optional DUTZO Premium 2 × 30 cm RGB set

Use only when the business/order calls for this product family. One of each provided two Premium strips with one controller/remote:

| Supplier product | Model | Content |
|---|---|---|
| [Proshop 2861542](https://www.proshop.dk/Kabinet-Tilbehoer/DUTZO-Premium-Adressable-RGB-Strip-30cm-med-controller-fjernbetjening/2861542) | DSTRIP-PRE-30-ARGB+CON | 30 cm Premium strip with controller/remote |
| [Proshop 2861534](https://www.proshop.dk/Kabinet-Tilbehoer/DUTZO-Premium-Adressable-RGB-Strip-30cm/2861534) | DSTRIP-PRE-30-ARGB | Additional 30 cm Premium strip |

The cheaper standard strips are a different series. Verify supplied cables and controller ports; an accessory carousel does not establish a need for a splitter.

## Observed supplier behavior

- **DCS:** business login supports named carts. Check the selected cart before mutations. The cart print view provides item/model/quantity and actual tax without exposing other cart names.
- **Search:** DCS can match multiple terms broadly. Try a short model number or GTIN first; verify the result model. A concise product name may work when the model query has no match.
- **Quantity persistence:** filling DCS' cart quantity field and pressing Tab displayed a changed number without saving it. Increment/decrement buttons or quantity-plus-add on the product page persisted. Proshop's field-plus-Tab persisted in the observed session. Always verify saved quantities.
- **Add confirmation:** DCS product-detail and search-result additions had different confirmation behavior. Read the resulting state before navigation; navigating too early can interrupt addition.
- **Delivery:** DCS backorder items were shipped together unless partial delivery was chosen; the page limited partial delivery to credit payment. Disclose conflicting product/cart dates and possible batch delays.
- **Proshop:** guest carts can show consumer shipping. Do not promise business shipping from that indication.
- **Supplier identity:** DCS and Compumail showed the same company registration number. Compare sales-channel prices, but do not describe them as independent suppliers without rechecking ownership.
