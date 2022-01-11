---
title: Example &mdash; Getting Started with Fybrik
layout:
    1: left
---

# Getting to Know Fybrik

[Fybrik](https://fybrio.io) offers *low-touch* regulation of data
access, so that:

1. **Data owners** add data sets to a catalog.
2. **Data stewards** specify policies that help Fybrik automate the
   brokering of a request for data.
3. **Data users** request access to data sets, and in response receive
   *use-specific credentials and endpoints*.
   
These use-specific endpoints will serve up data in a way that is
*automatically* subsetted and redacted, according to the policies
applicable to that request.

---

=== "Introduction"

    > ### Low Touch Regulation
    >
    > Neither data stewards nor data owners are involved in any of the
    > mechanics of processing data access requests.

    ## A Motivating Example

    Fybrik helps govern access to data. Let's work through an example of a
    file stored in an S3 bucket, and a simple client that wants to `cat`
    the contents of that file: `PS_20174392719_1491204439457_log.csv` in a
    bucket named `fybrik-demo`.

    ### Create a namespace for the sample

    To isolate our work, let us first create a new Kubernetes namespace.

    ```bash
    ---
    id: create-sample-namespace
    validate: kubectl get namespace fybrik-demo
    ---
    kubectl create namespace fybrik-demo
    ```

    > ### Our Simple Client
    >
    > To demonstrate how Fybrik regulates data access, let us see what
    > might happen, as a data user, when trying to access a protected data
    > set *without Fybrik*. 
    >
    > To keep things simple, we can start by using the `aws s3api` CLI to
    > access the data, and `kubectl run` to launch a pod that attempts to
    > access that file. We would expect an error such as **"Unable to
    > locate credentials"**, because that pod does not have authority to
    > access the desired S3 file.

    ```shell
    # Use kubectl run and the aws CLI to fetch our data file
    kubectl delete pod/fybrik-simple-client -n fybrik-demo || true \ &&
    kubectl run fybrik-simple-client -n fybrik-demo --image=amazon/aws-cli --restart=Never -- \
        --endpoint-url=http://localstack.fybrik-demo.svc.cluster.local:4566 \
        s3api head-object \
        --bucket fybrik-demo --key PS_20174392719_1491204439457_log.csv

    # Wait for our simple job to complete
    kubectl wait pod/fybrik-simple-client -n fybrik-demo --for=condition=Ready > /dev/null && \
        kubectl wait pod/fybrik-simple-client -n fybrik-demo --for=condition=Ready=false > /dev/null && \
        [[ $(kubectl get pod/fybrik-simple-client -n fybrik-demo -o=jsonpath={.status.phase}) = Succeeded ]] || false

    # Gather the logs from our client
    kubectl logs pod/fybrik-simple-client -n fybrik-demo
    ```

=== "Set up S3"

    # Setting up an Example Data Set

    This guidebook uses a sample of 100 lines of a CSV file from the
    [Synthetic Financial Datasets For Fraud
    Detection](https://www.kaggle.com/ealaxi/paysim1) dataset[^1], and
    uses the [AWS CLI](https://aws.amazon.com/cli/) to upload the dataset
    to S3.

    - **[Deploy an S3 Service](#kui-link-install-s3)** *blank* We
      will use [LocalStack](https://localstack.cloud/) to provide an S3
      service.
    - **[Provide API access to that S3 bucket](#kui-link-start-s3)** *minor*
      Set up a port-forward to the LocalStack service.
    - **[Upload the dataset to S3](#kui-link-upload-dataset)** *blank* We
      will create an S3 bucket, and upload our csv file to this bucket.

    [^1]: Created by NTNU and shared under the ***CC BY-SA 4.0*** license.


    ## Install LocalStack's S3 Service

    [LocalStack](https://localstack.cloud/) gives us a quick way to
    provision an S3 service in our cluster. Install localstack to the
    currently active namespace and wait for it to be ready:

    ```bash
    ---
    id: install-s3
    validate: helm status localstack -n fybrik-demo
    ---
    helm repo add localstack-charts https://localstack.github.io/helm-charts
    helm install localstack localstack-charts/localstack -n fybrik-demo \
        --set startServices=s3 \
        --set service.type=ClusterIP
    ```

    Now we can map the S3 service to a local port:

    ```bash
    ---
    id: start-s3
    ---
    kill $(lsof -t -i:4566) > /dev/null 2> /dev/null || true
    kubectl port-forward svc/localstack 4566:4566 -n fybrik-demo &
    ```

    ## Upload Data to S3

    ```bash
    ---
    id: upload-dataset
    validate: aws --endpoint-url=http://127.0.0.1:4566 s3api head-object --bucket fybrik-demo --key PS_20174392719_1491204439457_log.csv
    ---
    export FILEPATH=$(mktemp)

    echo "Fetching dataset"
    curl https://git.io/JyCP5 -r 0-9999 | head -100 > "$FILEPATH"

    aws configure set aws_access_key_id $(uuidgen)
    aws configure set aws_secret_access_key $(uuidgen)

    echo "Creating bucket"
    aws --endpoint-url=http://127.0.0.1:4566 s3api create-bucket \
        --bucket fybrik-demo

    echo "Uploading data to s3"
    aws --endpoint-url=http://127.0.0.1:4566 s3api put-object \
        --bucket fybrik-demo \
        --key PS_20174392719_1491204439457_log.csv \
        --body "$FILEPATH"
    ```

=== "Data Owners"

    # Fyrik Tasks for Data Owners

    As a data owner you upload a dataset and register it in a data catalog.

    ## Activities

    - **[Install Fybrik on your cluster](#kui-link-install-fybrik)**
      *minor* We will use the built-in catalog, Open Policy Agent (OPA),
      and the Apache Arrow Flight module.
    - **[Prepare the sample data set](#kui-link-example-dataset)** *minor*
    - **[Create namespace for this
    scenario](#kui-link-create-sample-namespace)** *blank* This enables easy
    [cleanup](#cleanup) once you're done experimenting with the sample.
    - **[Register the dataset](#kui-link-register-dataset)** *blank* Teach
      Fybrik about this dataset, its URI, access credentials, and which
      portions of the dataset are PII.

    ??? tip "Before you begin, check your prerequisites"

        === "Fybrik Operators"

            This command sequence will determine whether Fybrik has been successfully installed in your current Kubernetes context.

            ```bash
            ---
            id: install-fybrik
            validate: $body
            ---
            (helm status cert-manager -n cert-manager) && (helm status vault -n fybrik-system) && (helm status fybrik-crd -n fybrik-system) && (helm status fybrik -n fybrik-system) && (kubectl get FybrikModule arrow-flight-module -n fybrik-system)
            ```

        === "Example Data Set"

            ```bash
            ---
            id: example-dataset
            validate: $body
            ---
            aws --endpoint-url=http://127.0.0.1:4566 s3api head-object --bucket fybrik-demo --key PS_20174392719_1491204439457_log.csv
            ```

    ## Create a namespace for the sample

    Create a new Kubernetes namespace to isolate our work.

    ```bash
    ---
    id: create-sample-namespace
    validate: kubectl get namespace fybrik-demo
    ---
    kubectl create namespace fybrik-demo
    ```

    ## Register the dataset in a data catalog

    Register the credentials required for accessing the dataset. We will use the values for `access_key` and `secret_key` that we set up when [preparing the data set](./dataset.md).

    ```bash
    ---
    id: register-dataset-secret
    validate: kubectl get Secret paysim-csv -n fybrik-demo
    ---
    kubectl create secret generic paysim-csv -n fybrik-demo \
        --from-literal access_key=$(aws configure get aws_access_key_id | base64) \
        --from-literal secret_key=$(aws configure get aws_secret_access_key | base64)
    ```

    Then, register the data asset itself in the catalog. Replace the values for `endpoint`, `bucket` and `objectKey` with values from the object storage service that you used and run:

    ```bash
    ---
    id: register-dataset
    validate: kubectl get Asset.katalog.fybrik.io paysim-csv -n fybrik-demo
    ---
    kubectl apply -n fybrik-demo -f plugins/plugin-kubectl/tests/data/k8s/fybrik/asset.yml
    ```

    The asset is now registered in the catalog. The identifier of the asset is `fybrik-demo/paysim-csv` (i.e. `<namespace>/<name>`). You will use that name in the `FybrikApplication` later.

=== "Data Stewards"

    # Fyrik Tasks for Data Stewards

    As a data steward you define policies that govern if and how to grant
    access to a [data user's request for access](./data-user.md) to the
    data sets [registered by the data owner](./data-owner.md).

    ## Activities

    - **[Install Fybrik on your cluster](#kui-link-install-fybrik)**
      *minor* We will use the built-in catalog, Open Policy Agent (OPA),
      and the Apache Arrow Flight module.
    - **[Have the Data Owner define an Asset](#kui-link-data-owner-tasks)** *minor*
    - **[Define access policy](#kui-link-define-access-policy)** *blank* Define
      an OpenPolicyAgent policy to redact the columns tagged as PII.

    ??? tip "Before you begin, check your prerequisites"

        === "Fybrik Operators"

            This command sequence will determine whether Fybrik has been successfully installed in your current Kubernetes context.

            ```bash
            ---
            id: install-fybrik
            validate: $body
            ---
            (helm status cert-manager -n cert-manager) && (helm status vault -n fybrik-system) && (helm status fybrik-crd -n fybrik-system) && (helm status fybrik -n fybrik-system) && (kubectl get FybrikModule arrow-flight-module -n fybrik-system)
            ```

        === "Data Owner Tasks"

            ```bash
            ---
            id: data-owner-tasks
            validate: $body
            ---
            kubectl get Asset.katalog.fybrik.io paysim-csv -n fybrik-demo
            ```

    ## Define data access policies

    To regulate access to data, the data steward may define a set of data
    access policies. Fybrik supports the
    [OpenPolicyAgent](https://www.openpolicyagent.org/) scheme. For
    example, a policy may redact columns of data tagged as `PII` for
    datasets tagged with `finance`. Below is the policy, written in the
    [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/#what-is-rego)
    language.

    ```rego
    package dataapi.authz

    rule[{"action": {"name":"RedactAction", "columns": column_names}, "policy": description}] {
      description := "Redact columns tagged as PII in datasets tagged with finance = true"
      input.action.actionType == "read"
      input.resource.tags.finance
      column_names := [input.resource.columns[i].name | input.resource.columns[i].tags.PII]
      count(column_names) > 0
    }
    ```

    In this sample only the policy above is applied. Copy the policy to a file named `sample-policy.rego` and then run:

    ```bash
    ---
    id: define-access-policy
    validate: "kubectl get cm sample-policy -n fybrik-system -o jsonpath='{.metadata.annotations.openpolicyagent\\.org/policy-status}' | grep ok"
    ---
    kubectl -n fybrik-system delete configmap sample-policy
    kubectl -n fybrik-system create configmap sample-policy \
        --from-literal=policy="$(echo H4sIAJcCymEAA12PwWrDMAyG73kK4VMLw+wcaGHH3sbYLYQhbDU1Sx1jy4w2y7tPSUwXerLR//nzr4DmGzsCi4wYnMbMl3tVxdxTMyo07AavahiVxyupWn2QleHbOn8BZYY+X30SZL19zVyaJAlD78xNAkvJRBfmF1MLYwXbCdQHKNJiSMDYdWQBE7yfTuD8Ui4RP5Ifxxc4O4/eEByAYyYlWudDZr12LsfnLQghX0RC+89ESkOOhrQIky4mSbc7zM2aJ7w0bFyrZwZ+n30bYFHLAu3izZ53W/sejvBaTX9fY7LDfwEAAA== | base64 -d | gunzip)"
    kubectl -n fybrik-system label configmap sample-policy openpolicyagent.org/policy=rego

    while [[ $(kubectl get cm sample-policy -n fybrik-system -o 'jsonpath={.metadata.annotations.openpolicyagent\\.org/policy-status}') != '{"status":"ok"}' ]]; do echo "waiting for policy to be applied" && sleep 5; done
    ```

    You can similarly apply a directory holding multiple rego files.

=== "Data Users"

    # Fyrik Tasks for Data Users

    When coding your application, you may need to acquire access to one or
    more data sets. With Fybrik, you do so by filing a request, in the
    form of a `FybrikApplication` Kubernetes resource. 

    Fybrik then automatically processes this request. If all goes well,
    the request will succeed and the endpoint and credentials will be made
    available as properties of that Kubernetes resource.

    At this point, you may extract those bits of information, and
    integrate them into your application.

    ## Activities

    - **[Install Fybrik on your cluster](#kui-link-install-fybrik)**
      *minor* We will use the built-in catalog, Open Policy Agent (OPA),
      and the Apache Arrow Flight module.
    - **[Have the Data Owner define an Asset](#kui-link-data-owner-tasks)** *minor*
    - **[Have the Data Steward define the regulatory policies](#kui-link-data-steward-tasks)** *minor*
    - **[Create a data access request](#kui-link-create-request)** *blank*
      In Fybrik, a Kubernetes resource of type `FybrikApplication`
      represents such a request.

    ??? tip "Before you begin, check your prerequisites"

        === "Fybrik Operators"

        This command sequence will determine whether Fybrik has been successfully installed in your current Kubernetes context.

        ```bash
        ---
        id: install-fybrik
        validate: $body
        ---
        (helm status cert-manager -n cert-manager) && (helm status vault -n fybrik-system) && (helm status fybrik-crd -n fybrik-system) && (helm status fybrik -n fybrik-system) && (kubectl get FybrikModule arrow-flight-module -n fybrik-system)
        ```

        === "Data Owner Tasks"

        ```bash
        ---
        id: data-owner-tasks
        validate: $body
        ---
        kubectl get Asset.katalog.fybrik.io paysim-csv -n fybrik-demo
        ```

        === "Data Steward Tasks"

        ```bash
        ---
        id: data-steward-tasks
        validate: $body
        ---
        kubectl get cm sample-policy -n fybrik-system -o jsonpath='{.metadata.annotations.openpolicyagent\.org/policy-status}' | grep ok
        ```

    ## Request Data Access

    === "Create Request"
    Create a [`FybrikApplication`](../reference/crds.md#fybrikapplication) resource to register your workload to the control plane of Fybrik: 

    <!-- TODO: role field removed but code still requires it -->
    ```bash
    kubectl apply -n fybrik-demo -f plugins/plugin-kubectl/tests/data/k8s/fybrik/application.yaml
    ```

    Once the application status turns green, you will know that Fybrik has verified the policies established by the data steward, and granted your application an endpoint and credentials to access the data set.

    === "Notes"

    In this resource definition:

    * The `selector` field matches the labels of our workload.
    * The `data` field includes a `dataSetID` that matches the asset identifier in the catalog.
    * The `protocol` and `dataformat` indicate that the developer wants to consume the data using Apache Arrow Flight.

    ## Read the dataset, using our endpoint and credentials

    In your **terminal**, run the following command to print the [endpoint](https://fybrio.io/reference/crds/#fybrikapplicationstatusreadendpointsmapkey) to use for reading the data. It fetches the code from the `FybrikApplication` resource:

    ```bash
    SCHEME=$(kubectl get fybrikapplication my-application -o jsonpath={.status.assetStates.fybrik-notebook-sample/paysim-csv.endpoint.scheme})
    HOSTNAME=$(kubectl get fybrikapplication my-application -o jsonpath={.status.assetStates.fybrik-notebook-sample/paysim-csv.endpoint.hostname})
    PORT=$(kubectl get fybrikapplication my-application -o jsonpath={.status.assetStates.fybrik-notebook-sample/paysim-csv.endpoint.port})
    export DATA_URI="${SCHEME}://${HOSTNAME}:${PORT}"
    ```

    Finally, we can repeat our [initial attempt to access the data set](./index.md).
