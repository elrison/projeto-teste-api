*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2

*** Keywords ***
Executar TC09 Consultar Pedido Inexistente
    Create Session    petstore    ${BASE_URL}
    ${response}=    GET On Session    petstore    /store/order/999999999    expected_status=any
    RETURN    ${response}
