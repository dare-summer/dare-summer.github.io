---
num: lec10

name: A principled approach to programming distributed systems (part two)

talk_file: 'shapiro_varda.pdf'

speakers:
  - Marc Shapiro

categories:
  - Key Note
  
affiliations:
  - Sorbonne-Université-LIP6 & INRIA
  
type: keynote

abstract: > 
  In the first part of this talk, I will address what it means for a distributed program to be both efficient and correct. A distributed program is a set of processes that communicate in order to reach some common goal.  Our approach to correctness is to identify, for a given application, the invariants that the program must satisfy, i.e., the properties over the program's variables that must remain true in every execution.  Our approach to efficiency is characterize the minimal amount of coordination between processes that is required to guarantee those invariants, thereby maximizing parallelism and autonomy between processes.  Along the way, I categorize different classes of invariants, and for each class, a protocol that guarantees it.  Some classes can be enforced by each process independently; some require asynchronous coordination in the form of causal-order delivery of messages; and some (but by no means all) do require the full power of consensus.  The first two classes are at the same time available and partition-tolerant; for the last one (the focus of the CAP Theorem) the programmer must make a decision, choosing between availability and partition-tolerance.  Finally, we will discuss program analysis techniques for safely characterizing the amount of required coordination.

  In the second part of the talk, I will present Varda, a new programming language for distributed applications.  Varda aims to reduce the amount of work and to improve the safety of distributed programming.  Varda is designed to enable the safe composition of components, including black-box "off-the-shelf" (OTS) components.  As a running example, we consider the incremental development of a sharded, geo-distributed key-value store, using OTSs such as Redis, Kafka, and RabbitMQ.  A component's interface is a well-defined protocol, i.e., a set of typed messages that satisfy both a given grammar and some given invariants (an OTS is sandboxed to verify the protocol at run time).  To ensure safety, two components may communicate only if their protocols are mutually compatible and they are in the same scope.  The developer may evolve such a composition by interposing proxies, transparently to the existing components.  The Varda compiler enforces the safety constraints, generates boiler-plate code, and applies high-level optimisations.
---
