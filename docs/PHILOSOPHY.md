# Philosophical Foundations

[← Back to README](../README.md)

SUTRA is **inspired by** questions that Indian intellectual traditions have asked for a very long time. This page keeps four things apart for each tradition:

1. **The concept** as the tradition understands it.
2. **Context**: where it comes from.
3. **The question it inspires** for modern engineering.
4. **What SUTRA actually does**: only what is true of the prototype.

**Read this carefully.** These traditions did not describe computers, AI, algorithms or software. The link is inspiration and analogy, never equivalence. Nothing here claims that an ancient text supports a software design, and no quotation is attributed beyond the sources listed at the end. Every tradition below is a living, internally diverse body of thought. This page is a short, simplified introduction and cannot represent it fully.

## Vedānta

- **Concept:** Reflection on reality, consciousness and the self, including the relation between what is unchanging and what changes. The *Mundaka* Upaniṣad (3.1.1) uses the image of two birds on one tree, one eating the fruit and the other watching. The Bṛhadāraṇyaka Upaniṣad (1.4.10) contains the statement *aham brahmāsmi*, "I am Brahman". Schools of Vedānta interpret these passages very differently.
- **Context:** Upaniṣadic texts, later commentarial schools.
- **Question inspired:** Can a system keep a stable reference (what must be true) distinct from its changing activity (what it is doing)?
- **What SUTRA does:** The design keeps the user's objective fixed while work changes around it. This is a design intention, not a claim about consciousness or the self.

## Nyāya

- **Concept:** A school of logic and epistemology. The *Nyāya-sūtra* (1.1.3) names four means of valid knowledge (*pramāṇa*): perception (*pratyakṣa*), inference (*anumāna*), comparison (*upamāna*) and testimony (*śabda*). It also develops methods for examining claims.
- **Context:** Early classical period; developed over many centuries.
- **Question inspired:** How should a claim be supported before it is accepted?
- **What SUTRA does:** The design separates doing a task from verifying it, and treats evidence and assumption differently. Prototype only; unit tested on synthetic cases.

## Yoga

- **Concept:** Discipline of attention and conduct. The *Yoga-sūtra* of Patañjali (1.2) defines yoga as the stilling of the fluctuations of the mind (*citta-vṛtti-nirodha*).
- **Context:** Classical text; part of a wider practice tradition.
- **Question inspired:** What does disciplined, purposeful action look like compared with scattered action?
- **What SUTRA does:** It aims for controlled execution with limits and human escalation. This is inspired by the idea of discipline, not derived from the text.

## Sāṃkhya

- **Concept:** A dualist school distinguishing *puruṣa* (witnessing consciousness) from *prakṛti* (the productive, changing nature). Systematised in Īśvarakṛṣṇa's *Sāṃkhya-kārikā*.
- **Question inspired:** The general idea of a still witness set against active change.
- **What SUTRA does:** Nothing is claimed to correspond to *puruṣa* or *prakṛti*. The imagery of stillness and movement on the website is an abstract reference only. It is **not** a mapping onto software components.

## Mīmāṃsā

- **Concept:** The study of interpretation of ritual and textual injunctions. The *Mīmāṃsā-sūtra* (1.1.2) defines *dharma* as that which is indicated by injunction (*codanā*).
- **Question inspired:** How should instructions be interpreted in context, and how do duties relate to action?
- **What SUTRA does:** It aims to interpret a person's objective and constraints carefully. A design aim only.

## Buddhist epistemology

- **Concept:** Dignāga and Dharmakīrti developed a theory of knowledge that recognises two valid means: perception and inference, and examined when cognition is reliable.
- **Question inspired:** Under what conditions is a belief justified?
- **What SUTRA does:** It asks that results be backed by evidence and that uncertainty be reported. Design intention; unproven.

## Jain philosophy

- **Concept:** *Anekāntavāda*, the doctrine that reality can be described from many standpoints, with qualified statements (*syādvāda*) and humility about any single view.
- **Question inspired:** How can a system avoid overclaiming on complex questions?
- **What SUTRA does:** The project states its limits openly. It is an attitude the project tries to keep, not a feature.

## Key terms

| Term | Plain meaning | Why it inspires |
|---|---|---|
| **Pramāṇa** | A valid means of knowing | Checking, not just believing |
| **Pratyakṣa** | Perception, direct observation | Grounding in what is observed |
| **Anumāna** | Inference | Reasoning from evidence, and testing it |
| **Viveka** | Discernment, telling things apart | Distinguishing what matters, and doing from verifying |
| **Satya** | Truth, truthfulness | Honest reporting of what was and was not done |
| **Dharma** | Duty, right order, purpose (meanings vary by tradition) | Staying true to the objective |
| **Karma** | Action and its consequence | Outcomes feed back |
| **Sūtra** | "Thread"; also a genre of short aphoristic texts | The thread that joins parts into one whole |

## What SUTRA implements today

An early prototype, implemented and unit tested on synthetic cases only. Not integration tested in public evidence, not benchmarked, not independently validated. See the [README](../README.md).

## References

Bibliographic details below were written from memory in a drafting session and **have not been checked against the editions**. The owner or a qualified reader should verify them before they are relied on.

**Primary texts**
- *Bṛhadāraṇyaka Upaniṣad* 1.4.10; *Muṇḍaka Upaniṣad* 3.1.1. Translation: Patrick Olivelle, *The Early Upaniṣads* (Oxford University Press, 1998).
- Gautama (Akṣapāda), *Nyāya-sūtra* 1.1.3.
- Patañjali, *Yoga-sūtra* 1.2. Translation: Edwin F. Bryant, *The Yoga Sūtras of Patañjali* (North Point Press, 2009).
- Īśvarakṛṣṇa, *Sāṃkhya-kārikā*.
- Jaimini, *Mīmāṃsā-sūtra* 1.1.2.
- Dignāga, *Pramāṇasamuccaya*; Dharmakīrti, *Pramāṇavārttika*.
- *Bhagavad Gītā* 2.47 (on action), if cited.

**Secondary and scholarly**
- Surendranath Dasgupta, *A History of Indian Philosophy* (Cambridge University Press, 1922–1955).
- S. Radhakrishnan and Charles A. Moore (eds.), *A Sourcebook in Indian Philosophy* (Princeton University Press, 1957).
- Jonardon Ganeri, *Philosophy in Classical India* (Routledge, 2001).
- Bimal Krishna Matilal, *Perception* (Oxford University Press, 1986).
- Stephen H. Phillips, *Epistemology in Classical India* (Routledge, 2012).
- Karl H. Potter (ed.), *Encyclopedia of Indian Philosophies* (Motilal Banarsidass).

---
© 2026 Rishav Mishra. All rights reserved. The traditions described here belong to everyone.
