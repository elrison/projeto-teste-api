*** Settings ***
Resource    ../resources/tc_10_endpoint_inexistente.resource

*** Test Cases ***
TC10 - Consultar endpoint inexistente
    ${response}=    Executar TC10 Endpoint Inexistente
    Should Be Equal As Integers    ${response.status_code}    404
