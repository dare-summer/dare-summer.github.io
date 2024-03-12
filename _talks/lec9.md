---
num: lec9

name: Byzantine fault tolerance in highly available systems

talk_file: 'kleppmann-byzantine.pdf'

speakers:
  - Martin Kleppmann

categories:
  - Key Note
  
affiliations:
  - Technical University of Munich
  
type: talk

abstract: > 
  We all know that a web server should never trust data sent by clients, because clients might be malicious, tell lies, and try to break the system. In the case of a web app, the server is trusted to check the validity of data from clients, but what do we do in peer-to-peer systems where there is no such server that we can depend on? We have to rely on protocols, but unfortunately many replication protocols assume that peers are trusted; a malicious peer can easily break them. Byzantine Fault Tolerance (BFT) is often associated with blockchains, but it is relevant for other types of replication as well. In this lecture I will show CRDTs can be made Byzantine fault tolerant.
---
