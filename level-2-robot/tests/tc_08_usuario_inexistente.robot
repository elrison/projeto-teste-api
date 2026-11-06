*** Settings ***
Resource    ../resources/tc_08_usuario_inexistente.resource

*** Test Cases ***
TC08 - Consultar usuario inexistente
    ${response}=    Executar TC08 Consultar Usuario Inexistente
    Should Be Equal As Integers    ${response.status_code}    404
