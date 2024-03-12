---
num: lec6

name: Why replicated lists are surprisingly hard

talk_file: 'kleppmann_text-editing.pdf'


speakers:
  - Martin Kleppmann

categories:
  - Key Note
  
affiliations:
  - Technical University of Munich
  
type: talk

abstract: > 
  Replicated list objects form the foundation of lots of collaborative software, such as multi-user text editors, spreadsheets, or graphics software. Each user needs to be able to update their own copy of the document without waiting for a network round-trip, and concurrent edits by different users need to be merged together. Although researchers have studied this problem for over 30 years, many published algorithms are broken in various ways. I will present our recent work on Fugue, a CRDT algorithm for replicated lists that avoids the interleaving problems exhibited by most other algorithms, and also talk about some of the other problems that have arisen in the history of research on collaborative text editors.
---
