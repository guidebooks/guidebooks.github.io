"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[63016],{26694:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});const s='---\ntitle: Knative &mdash; Clean Up\nlayout:\n    1: left\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](https://knative.dev) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n## Clean Up\n\n=== "kn"\n    Delete the Service by running the command:\n\n    ```bash\n    kn service delete cloudevents-player\n    ```\n\n    Delete the Trigger by running the command:\n\n    ```bash\n    kn trigger delete cloudevents-trigger\n    ```\n\n=== "kubectl"\n    Delete the Service by running the command\n\n    ```bash\n    kubectl delete -f cloudevents.yaml\n    ```\n\n    Delete the Trigger by running the command:\n\n    ```bash\n    kubectl delete -f ce-trigger.yaml\n    ```\n\nDelete the Cluster\n\nDelete your `kind` Cluster by running the command:\n    ```bash\n    kind delete clusters knative\n    ```\n!!! success "Verify Output"\n    ```{ .bash .no-copy }\n    Deleted clusters: ["knative"]\n    ```'}}]);