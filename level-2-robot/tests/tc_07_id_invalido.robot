*** Settings ***
Resource    ../resources/tc_07_id_invalido.resource

*** Test Cases ***
TC07 - Consultar pet com ID invalido
    ${response}=    Executar TC07 Consultar ID Invalido
    Should Be Equal As Integers    ${response.status_code}    404
