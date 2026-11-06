*** Settings ***
Resource    ../resources/tc_04_busca_por_tag.resource

*** Test Cases ***
TC04 - Buscar pets por tag
    ${response}=    Executar TC04 Buscar Pets Por Tag
    Should Be Equal As Integers    ${response.status_code}    200
    Should Be True    isinstance($response.json(), list)
