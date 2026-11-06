*** Settings ***
Resource    ../resources/tc_03_pets_vendidos.resource

*** Test Cases ***
TC03 - Listar pets vendidos
    ${response}=    Executar TC03 Listar Pets Vendidos
    Should Be Equal As Integers    ${response.status_code}    200
    Should Be True    isinstance($response.json(), list)
