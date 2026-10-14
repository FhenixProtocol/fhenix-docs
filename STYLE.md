# Documentation Style Guide

This guide defines how we write content for docs.fhenix.io. It covers language only, not visual design. Every page, new or rewritten, should follow it. When an existing page conflicts with this guide, the guide wins.

The goal: docs that read like they were written by an engineer who understands the system and respects the reader's time. Our readers are developers with sharp eyes. They notice filler, they notice hedging, and they notice text that no human would write.

## Voice

- Write in second person. "You call `decryptForView`", not "the developer calls" or "one calls".
- Use active voice. "The FHE Engine computes the result", not "the result is computed". Passive voice is acceptable when the actor is genuinely unknown or irrelevant ("The request is validated before it is queued"). It is not acceptable when it hides who has to do something.
- Use present tense for how the system works. "The SDK sends the request", not "the SDK will send".
- State facts plainly. If something is true, say it without softening. If something is uncertain or planned, say that explicitly. Never present a planned behavior as a current one.
- Be direct about limits and trade-offs. "FHE operations add gas overhead" builds more trust than hiding it.
- Explain the why in one short sentence when a rule would otherwise look arbitrary. Then stop.

Calibrate the register to the tab you are writing in. The floor is the same everywhere: second person, active voice, no filler. Above that floor:

| Tab | Register |
|---|---|
| Get Started | Warmest. Assume the reader has never used CoFHE. Spell out prerequisites and say what success looks like. |
| Client SDK, FHE library | Default engineer-to-engineer. Task first, then the detail that makes the task work. |
| Tutorials | Warm but strict about order. Every step states its outcome so a reader can tell when a step failed. |
| Deep Dive | Densest. Assume the reader knows the system and wants the mechanism, not the motivation. |
| Reference and API pages | Precision over warmth. No narration, no encouragement, complete parameter and error coverage. |

Do not serve two audiences on one page. Beginner context slows an expert down on a reference page, and assumed knowledge loses a beginner in a tutorial. If a page needs both, split it.

## Sentences and paragraphs

- One idea per sentence. If a sentence needs three commas, split it. Aim for under 25 words; the linter flags anything over 30.
- Lead with the point. The first sentence of a page, section, or paragraph carries its conclusion. Details follow.
- Keep paragraphs to 2-4 sentences. Prefer a list when you are enumerating.
- Cut every word that does not add meaning. "In order to" is "to". "It is important to note that" is nothing.
- Vary sentence length. A short sentence after a long one lands the point. A page of same-length sentences reads machine-made.
- Anticipate the reader's next question and answer it where it arises, not three sections later. If a step commonly confuses people, say so and resolve it on the spot.

## Words

Write like an engineer explaining a system to another engineer: not an academic paper, not a press release. The test for any sentence is whether someone on the team would say it in a design review. If nobody would, rewrite it.

- Prefer the plain word when it carries the same meaning, but this is not a vocabulary police. Words like "utilize" or "comprehensive" are fine where they are natural.
- Keep marketing adjectives out of technical pages. "Seamless", "blazing", and "cutting-edge" describe nothing; describe the actual behavior instead.
- Cut filler phrases that carry no information: "it is important to note that", "in order to".
- Avoid calling things "simple" or "easy". If the reader is stuck on it, that word is an insult; if they are not, it is noise.
- Match the reader's vocabulary. Use the word developers already search for, even when an internal name is more precise. Where the two differ, lead with their word and introduce ours once: "the encrypted value handle (`ctHash` in code)".
- No idioms or colloquialisms. "Out of the box", "under the hood", and "a stone's throw" cost a non-native reader a lookup and buy nothing. Say what happens instead.

## Punctuation and symbols

