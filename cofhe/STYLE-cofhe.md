# CoFHE style additions

These rules add to the root `STYLE.md` for pages under `cofhe/`. The root guide covers language. This file covers CoFHE names and diagrams.

## Terminology

Define a term at its first use on a page, in a short parenthetical or half sentence, even when a glossary page exists. Readers land on pages from search; no page gets to assume the reader arrived in order.

One name per thing, used consistently. Canonical names:

| Term | Notes |
|---|---|
| CoFHE | The coprocessor as a whole. Not COFHE, not Cofhe. |
| Teecryptor | The TEE decryption component. Capitalized as a product name. |
| Compute pipeline | The offchain pipeline that carries a task from onchain event to committed result. Lowercase, except at the start of a sentence. |
| Slim listener, FheOS, FHE Engine, Blockchain poster | The four components of the compute pipeline, in order. FHE Engine names the component that computes, never the pipeline around it. |
| ZK Verifier | The TEE input proof verification component. Runs in its own attested enclave, like Teecryptor. |
| CT Server | The component that stores and serves ciphertext bytes. Use this name in diagram lanes. In prose, "ciphertext store" names the database behind it. |
| TaskManager, CommitmentRegistry, ACL | Contract names, written as in the source. |
| ACP | Access Control Permission. Replaces "Permit" from `0.7` onward, so that it is not confused with an ERC-2612 permit. Spell it out before the acronym: a page whose subject is ACPs carries the full term in its `title`, and every other page expands it on first use. Never write "ACP permission". |
| `FHE.sol` | The Solidity library, in backticks when referring to the file or API. |
| `@cofhe/sdk` | The client SDK package, in backticks. "the SDK" after first mention on a page. |
| Threshold Network | The future MPC decryption network. Always framed as planned, never as current. |
| onchain, offchain | One word, no hyphen. |
| ciphertext, plaintext | One word. |
| handle | A reference to an encrypted value held by a contract. Do not mix with "hash" in prose; `ctHash` appears only as the code identifier. |
| testnet, mainnet | Lowercase. |

## Diagrams

### Sequence diagram lanes

Every sequence diagram draws its columns from one list of components, in one order. A page picks the components its flow needs. It never reorders them and never renames them. A reader who has followed one flow can then read any other without relearning the columns.

| Slot | Component |
|---|---|
| 1 | Your app |
| 2 | Client SDK |
| 3 | Your contract |
| 4 | TaskManager |
| 5 | ZK Verifier, Compute pipeline, Teecryptor |
| 6 | CommitmentRegistry |

Slot 5 holds the component the page is about. A flow that needs more than one keeps them in the order above, which is the order a value meets them: verified as an input, computed, then decrypted.

**CommitmentRegistry** is the one column every request flow has in common, because every ciphertext is anchored there. **TaskManager** is in every flow that touches the host chain. Keep both visible wherever the flow reaches them, and let the rest of the columns be subset-specific. Do not add a column to a diagram only to make it match another one.

An intro page may collapse the CoFHE components into a single column named CoFHE, and may show the chain itself as Host chain. A reader meeting the system for the first time does not need nine components to follow the story. Every other column still uses its canonical name.

A column that the flow really touches, but that is drawn idle, reads as a column the flow does not touch, which is a different and false claim. So a component is either a column everywhere it appears, or it is not a column at all.

CT Server is the deliberate second case. It stores and serves ciphertext bytes for the ZK Verifier and Teecryptor, but on most pages it carries a single round trip, and a whole column for that crowds the diagram. It is drawn as a self-message on the component that calls it, and the message names it, so the reader still learns who serves the bytes. The FHE Engine is different again: it writes the ciphertext store directly, so its message names no component.

Never declare a column the flow does not use. Mermaid draws it at full strength with no messages, and a reader takes that for a mistake. Mermaid also cannot dim a single column, so there is no way to show one as inactive: leave it out instead.

### Diagram color

Color marks **where a component runs**, never what kind of component it is. A reader should be able to answer "is this mine, is this onchain, is this Fhenix's" from the color alone, and get the same answer on every page.

| Zone | Components | Color |
|---|---|---|
| Client side, and independent parties | Your app, Client SDK, Partners | `#0466A2` |
| Host chain | Your contract, TaskManager | `#F37A49` |
| CoFHE, offchain | ZK Verifier, Compute pipeline, Teecryptor | `#0AD9DC` |
| Registry chain | CommitmentRegistry | `#BF90F8` |

The dark ground is `#122531`. These values live in the export script, not in each
diagram, so one edit changes every diagram.

CT Server is not in the table because it is never a column; it is named inside a self-message. Components in one zone share one color, including those a given flow does not use. Teecryptor is the same color on the decryption pages as the ZK Verifier is on the encryption page, because both run offchain inside CoFHE. A component must never change color between diagrams.

The reader-facing key is the page's own "Key components" table, which carries a **Runs in** column naming each component's zone. That is the legend: no swatches, no hex values in prose, and nothing to drift when a preset changes. A page that has such a table carries the column; a page without one names the zones in the tip under its diagram instead.

Do not color by component type. That is the tool's default, and it produces one accent per participant, encoding a distinction the reader cannot act on.

Architecture and lifecycle diagrams name their legend entries after the renderer's own component or state kinds, which say nothing a reader can use: a contract labelled "Database", a deliberate end state labelled "failure". Relabel those entries to the zone or the state's real meaning. Sequence legends describe arrow kinds and already read correctly.

The key management ceremony sits outside this table, like its actors: the keygen ceremony and the component enclave run inside CoFHE, but the partners are independent custodians and must not read as CoFHE's.

One action gets one phrase, in every diagram that shows it:

| Action | Phrase |
|---|---|
| ACL check | `isAllowedWithPermission / isPubliclyAllowed` |
| Commitment read | `getCommitment(version, handle)` |
| Commitment write | `postCommitments (batched)` |
| Ciphertext read | `fetch the ciphertext from CT Server` |
| Ciphertext write | `store the ciphertext bytes in CT Server` |
| Engine ciphertext write | `store the ciphertext under the handle` |

Diagrams that are not request flows keep their own actors. The key management ceremony and the compute pipeline's internal structure have no counterpart in the table above, and forcing them into it would say something untrue.
