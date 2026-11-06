*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC02 Listar Pets Disponiveis
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /pet/findByStatus    params=status=available    expected_status=any
    RETURN    ${response}
