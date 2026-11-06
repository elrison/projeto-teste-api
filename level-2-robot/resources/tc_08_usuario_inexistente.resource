*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC08 Consultar Usuario Inexistente
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /user/usuario-inexistente    expected_status=any
    RETURN    ${response}
