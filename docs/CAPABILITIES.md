# Capabilities

[← Back to README](../README.md)

This page describes what SUTRA INTELLIGENCE is meant to do, at product level. It says nothing about how. **No capability below has been benchmarked.** No claim of improved speed, cost, accuracy or reasoning is made.

## Capability areas

| Area | Intended behaviour |
|---|---|
| Objective keeping | Keeps the person's stated objective fixed through a long job. |
| Context and evidence | Works from what is known and surfaces what is not. |
| Planning | Shapes a plan for non-trivial work and adjusts it when evidence changes. |
| Model and tool selection | Chooses suitable models and tools per piece of work. |
| Execution | Carries work out through the chosen models and tools. |
| Verification | Separates doing from verifying, so results are checked apart from their producer. |
| Failure handling | Bounded retries, then escalation to a human. |
| Incompleteness | Reports unfinished work as unfinished. |
| Efficiency | Aims to avoid unnecessary computation and repeated operations. |
| Multi-product support | Aims to work across different AI products. |
| Feedback | Carries outcomes back into later work. |

## Status by maturity

### Implemented prototype capabilities
Present in the private prototype. Tested only with synthetic unit tests.

- Keeping an objective fixed across a task
- Separating doing from verifying
- Bounded retries with human escalation
- Reporting incomplete work as incomplete

### Under active development
Being built; may change.

- Model and tool selection across several providers
- Reducing repeated operations
- Support for more than one AI product
- Structured capture of outcomes and feedback

### Proposed
Intentions only. No implementation implied.

- Broader evidence handling for varied task types
- Richer reporting of why a result is trusted or not
- Wider range of supported tools

### Awaiting real-world validation
All of the following are open questions, not results:

- Does it make work more reliable?
- Does it reduce wasted computation?
- Does it change cost or time, and in which direction?
- Does model independence hold up in practice?
- Do people find the verification and escalation useful rather than burdensome?

## The honest summary

The prototype exists. Its value is not established. Treat everything here as design intent until real-world evaluation says otherwise.

---
© 2026 Rishav Mishra. All rights reserved.
