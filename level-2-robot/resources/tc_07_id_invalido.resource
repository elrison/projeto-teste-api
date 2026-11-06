*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC07 Consultar ID Invalido
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /pet/0    expected_status=any
    RETURN    ${response}
