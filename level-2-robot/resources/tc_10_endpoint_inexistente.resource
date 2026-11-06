*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC10 Endpoint Inexistente
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /endpoint-inexistente    expected_status=any
    RETURN    ${response}
