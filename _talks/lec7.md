---
num: lec7

name: Verifying RDTs with VeriFx

talk_file: 'dePorre_verification-lecture-summerschool.pdf'


speakers:
  - Kevin De Porre

categories:
  - Key Note
  
affiliations:
  - Vrije Universiteit Brussel
  
type: talk

abstract: > 
  In this presentation, we embark on an exploration of the landscape of software verification, with a particular emphasis on its application in the domain of distributed programs, especially, on replicated data types.
  Our journey begins with an in-depth analysis of various verification strategies, spanning the spectrum from traditional paper-based proofs to fully mechanized proofs. Within the realm of mechanized proofs, we categorize the techniques into three distinct classes: interactive, auto-active, and automated verification strategies, offering a brief overview of each.
  In this first part of the talk, the focus lies within the domain of automated verification strategies, where we delve into the potent capabilities of SMT (Satisfiability Modulo Theories) solving. We elucidate how harnessing SMT solvers can transform software verification into an automated and efficient process for certain types of programs.
  In the second part of the talk, I will introduce VeriFx, a high-level functional object-oriented programming language specially designed to empower developers with automated verification features. We will dive deep into the language design of VeriFx, especially its functional collections, to understand how it leverages the Z3 SMT solver to enable automated verification without sacrificing on expressiveness.
  Finally, we will transition from the technical underpinnings and pivot our focus to the programmer’s perspective. I will guide you through the process of implementing and verifying conflict-free replicated data types (CRDTs) using VeriFx, offering a hands-on glimpse into the application of automated verification techniques. By the end of this talk, you will have a deeper understanding of the tools and strategies available for ensuring the correctness and reliability of distributed software.
---
