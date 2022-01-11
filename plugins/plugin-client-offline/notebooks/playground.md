---
title: Welcome to Guidebooks!
layout:
    1: 
        position: default
        maximized: true
    2: default
---

=== "Hello World"
    ```bash
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    commentary --send playground \# Welcome to the Guidebooks Playground :rocket:\n\nAuthor your own [Kui](https://github.com/kubernetes-sigs/kui) Guidebook, using markdown! You can edit this example, and watch the preview to the right update.\n\nGuidebooks support a suite of Markdown UIs, including:\n- Hints\n- Expandable Sections\n- Tabs\n- Executable code blocks\n\nHave fun learning these, or explore some more complex examples via the top-most tabs.\n\n
    ```

=== "Hints"
    ```bash
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    commentary --send playground -f /kui/hints.md
    ```

=== "Expandable Sections"
    ```bash
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    commentary --send playground -f /kui/expandable-section.md
    ```

=== "Tabs"
    ```bash
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    commentary --send playground -f /kui/tabs.md
    ```

=== "Code Blocks"
    ```bash
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    commentary --send playground -f /kui/code-blocks.md
    ```

---

```bash
---
execute: now
outputOnly: true
---
commentary --receive playground
```

