*** Settings ***
Resource    ../resources/tc_05_inventario_loja.resource
Library    Collections

*** Test Cases ***
TC05 - Consultar inventario da loja
    ${response}=    Executar TC05 Consultar Inventario
    Should Be Equal As Integers    ${response.status_code}    200
    Dictionary Should Contain Key    ${response.json()}    available
