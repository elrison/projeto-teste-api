*** Settings ***
Resource    ../resources/tc_06_pet_inexistente.resource

*** Test Cases ***
TC06 - Consultar pet inexistente
    ${response}=    Executar TC06 Consultar Pet Inexistente
    Should Be Equal As Integers    ${response.status_code}    404
