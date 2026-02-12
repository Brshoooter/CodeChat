require("dotenv").config();

function readStr(key){
  const value = process.env[key];
  
  if(!value){
    throw new Error(`Eroare la configurarea variabile ${key}`);
  }

  return value;
}

function readInt(key){
  const value = readStr(key);
  const parsed = parseInt(value, 10);

  if(Number.isNaN(parsed)){
    throw new Error(`Eroare la configurarea variabile ${key}`);
  }

  return parsed;
}

const config = {
  port: readInt("PORT"),
  ollamaModel: readStr("OLLAMA_MODEL"),
  ollamaTimeoutMs: readInt("OLLAMA_TIMEOUT_MS")
};

module.exports = { config };
