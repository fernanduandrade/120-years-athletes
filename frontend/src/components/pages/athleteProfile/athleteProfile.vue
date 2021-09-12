<template>
<div class="container">
    <div class="card z-depth-2">
        <h3 class="center"><strong>PERFIL DO ATLETA</strong></h3>
        <div class="divider"></div>
        <div class="row">
            <div class="col s6">
                <h6><strong>NOME:</strong> {{ athleteForm.name }}</h6>
                <h6><strong>SEXO:</strong> {{ athleteForm.sex }}</h6>
                <h6><strong>IDADE:</strong> {{ athleteForm.age }}</h6>
                <strong>PESO:</strong> teste
                <h6><strong>ALTURA:</strong> teste</h6>
            </div>

            <div v-if="athleteMedal === 'Bronze'" class="col s6">
                <img width="150px" src="../../../assets/Bronze.svg" alt="medal image" />
            </div>
            <div v-else-if="athleteMedal === 'Silver'" class="col s6">
                <img width="150px" src="../../../assets/Silver.svg" alt="medal image" />
            </div>
            <div v-else-if="athleteMedal === 'Gold'" class="col s6">
                <img width="150px" src="../../../assets/Gold.svg" alt="medal image" />
            </div>
            <div v-else class="col s6">
                <img width="150px" src="../../../assets/participation.png" alt="medal image" />
            </div>
        </div>

    </div>

</div>
</template>

<script src='./athleteProfile.js'></script>

<style>
</style>
