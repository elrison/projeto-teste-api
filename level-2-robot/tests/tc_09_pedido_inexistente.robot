*** Settings ***
Resource    ../resources/tc_09_pedido_inexistente.resource

*** Test Cases ***
TC09 - Consultar pedido inexistente
    ${response}=    Executar TC09 Consultar Pedido Inexistente
    Should Be Equal As Integers    ${response.status_code}    404
