*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC05 Consultar Inventario
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /store/inventory    expected_status=any
    RETURN    ${response}
