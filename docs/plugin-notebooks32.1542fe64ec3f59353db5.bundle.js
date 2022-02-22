"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[46562],{92739:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i='---\ntitle: Knative Quickstart\nlayout:\n    1: left\n    default: wizard\nwizard:\n    steps:\n        - match: Install Knative using quickstart\n          name: Install required tools\n        - match: Install the Knative quickstart plugin\n          name: Install and use the Knative quickstart plugin\n          description: The plugin sets up Knative against kind by creating a kind cluster populated with Knative\n        - match: Deploying your first Knative Service\n          name: Example 1 - Deploying your first Knative Service\n          description: In this example, you will deploy a "Hello world" service\n        - name: Clean Up\ncodeblocks:\n    - match: ^brew install kn$\n      validate: kn version\n    - match: ^brew upgrade kn$\n      optional: true\n    - match: ^brew tap --repair\n      optional: true\n    - match: ^mv kn /usr/local/bin$\n      validate: kn version\n    - match: ^kn version$\n      validate: $body\n    - match: ^brew install knative-sandbox/kn-plugins/quickstart$\n      validate: kn quickstart --help\n    - match: ^brew upgrade knative-sandbox/kn-plugins/quickstart$\n      optional: true\n    - match: ^kn quickstart --help$\n      validate: $body\n    - match: ^mv kn-quickstart /usr/local/bin$\n      validate: kn quickstart --help\n    - match: ^kn quickstart kind$\n      validate: (kubectl cluster-info --context kind-knative) && exit 0 || exit 1\n    - match: ^kn quickstart minikube$\n      validate: minikube profile list\n    - match: ^kn service create hello\n      validate: kn service describe hello\n    - match: ^kubectl apply -f hello.yaml$\n      validate: kn service describe hello\n    - match: ^curl http://hello.default.127.0.0.1.sslip.io$\n      validate: $body\n    - match: ^[Resolve]\n      optional: true\n    - match: ^kind delete clusters knative$\n      validate: (kubectl cluster-info --context kind-knative) && exit 1 || exit 0\n    - match: ^minikube delete -p knative$\n      validate: (kubectl cluster-info --context kind-knative) && exit 1 || exit 0\n---\n\n[![Knative logo](https://knative.dev/docs/images/logo/rgb/knative-logo-rgb.png)](https://knative.dev)\n\n# Knative\n\n[Knative](https://knative.dev) is enterprise-grade Serverless on\nyour own terms, a Kubernetes-based platform to deploy and manage\nmodern serverless workloads.\n\nKnative components build on top of\n[Kubernetes](https://kubernetes.io/), abstracting away the complex\ndetails and enabling developers to focus on what matters. Built by\ncodifying the best practices shared by successful real-world\nimplementations, Knative solves the "boring but difficult" parts of\ndeploying and managing cloud native services so you don\'t have to.\n\n\x3c!-- oof, there is no great way of using markdown to specify a desired image size --\x3e\n\n<a href="https://github.com/knative">\n  <img alt="Github Logo" src="https://avatars.githubusercontent.com/u/26377421?v=4" width="40">\n</a>\n\n---\n\n# Welcome to the Knative Quickstart tutorial\n\nThis tutorial lets you try out some of the commonly used features in Knative.\n\nIn the first lesson you will install Knative locally using the Knative `quickstart` plugin.\nTo follow the tutorial you must use the `quickstart` plugin to install Knative.\nThe plugin provides a Knative deployment for development use, which has\nbeen configured with the components you need for this tutorial.\n\nThen, on your new cluster, you will carry out common tasks for **Knative Serving** and **Knative Eventing**.\n\nWe recommend that you complete the topics in this tutorial in order.\n\n!!! tip\n    Hit ++"."++ (period) on your keyboard to move forward in the tutorial. Use ++","++ (comma) to go back at any time.\n\n---\n\n# Install Knative using quickstart\n\nThis topic describes how to install a local deployment of Knative Serving and\nEventing using the Knative `quickstart` plugin.\n\nThe plugin installs a preconfigured Knative deployment on a local Kubernetes cluster.\n\n!!! warning\n    Knative `quickstart` environments are for experimentation use only.\n    For a production ready installation, see the [YAML-based installation](/docs/install/yaml-install/)\n    or the [Knative Operator installation](/docs/install/operator/knative-with-operators/).\n\n## Before you begin\n\nBefore you can get started with a Knative `quickstart` deployment you must install:\n\n### [Docker](https://docs.docker.com/get-docker/)\n\n```bash\n---\nvalidate: $body\n---\n(docker info >& /dev/null) && echo “You have Docker!” || (echo “Please install Docker” && exit 1)\n```\n\n### [kind](https://kind.sigs.k8s.io/docs/user/quick-start){target=_blank} (Kubernetes in Docker)\nEnables you to run a local Kubernetes cluster with Docker container nodes.\n\n```bash\n---\nvalidate: $body\n---\n(kind version >& /dev/null) && echo "You have Kind!" || (echo "Please install Kind" && exit 1)\n```\n\nOR \n\n### [minikube](https://minikube.sigs.k8s.io/docs/start/){target=_blank} (Kubernetes in Docker)\nEnables you to run a local Kubernetes cluster with Docker container nodes.\n\n```bash\n---\nvalidate: $body\n---\n(minikube version >& /dev/null) && echo "You have minikube!" || (echo "Please install minikube" && exit 1)\n```\n\n### The [Kubernetes CLI (`kubectl`)](https://kubernetes.io/docs/tasks/tools/install-kubectl){target=_blank}\nRuns commands against Kubernetes clusters. You can use `kubectl` to deploy applications, inspect and manage cluster resources, and view logs.\n\n```bash\n---\nvalidate: $body\n---\n(kubectl version --client >& /dev/null) && echo "You have kubectl!" || (echo "Please install kubectl" && exit 1)\n```\n\n### The Knative CLI (`kn`)\n\n```bash\n---\nvalidate: $body\n---\n(kn version >& /dev/null) && echo "You have the Knative CLI" || (echo "Please install the Knative CLI" && exit 1)\n```\n\n### Install the Knative CLI\n\nThe Knative CLI (`kn`) provides a quick and easy interface for creating Knative resources, such as Knative Services and Event Sources, without the need to create or modify YAML files directly.\n\nThe `kn` CLI also simplifies completion of otherwise complex procedures such as autoscaling and traffic splitting.\n\n=== "Using Homebrew"\n\n    Do one of the following:\n\n    - To install `kn` by using [Homebrew](https://brew.sh){target=_blank}, run the command:\n\n        ```bash\n        brew install kn\n        ```\n\n    - To upgrade an existing `kn` install to the latest version, run the command:\n\n        ```bash\n        brew upgrade kn\n        ```\n\n        ??? bug "Having issues upgrading `kn` using Homebrew?"\n\n            If you are having issues upgrading using Homebrew, it might be due to a change to a CLI repository where the `master` branch was renamed to `main`. Resolve this issue by running the command:\n\n            ```bash\n            brew tap --repair\n            brew update\n            brew upgrade kn\n            ```\n\n=== "Using a binary"\n\n    You can install `kn` by downloading the executable binary for your system and placing it in the system path. Note that you will need `kn` v0.25 or later.\n\n    1. Download the binary for your system from the [`kn` release page](https://github.com/knative/client/releases){target=_blank}.\n\n    1. Rename the binary to `kn` and make it executable by running the commands:\n\n        ```bash\n        mv <path-to-binary-file> kn\n        chmod +x kn\n        ```\n\n        Where `<path-to-binary-file>` is the path to the binary file you downloaded in the previous step, for example, `kn-darwin-amd64` or `kn-linux-amd64`.\n\n    1. Move the executable binary file to a directory on your PATH by running the command:\n\n        ```bash\n        mv kn /usr/local/bin\n        ```\n\n=== "Using Go"\n\n    1. Check out the `kn` client repository:\n\n          ```bash\n          git clone https://github.com/knative/client.git\n          cd client/\n          ```\n\n    1. Build an executable binary:\n\n          ```bash\n          hack/build.sh -f\n          ```\n\n    1. Move `kn` into your system path, and verify that `kn` commands are working properly. For example:\n\n          ```bash\n          kn version\n          ```\n\n=== "Using a container image"\n\n    Links to images are available here:\n\n    - [Latest release](https://gcr.io/knative-releases/knative.dev/client/cmd/kn){target=_blank}\n\n    You can run `kn` from a container image. For example:\n\n    ```bash\n    docker run --rm -v "$HOME/.kube/config:/root/.kube/config" gcr.io/knative-releases/knative.dev/client/cmd/kn:latest service list\n    ```\n\n    !!! note\n        Running `kn` from a container image does not place the binary on a permanent path. This procedure must be repeated each time you want to use `kn`.\n\n## Install the Knative quickstart plugin\n\nTo get started, install the Knative `quickstart` plugin:\n\n=== "Using Homebrew"\n\n    Do one of the following:\n\n    - To install the `quickstart` plugin by using [Homebrew](https://brew.sh){target=_blank}, run the command:\n\n        ```bash\n        brew install knative-sandbox/kn-plugins/quickstart\n        ```\n\n    - To upgrade an existing `quickstart` install to the latest version, run the command:\n\n        ```bash\n        brew upgrade knative-sandbox/kn-plugins/quickstart\n        ```\n=== "Using a binary"\n    1. Download the executable binary for your system from the [`quickstart` release page](https://github.com/knative-sandbox/kn-plugin-quickstart/releases){target=_blank}.\n\n    1. Move the executable binary file to a directory on your `PATH`, for example, in `/usr/local/bin`.\n\n    1. Verify that the plugin is working, for example:\n\n        ```bash\n        kn quickstart --help\n        ```\n\n=== "Using Go"\n    1. Check out the `kn-plugin-quickstart` repository:\n\n          ```bash\n          git clone https://github.com/knative-sandbox/kn-plugin-quickstart.git\n          cd kn-plugin-quickstart/\n          ```\n\n    1. Build an executable binary:\n\n          ```bash\n          hack/build.sh\n          ```\n\n    1. Move the executable binary file to a directory on your `PATH`:\n\n          ```bash\n          mv kn-quickstart /usr/local/bin\n          ```\n\n## Run the Knative quickstart plugin\n\nThe `quickstart` plugin completes the following functions:\n\n1. **Checks if you have the selected Kubernetes instance installed**\n1. **Creates a cluster called `knative`**\n1. **Installs Knative Serving** with Kourier as the default networking layer, and sslip.io as the DNS\n1. **Installs Knative Eventing** and creates an in-memory Broker and Channel implementation\n\n\nTo get a local deployment of Knative, run the `quickstart` plugin:\n\n=== "Using kind"\n\n    1. Install Knative and Kubernetes on a local Docker daemon by running:\n\n        ```bash\n        kn quickstart kind\n        ```\n\n=== "Using minikube"\n\n    1. Install Knative and Kubernetes in a minikube instance by running:\n\n        ```bash\n        kn quickstart minikube\n        ```\n\n    1. To finish setting up networking for minikube, start the `minikube tunnel` process in a separate terminal window:\n        ```bash\n        minikube tunnel --profile knative\n        ```\n        The tunnel must continue to run in a terminal window while you are using your Knative `quickstart` environment.\n\n        !!! note\n            To terminate the process and clean up network routes, enter `Ctrl-C`.\n            For more information about the `minikube tunnel` command, see the [minikube documentation](https://minikube.sigs.k8s.io/docs/handbook/accessing/#using-minikube-tunnel).\n\n## Next steps\n\nNow you\'ve installed Knative, learn how to deploy your first Service in the\nnext topic in this tutorial.\n\n# Deploying your first Knative Service\n\n**In this tutorial, you will deploy a "Hello world" service.**\n\nSince our "Hello world" Service is being deployed as a Knative Service, not a Kubernetes Service, it gets some **super powers out of the box** :rocket:.\n\n## Knative Service: "Hello world!"\n\nFirst, deploy the Knative Service. This service accepts the environment variable,\n`TARGET`, and prints `Hello ${TARGET}!`.\n\n=== "kn"\n\n    Deploy the Service by running the command:\n\n    ``` bash\n    kn service create hello \\\n    --image gcr.io/knative-samples/helloworld-go \\\n    --port 8080 \\\n    --env TARGET=World \\\n    --revision-name=world\n    ```\n\n    ??? question "Why did I pass in `revision-name`?"\n        Note the name "world" which you passed in as "revision-name," naming your `Revisions` will help you to more easily identify them, but don\'t worry, you\'ll learn more about `Revisions` later.\n\n=== "YAML"\n    1. Copy the following YAML into a file named `hello.yaml`:\n\n        ``` yaml\n        apiVersion: serving.knative.dev/v1\n        kind: Service\n        metadata:\n          name: hello\n        spec:\n          template:\n            metadata:\n              # This is the name of our new "Revision," it must follow the convention {service-name}-{revision-name}\n              name: hello-world\n            spec:\n              containers:\n                - image: gcr.io/knative-samples/helloworld-go\n                  ports:\n                    - containerPort: 8080\n                  env:\n                    - name: TARGET\n                      value: "World"\n        ```\n    1. Deploy the Knative Service by running the command:\n\n        ``` bash\n        kubectl apply -f hello.yaml\n        ```\n        ??? question "Why did I pass in the second name, `hello-world`?"\n            Note the name `hello-world` which you passed in under `metadata` in your YAML file. Naming your `Revisions` will help you to more easily identify them, but don\'t worry if this if a bit confusing now, you\'ll learn more about `Revisions` later.\n\n\n## Ping your Knative Service\n\nPing your Knative Service by opening [http://hello.default.127.0.0.1.sslip.io](http://hello.default.127.0.0.1.sslip.io){target=_blank} in your browser of choice or by running the command:\n\n```bash\ncurl http://hello.default.127.0.0.1.sslip.io\n```\n\n??? question "Are you seeing `curl: (6) Could not resolve host: hello.default.127.0.0.1.sslip.io`?"\n\n    In some cases your DNS server may be set up not to resolve `*.sslip.io` addresses. If you encounter this problem, it can be fixed by using a different nameserver to resolve these addresses.\n\n    The exact steps will differ according to your distribution. For example, with Ubuntu derived systems which use `systemd-resolved`, you can add the following entry to the `/etc/systemd/resolved.conf`:\n\n    ```ini\n    [Resolve]\n    DNS=8.8.8.8\n    Domains=~sslip.io.\n    ```\n\n    Then simply restart the service with `sudo service systemd-resolved restart`.\n\n    For MacOS users, you can add the DNS and domain using the network settings as explained [here](https://support.apple.com/en-gb/guide/mac-help/mh14127/mac).\n\nCongratulations :tada:, you\'ve just created your first Knative Service. Up next, Autoscaling!\n\n# Clean Up\n\nWe recommend that you delete the cluster used for this tutorial to free up resources\non your local machine.\n\nIf you want to continue experimenting with Knative after deleting the cluster,\nyou can reinstall Knative on a new cluster using the [`quickstart` plugin](https://raw.githubusercontent.com/mra-ruiz/docs/guidebooks/docs/getting-started/quickstart-install.md%23run-the-knative-quickstart-plugin) again.\n\n## Delete the Cluster\n\n=== "kind"\n\n    Delete your `kind` cluster by running the command:\n\n    ```bash\n    kind delete clusters knative\n    ```\n\n=== "minikube"\n\n    Delete your `minikube` cluster by running the command:\n\n    ```bash\n    minikube delete -p knative\n    ```'}}]);