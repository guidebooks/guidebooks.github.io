# Guidebooks

Getting started with a new software project has grown increasing
difficult. The technologies involved are complex, often having
multiple prerequisite dependencies before you can even get started
with the main tasks. CLIs must be installed, Cloud resources must be
provisioned and customized, etc. Once the level setting has been done,
accomplishing tasks often requires jumping through a series of steps;
e.g. first create a Kubernetes namespace, then create and customize a
resource in that namespace, wait for it to be ready, then observe
attributes such as the logs of that resource, and so on.


This is all quite error prone. Worse, most documentation is not
written to be self-contained or repeatable. Most of the time, the
documentation has gaps that they expect users to fill in. These gaps
are poorly specified, leaving most users with a low chance of
successfully accomplishing the laid out tasks.

Good documentation must be self-contained and offer repeatable
guarantees of successfully accomplishing tasks. In this sense, good
documentation is like a shell script, with really good comments. You
can execute it as a black box, but also learn the inner workings,
because the commands and comments are all explicit.

Guidebooks offer a way for documentation authors to guide users
through this mess. A guidebook is written as Markdown text, but
becomes a live view that can sense and actuate the environment:

  - It senses the environment in which it runs, alerting the user has
    to which of the tasks are done, and which remain.
  - Code blocks become executable and customizable CLI commands which,
    when executed, update the views to reflect task progress.

---

This repository hosts the content for https://playground.guidebooks.dev
