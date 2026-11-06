*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC03 Listar Pets Vendidos
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /pet/findByStatus    params=status=sold    expected_status=any
    RETURN    ${response}
