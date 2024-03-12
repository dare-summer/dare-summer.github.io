---
num: lec4

name: "CRDTs: State-based approaches to high availability"

talk_file: 'baquero_CRDTsDARE2023.pdf'

speakers:
  - Carlos Baquero

categories:
  - Key Note
  
affiliations:
  - FEUP
  
type: talk

abstract: > 
  Distributed systems are inherently complex and exposed to failures in their
  components. While distributed algorithms try to do their best in handling node
  and network failures, it is often not possible to mask them. In the presence of
  failures, systems that thrive for high availability need to allow users to
  always submit operations and observe the local state (ensuring local-first),
  leading to potential divergence. Designs with Conflict-free Replicated Data
  Types (CRDTs) have been used extensively to guarantee that it is possible to
  converge to a state that reflects concurrent operations.
---