- No em dashes (—). Rewrite with a comma, a period, a colon, or parentheses.
- No decorative Unicode: no arrows (→) in prose, no checkmarks or crosses (✅ ❌), no sparkle characters. In tables, use words: "Shipped", "In progress", "Planned".
- Use straight quotes and apostrophes.
- Use the Oxford comma.
- Exclamation marks: at most one per tab, and preferably zero. "Tab" here means a top-level tab in `docs.json` navigation: Get Started, Client SDK, FHE library, Tutorials, Deep Dive.

## Terminology

Define a term at its first use on a page, in a short parenthetical or half sentence, even when a glossary page exists. Readers land on pages from search; no page gets to assume the reader arrived in order.

Each product keeps its own table of canonical names in its folder. CoFHE terminology lives in `cofhe/STYLE-cofhe.md`.

Do not use internal names in public docs: no hostnames, no GCP project names, no environment names (staging, rehearsal), no deployment bundle names like "aggregator", and no internal feature flags.

## Facts and claims

- Every technical claim must be true against the current code and the deployed system. If you cannot verify it, do not write it.
- Separate current from future. Current behavior lives in component and flow pages. Future work lives in the future plans page, clearly labeled.
- Security properties get extra care: only describe a control as active if it is enforced. Overstating a guarantee is worse than omitting it.
- Version numbers and package names must match what is published right now.

## Page structure

- Frontmatter: a short `title` and a one-sentence `description` that says what the page covers.
- Open with 1-3 sentences that tell the reader what this page explains and when they need it. No throat-clearing, no history lessons.
- Headings are short, in sentence case, and phrased as the question the reader is asking: "How decryption works", not "Decryption process overview" and not "How Does The Decryption Process Work?".
- Never write a manual `#` heading in the body. Mintlify renders the page H1 from the frontmatter `title`. Body headings start at `##`.
- Do not skip heading levels. `##` to `###`, never `##` to `####`.
- Order sections by what the reader needs first: what it is, how it works, how to use it, edge cases, reference.
- Use Mintlify components with intent: `<Note>` for things easy to miss, `<Warning>` for things that break, `<Tip>` for optional improvements, `<Steps>` for real sequences. A page full of callouts has none.
- Link the first mention of another concept to its page. Do not re-link the same target repeatedly in one page.

## Links, images, and components

- Internal links use root-relative paths: `/cofhe/fhe-library/core-concepts/access-control`, not `../core-concepts/access-control` and not the full `https://docs.fhenix.io/...` URL. Relative paths break when a page moves; absolute URLs break preview deployments.
- Link text describes the destination. "See [access control](/cofhe/fhe-library/core-concepts/access-control)", never `"click [here](/...)"` or a bare URL.
- Never link to a private repository; readers get a 404. Of the FhenixProtocol repos, `cofhe-contracts`, `cofhesdk`, `teecryptor`, `zee-k-verifier`, `cofhe-tdx-keygen`, and `fhenix-confidential-contracts` are public. Name a component or path in prose instead, and add the link when the repo goes public.
- A designed diagram declares a width past the content column, around 1440px, with the viewBox left at its own size. `<Frame>` centres an image at its intrinsic size on its own backdrop and drops inline styles, so a narrower diagram sits letterboxed. The vector scales, so oversizing the declaration costs nothing.
- Every image is wrapped in `<Frame>` and carries alt text that says what the image shows, not what it is called. "Sealed output flowing from the FHE Engine to the client", not "diagram".
- Pick the component that matches the content, and use each one for one job:

| Component | Use for |
|---|---|
| `<Note>` | Something easy to miss |
| `<Warning>` | Something that breaks, including breaking changes |
| `<Tip>` | An optional improvement |
| `<Info>` | Neutral context |
| `<Check>` | Confirming a step worked |
| `<Steps>` | A real sequence, where order matters |
| `<Tabs>` | The same task on different toolchains, such as Hardhat and Foundry |
| `<CodeGroup>` | The same operation in more than one language |
| `<Accordion>` | Detail most readers can skip |
| `<Card>`, `<CardGroup>` | Entry points to other pages |
| `<ParamField>`, `<ResponseField>`, `<Expandable>` | API reference parameters, responses, and nested fields |

