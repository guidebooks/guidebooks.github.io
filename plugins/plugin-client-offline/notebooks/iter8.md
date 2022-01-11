---
title: Example &mdash; Iter8
layout:
  1: left
---

# Iter8: The Release Engineering Platform for Kubernetes

Iter8 is the **release engineering** platform for Kubernetes
applications and ML models.

Iter8 is designed for DevOps and MLOps teams interested in maximizing
release velocity and business value with their apps/ML models while
protecting end-user experience. Use Iter8 for SLO validation, A/B
testing and progressive rollouts of K8s apps/ML models.

---

# Your First Experiment


!!! tip "Load test https://example.com and validate SLOs" 

    Use an [Iter8 experiment](concepts.md#what-is-an-iter8-experiment) to load test https://example.com and validate latency and error-related service level objectives (SLOs).


## 1. Install Iter8
Install Iter8 using [Go 1.16+](https://golang.org/) as follows.
```shell
---
id: install-iter8-cli
validate: ${GOPATH-~/go}/bin/iter8 -v
status: done
responseEncoding: base64+gzip
response: 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
---
go install github.com/iter8-tools/iter8@latest
# you can now run iter8 (from your gopath bin/ directory)
```

## 2. Download experiment
Download the `load-test` experiment folder from [Iter8 hub](../user-guide/topics/iter8hub.md) as follows.

```shell
---
id: download-load-test
validate: "[[ -f /tmp/load-test/experiment.yaml ]] || exit 1"
status: done
---
cd /tmp && ${GOPATH-~/go}/bin/iter8 hub -e load-test
```

## 3. Run experiment
[Iter8 experiments](concepts.md#what-is-an-iter8-experiment) are specified using the `experiment.yaml` file. The `iter8 run` command reads this file, runs the specified experiment, and writes the results of the experiment into the `result.yaml` file.

Run the experiment you downloaded above as follows.

```shell
---
status: done
responseEncoding: base64+gzip
response: H4sIAAAAAAAAE9WUwUrEMBCGXyXMucG2Loq5CoIgCiIilB5COltD0yRk0rVL6bsb3cOuIioIi81x/vkz8zHJTCC9fsRA2lkQ0A2a0zMac7IpIINO2yZFnyKG/h7JO0uYwsG9EIiqmkBbi+EBx5iyrm+v7pKojCS60ZRCFYxvTr5u+RnUGVDcGgQxzRnE5Ll0NqJ9t8KcfbysKvOy5HnB8xUrCrE6Ffl5zSjKELVtGY4eg+6Tm4XBsi/Pp16+q1/BXGfHx4mSOlYI1qLlxsmGS9tw5YxBFXmPMWhFTOyosfnnQMXFr4GU673BBSGVgqUKSMSl93yz+y6Ho1nEk/sZZz+YheAc7IF97zQoleDWgzHbPyyEpCvXJDmfXwHcYsjJJgUAAA==
---
cd /tmp/load-test && ${GOPATH-~/go}/bin/iter8 run
```

??? note "Look inside experiment.yaml"

    This experiment contains the [`gen-load-and-collect-metrics` task](../user-guide/tasks/collect.md) for generating load and collecting metrics, and the [`assess-app-versions` task](../user-guide/tasks/assess.md) for validating SLOs.

    ```yaml
    # task 1: generate HTTP requests for https://example.com and
    # collect Iter8's built-in latency and error-related metrics
    - task: gen-load-and-collect-metrics
      with:
        versionInfo:
        - url: https://example.com
    # task 2: validate if the app (hosted at https://example.com) satisfies 
    # service level objectives (SLOs)
    # this task uses the built-in metrics collected by task 1 for validation
    - task: assess-app-versions
      with:
        SLOs:
          # error rate must be 0
        - metric: built-in/error-rate
          upperLimit: 0
          # 95th percentile latency must be under 100 msec
        - metric: built-in/p95.0
          upperLimit: 100
    ```


## 4. Assert outcomes
Assert that the experiment completed without any failures and SLOs are satisfied.

```shell
---
status: done
responseEncoding: base64+gzip
response: H4sIAAAAAAAAE9WTQUvEMBCF/0qYc4JtWTzkKgjCsgu6iFB6CO3UHTZNSibrVkr/u6M3BQueZHN8b14yHzOZwY30jIkpBrBwOpPhI3p/81aChhOFTtSXjGl4RB5jYBQ5xQuDresZKARMB5yyVD3s7vditt4xb4lFqmH6TJr+1dxCo4Hzu0ew86IhS+YuhozhKwqL/n5ZXRVVZYrSFBtVVrYqbVk0CqcREw0SUm0cRo8ZO/Xb+dHL2vs1LI3+V5yjYxWi6h35c8LrxHna7lk56Z5dJu5pZTbXgOO8ly0LHWX5G6wuuEb2Rxzx29iJXSwfuthmroIDAAA=
---
cd /tmp/load-test && ${GOPATH-~/go}/bin/iter8 assert -c completed -c nofailure -c slos
```

## 5. Generate report
Generate a report of the experiment in HTML or text formats as follows.

=== "HTML"

    ```shell
    ${GOPATH-~/go}/bin/iter8 report -o html > report.html
    # open report.html with a browser. In MacOS, you can use the command:
    # open report.html
    ```

    ???+ note "The HTML report looks as follows"

        ![HTML report](https://iter8.tools/0.8/getting-started/images/report.html.png)

=== "Text"

    ```shell
    cd /tmp/load-test && ${GOPATH-~/go}/bin/iter8 report -o text
    ```

    ???+ note "The text report looks as follows."

        ```
        -----------------------------|-----
                   Experiment summary|
        -----------------------------|-----
                Experiment completed |true
        -----------------------------|-----
                   Experiment failed |false
        -----------------------------|-----
           Number of completed tasks |4
        -----------------------------|-----



        -----------------------------|-----
                                 SLOs|
        -----------------------------|-----
                  built-in/error-rate|true
        -----------------------------|-----
                built-in/p95.0 (msec)|true
        -----------------------------|-----


          -----------------------------|-----
                                Metrics|
          -----------------------------|-----
                   built-in/error-count|0
          -----------------------------|-----
                    built-in/error-rate|0
          -----------------------------|-----
                built-in/latency (msec)|3
          -----------------------------|-----
            built-in/max-latency (msec)|213.21
          -----------------------------|-----
           built-in/mean-latency (msec)|17.47
          -----------------------------|-----
            built-in/min-latency (msec)|4.30
          -----------------------------|-----
                  built-in/p50.0 (msec)|10.80
          -----------------------------|-----
                  built-in/p75.0 (msec)|12.40
          -----------------------------|-----
                  built-in/p90.0 (msec)|13.60
          -----------------------------|-----
                  built-in/p95.0 (msec)|14
          -----------------------------|-----
                  built-in/p99.0 (msec)|209.91
          -----------------------------|-----
                  built-in/p99.9 (msec)|212.88
          -----------------------------|-----
                 built-in/request-count|100
          -----------------------------|-----
         built-in/stddev-latency (msec)|39.90
          -----------------------------|-----
          ```

Congratulations! :tada: You completed your first Iter8 experiment.
