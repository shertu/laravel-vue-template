# client tests

The following is a guide to classification of tests for client developers:

| classification | purpose                                |     |     |     |
| -------------- | -------------------------------------- | --- | --- | --- |
| component      | custom made components                 |     |     |     |
| integration    | APIs between the client and other apps |     |     |     |
| unit           | individual methods and functions       |     |     |     |

Please note that:

-   components which are specific in scope do **not** need to be tested.

// https://vuejs.org/v2/cookbook/unit-testing-vue-components.html
// https://vue-test-utils.vuejs.org/guides/