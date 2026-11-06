*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC06 Consultar Pet Inexistente
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /pet/999999999    expected_status=any
    RETURN    ${response}
