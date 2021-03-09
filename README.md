# 120 Anos de Olimpíadas    

Um CRUD para gerenciar e visualizar dados do [120-years-of-olympic-history](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results) 

## :heart: Como usar
### :computer: Primeiramente instale as dependências necessárias:

**No backend é utilizado django então é necessário ter uma virtualenv para um melhor controle dos packages 📦.**

Tenha python instalado e rode os seguintes comandos para criar e ativar a virtualenv.

<li>No Linux

   ```sh
   python -m venv nome_da_virtualenv
   source nome_da_virtualenv/bin/activate
   ```

</li>

<li>No Windows

   ```sh
   python -m venv nome_da_virtualenv
   nome_da_virtualenv\Scripts\activate.bat
   ```

</li>

<li>No Mac
   
   ```sh
   python -m venv nome_da_virtualenv
   source nome_da_virtualenv/bin/activate
   ```

</li>

```sh
cd backend/ && npm install
```

## :computer: No diretório onde contenha o manage.py

```sh
(nome_da_virtualenv)pip install -r requirements.txt
```

**Realize o migrate para que o banco de dados crie a tablea**

```sh
(nome_da_virtualenv) python manage.py migrate
```
**Inicie o servidor**

```sh
python manage.py runserver 
```
## Para o frontend foi utilizado Vue, instale as dependências 📦.

```sh
cd frontend/ && npm install
```

**Após instalar tudo**

```sh
npm run serve
```

## Back-end da API

Os endpoints da API são:
|Rotas| Método | Descrição |
|---|---|---|
|`localhost:8000/api/atheletes`| `GET` | Retorna todos atletas registrados. |
|`localhost:8000/api/atheletes/:id`| `GET` | Retorna apenas um atleta. |
|`localhost:8000/api/atheletes`| `POST` | Cadastra um novo atleta. |
|`localhost:8000/api/atheletes/:id`| `PUT` | Atualiza os dados de um atleta específico. |
|`localhost:8000/api/atheletes/:id`| `DELETE` | Deletar um atleta específico. |

+ Exemplo da Resquest/POST (application/json)
    + Body 
        ```text
        {
            "id": "1",
            "título": "Quiz nº 1",
            "usuário": "Fernando",
            "dataCadastroPergunta": "2021/02/03",
            "localização": {
                "latitude": "-5.1697377",
                "longitude": "-41.703652299999995"
            },
            "perguntas": [
                "Qual o nome do seu primeiro pet?"
            ],
            "dataCadastroResposta": "2021/02/28",
            respostas": [
                "Billy"
            ],
            "respondido": true
        }
        ```
        
## :mailbox_with_mail: License

This software was created for study purposes only. Feel free to try it out.
