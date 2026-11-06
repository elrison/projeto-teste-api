*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${BASE_URL}    https://petstore.swagger.io/v2
${PET_ID}      ${987654321}

*** Keywords ***
Executar TC01 Consultar Pet
    # O Petstore publico e compartilhado, entao o pet e criado antes da consulta.
    Create Session    petstore    ${BASE_URL}
    ${photo_urls}=    Create List
    ${pet}=    Create Dictionary    id=${PET_ID}    name=Rex    photoUrls=${photo_urls}    status=available
    POST On Session    petstore    /pet    json=${pet}    expected_status=any
    ${response}=    GET On Session    petstore    /pet/${PET_ID}    expected_status=any
    RETURN    ${response}
