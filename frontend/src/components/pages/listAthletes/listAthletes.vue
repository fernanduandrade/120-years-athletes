<template>
<div>
    <div class="container">
        <div class="row">
            <form v-on:submit.prevent="searchAthlete(name)">
                <div class="input-field col s6">
                    <input type="text" v-model="name" />
                    <label for="autocomplete-input">Pesquisar Atleta</label>
                </div>
                <div class="input-field col s6">
                    <input type="text" v-model="search" />
                    <label for="autocomplete-input">Pesquisar na Tabela</label>
                </div>

                <div class="col s8">
                    <div class="row">

                        <div class="col s3">
                            <button class="waves-effect waves-light btn" type="submit">pesquisar</button>
                        </div>

                        <div class="col s2">
                            <p class="page-style"><strong>PÁGINA: </strong></p>
                        </div>

                        <div class="col s2">
                            <select class="browser-default" @click.prevent="getAthletes(pagination.path_page + pageKey)" v-model="pageKey">
                                <option v-for="pages in pagination.last_page" v-bind:key="pages">
                                    {{ pages }}
                                </option>
                            </select>
                        </div>
                        <div class="col s6">
                            <p>Total de registros: <strong>{{totalRegisters}}</strong></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <hr />

        <table class="highlight centered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Ano</th>
                    <th>Time</th>
                    <th>Medalha</th>
                    <th>Esporte</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="athlete in filterAthletes" :key="athlete.id">
                    <td>{{ athlete.name }}</td>
                    <td>{{ athlete.year }}</td>
                    <td>{{ athlete.team }}</td>
                    <td><img class="medal__img" :src="medalImgPath[athlete.medal.trim()]" alt="medal image"></td>
                    <td>{{ athlete.sport }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script src='./listAthletes.js'></script>

<style scoped>
.page-style {
    margin: 0 auto;
    font-size: 24px;
}

.actions {
    display: flex;
    padding-right: 10px;
    justify-content: space-between;
}

.delete-icon {
    cursor: pointer;
    color: rgb(216, 6, 6);
}

.view-icon {
    cursor: pointer;
    color: rgb(6, 137, 177);
}

.edit-icon {
    cursor: pointer;
    color: rgb(6, 238, 6);
}

.country {
    height: 40px;
}

.medal__img {
    width: 50px;
}
</style>
