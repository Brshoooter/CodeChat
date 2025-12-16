const { default: ollama } = require('ollama');

class aiRepository {
    async comunicateWithModel(promptPregatit){
        try{
            const response = await ollama.chat({
                model: 'codellama:7b',
                messages: [{role: 'user', content: promptPregatit}],
            });

            return response.message.content;
        }catch(error){
            console.error("Eroare in aiRepository", error);
            throw error;
        }
    }
}

module.exports = new aiRepository();