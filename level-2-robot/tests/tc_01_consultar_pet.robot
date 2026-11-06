*** Settings ***
Resource    ../resources/tc_01_consultar_pet.resource
Library    Collections

*** Test Cases ***
TC01 - Consultar pet por ID
    ${response}=    Executar TC01 Consultar Pet
    Should Be Equal As Integers    ${response.status_code}    200
    Dictionary Should Contain Key    ${response.json()}    name
