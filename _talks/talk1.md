---
num: talk1
name: Automatic Array Transformation to Columnar Storage at Run Time
speakers:
  - Lukas Makor 
  - Sebastian Kloibhofer
  - David Leopoldseder
  - Daniele Bonetta
  - Lukas Stadler
  - Hanspeter Mössenböck
categories:
  - Paper

type: talk

affiliations:
  - Johannes Kepler University Linz, Austria
  - Johannes Kepler University Linz, Austria
  - Oracle Labs, Austria
  - Oracle Labs, Netherlands
  - Oracle Labs, Austria
  - Johannes Kepler University Linz, Austria

# links:
#   - name: Recodring
#     icon: video
#     absolute_url: https://media.ccc.de/
#   - name: Wikipedia
#     absolute_url: https://en.wikipedia.org

abstract: >
  Today's huge memories make it possible to store and process large data structures in memory instead of in a database. Hence, accesses to this data should be optimized, which is normally relegated either to the runtimes and compilers or is left to the developers, who often lack the knowledge about optimization strategies.
  As arrays are often part of the language, developers frequently use them as an underlying storage mechanism.
  Thus, optimization of arrays may be vital to improve performance of data-intensive applications.
  While compilers can apply numerous optimizations to speed up accesses, it would also be beneficial to adapt the actual layout of the data in memory to improve cache utilization. However, runtimes and compilers typically do not perform such memory layout optimizations.
  <br>
  In this work, we present an approach to dynamically perform memory layout optimizations on arrays of objects to transform them into a columnar memory layout, a storage layout frequently used in analytical applications that enables faster processing of read-intensive workloads.
  By integration into a state-of-the-art JavaScript runtime, our approach can speed up queries for large workloads by up to 9x, where the initial transformation overhead is amortized over time.
---