A page full of callouts has none.

- Long code identifiers in narrow table columns get chopped mid-word by the table layout. Keep the first column to bare names (no argument lists) and guard each one with `<code style={{ whiteSpace: "nowrap" }}>name</code>`. Full signatures belong in prose above the table or in the description column.

## Code samples

- Every sample must compile or run against the currently published versions. If it would not run when pasted, it does not ship.
- Show imports and setup once per page, then keep later snippets focused.
- Comments in samples explain why, not what. No numbered "step 1, step 2" comments; the surrounding text does that.
- Use realistic names (`counter`, `balance`, `vote`), not `foo` and `bar`.
- Every code block carries a language tag, and a filename when the reader needs to know where the code goes: ```solidity Counter.sol.
- Use realistic values, not placeholders, and never a real key, address, or endpoint that belongs to someone. Document the error path where a reader will hit one.

## Diagrams

- Mermaid is the source of truth for every diagram. It lives in the page as a ```mermaid block, renders natively on the site, and diffs like text in review.
- A designed SVG is an optional finalization step, not the source. When one replaces a rendered Mermaid block, the Mermaid source stays in the repo next to it, and any later change to the flow updates the Mermaid first.
- Actor names in diagrams use the canonical terminology of the product (see its style file) and must match the page text exactly.
- A diagram shows one flow. If it needs a legend to be understood, split it.

### Product diagram rules

Each product keeps its own diagram lanes and colors in its folder. CoFHE lanes and colors live in `cofhe/STYLE-cofhe.md`.

## Enforcement

Most of this guide is mechanical, so linters enforce it instead of a reviewer.

- Prose: [Vale](https://vale.sh), with our rules in `styles/Fhenix/` and configuration in `.vale.ini`. It catches em dashes, decorative Unicode, filler phrases, marketing adjectives, "simple" and "easy", idioms, vague link text, non-canonical terminology, Title Case headings, and overlong sentences.
- Structure: `scripts/lint-docs.py`, which reads what Vale cannot see. It catches missing frontmatter, manual H1 headings, skipped heading levels, code blocks with no language tag, relative or absolute internal links, and images with no alt text.
- Versions (CoFHE): `cofhe/scripts/check-versions.py`, which treats the [compatibility page](cofhe/get-started/introduction/compatibility.mdx) as the single source of truth and fails when any pin elsewhere disagrees with it. Update that page first, then run the script to find every install command and table that has to move with it.

Run both on what you changed, before you open a pull request:

```bash
brew install vale
FILES=$(git diff --name-only --diff-filter=d origin/main...HEAD -- '*.mdx')
python3 scripts/lint-docs.py $FILES
vale $FILES
python3 cofhe/scripts/check-versions.py --docs
```

A version that is deliberately old, because the sentence is describing history, opts out with a `<!-- versions:ignore -->` comment on the same line. A version written as `package@v1.2.3` is read as a historical reference and never checked.

The `Docs style` GitHub Action runs both on the `.mdx` files a pull request touches. Errors block the merge, warnings do not. Pages written before the linters existed still contain violations, so the action ignores files your branch did not touch. Fix a legacy page when you are already editing it, not in a sweep. To see the whole backlog, run the action manually with `scope: all`.

Neither linter can judge whether a claim is true, whether a sample runs, or whether a sentence earns its place. That is what review is for.

`AGENTS.md` points AI assistants at this guide. Update it when a rule here changes, or agent-written pages will drift from the guide within a release.

## Review checklist

Before a page ships, scan it for what the linter cannot see:

1. Any claim you could not defend with a line of code or a config entry.
2. Future behavior described in present tense.
3. A code sample that was not actually run or compiled.
4. Internal names (hosts, projects, environments, flags).
5. A heading that labels a topic instead of answering the reader's question.
6. Sentences that make you read them twice. Rewrite those first.
