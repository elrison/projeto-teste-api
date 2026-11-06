*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC04 Buscar Pets Por Tag
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /pet/findByTags    params=tags=tag1    expected_status=any
    RETURN    ${response}
