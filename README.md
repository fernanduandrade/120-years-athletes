# 120 Anos de Olimpíadas    

Um CRUD para gerenciar e visualizar dados do [120-years-of-olympic-history](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results) 

## :heart: Como usar
### :computer: Instale as dependências necessárias:

**No backend é utilizado django, uma virtualenv para um melhor controle dos packages 📦**

Tenha o python instalado na sua máquina e execute os seguintes comandos para criar e ativar a virtualenv.

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

<li>Por fim

    
    cd backend/ && npm install
    

</li>


### :computer: No diretório onde contenha o arquivo `manage.py`

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
### Para o frontend foi utilizado Vue, instale as dependências 📦.

```sh
cd frontend/ && npm install
```

**Após instalar tudo**

```sh
npm run serve
```
## Back-end da API

Você pode visualizar a documentação da API através `localhost:8000/swagger/`.

Os endpoints da API são:
|Rotas| Método | Descrição |
|---|---|---|
|`localhost:8000/api/atheletes`| `GET` | Retorna todos atletas registrados. |
|`localhost:8000/api/atheletes/?page={query}`| `GET` | Retorna o número de página da paginação. |
|`localhost:8000/api/atheletes/?page_size={query}`| `GET` | Retorna a quantidade de registros passado na query(por padrão é 500). |
|`localhost:8000/api/atheletes/?search={query}`| `GET` | Retorna o todos match da query. |
|`localhost:8000/api/atheletes/:id`| `GET` | Retorna apenas um atleta. |
|`localhost:8000/api/atheletes`| `POST` | Cadastra um novo atleta. |
|`localhost:8000/api/atheletes/:id`| `PUT` | Atualiza os dados de um atleta específico. |
|`localhost:8000/api/atheletes/:id`| `DELETE` | Deletar um atleta específico. |

+ Exemplo da Resquest/POST (application/json)
    + Body 
        ```text
        {
            "Name": "Fernando",
            "Sex": "Male",
            "Age": "23",
            "Height": "1.66",
            "Weight": "57",
            "Team": "Brazil",
            "NOC": "BRL",
            "Games": "Copa da Amizade",
            "Year": "2019",
            "Season": "Winter",
            "City": "Teresina",
            "Sport": "Futsal",
            "Event": "Evento beneficente para arrecador dinheiro",
            "Medal": "Gold"
        }
        ```

## :notebook: Notas
**Configurando conexão com banco de dados**

Configure o banco de dados no `settings.py` no diretório `athletes_app/`

```text
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'DOBANCODEDADOS',
            'USER': 'USUARIO',
            'PASSWORD': 'SUASENHA',
            'HOST': 'localhost',
            'PORT': '3306'
    }
}
```

**Crie um super usuário para popular o banco de dados**

Use o arquivo `athlete_events.csv` para adicionar os dados ao database para isso criei um superusuário para acessar a página do django-admin.


```sh
python manage.py createsuperuser
```

Acesse a página do django-admin para adicionar csv.
```text
localhost:8000/admin/
```
Em seguinda clique abaixo da sessão APP `Atheletes` e selecione importar, escolha o arquivo e selecione o formato csv.
## :mailbox_with_mail: License

This software was created for study purposes only. Feel free to try it out.
