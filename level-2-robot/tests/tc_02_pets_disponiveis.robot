*** Settings ***
Resource    ../resources/tc_02_pets_disponiveis.resource

*** Test Cases ***
TC02 - Listar pets disponiveis
    ${response}=    Executar TC02 Listar Pets Disponiveis
    Should Be Equal As Integers    ${response.status_code}    200
    Should Be True    isinstance($response.json(), list)
