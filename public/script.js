const promptInput = document.getElementById('prompt');
const sentButton = document.getElementById('btn-trimite');
const responseArea = document.querySelector('.response-area p');

sentButton.addEventListener('click', async () => {
    const promptUtilizator =  promptInput.value;

    if(!promptUtilizator.trim()){
        alert("Scrie un prompt inainte de a apasa butonul de trimitere");
        return;
    }

    responseArea.innerText = "Se genereaza raspunusl ....";
    sentButton.disabled = true;

    try {

        const raspunsServer = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: promptUtilizator})
        });

        const data = await raspunsServer.json();

        if(data.response){
            responseArea.innerText = data.response;
        }else{
            responseArea.innerText = "Serverul nu a trimis un mesaj valid";
        }
    }catch(error){
        console.error("Eroare forntend:", error);
        responseArea.innerText = "Nu s a putut comunica cu serverul";
    }finally{
        sentButton.disabled = false;
    }
});